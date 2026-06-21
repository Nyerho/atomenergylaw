(() => {
    const DRAFT_STORAGE_KEY = 'atomSiteContentDraft';
    const defaultVisibility = {
        pages: {
            home: true,
            about: true,
            expertise: true,
            practice: true,
            sectors: true,
            contact: true,
            knowledgeHub: true,
            newsUpdates: true,
            articles: true,
            insightsResources: true
        },
        sections: {
            homeOverview: true,
            homeExpertise: true,
            homePracticeGroups: true,
            homeNews: true,
            homeTestimonials: true,
            homeContactCta: true,
            hubIntro: true,
            hubSections: true
        }
    };

    const pageHrefMap = {
        home: ['index.html', './', '/'],
        about: ['about.html'],
        expertise: ['expertise.html', 'expertise-sector.html'],
        practice: ['practice.html'],
        sectors: ['sectors.html'],
        contact: ['contact.html'],
        knowledgeHub: ['services.html'],
        newsUpdates: ['news-updates.html'],
        articles: ['articles.html'],
        insightsResources: ['insights-resources.html']
    };

    const legalHrefMap = {
        'privacy policy': 'privacy-policy.html',
        'anti-bribery and corruption statement': 'anti-bribery-corruption-statement.html'
    };

    const safeParseUrl = (value) => {
        if (typeof value !== 'string') return null;
        const trimmed = value.trim();
        if (!trimmed) return null;
        return trimmed;
    };

    const byData = (name, value) => Array.from(document.querySelectorAll(`[data-${name}="${value}"]`));

    const setText = (elements, value) => {
        const text = typeof value === 'string' ? value : '';
        elements.forEach((el) => {
            el.textContent = text;
        });
    };

    const setHref = (elements, value) => {
        const href = safeParseUrl(value) || '#';
        elements.forEach((el) => {
            el.setAttribute('href', href);
            if (href !== '#') {
                el.setAttribute('target', '_blank');
                el.setAttribute('rel', 'noopener noreferrer');
            }
        });
    };

    const setPageHref = (elements, value) => {
        const href = safeParseUrl(value) || '#';
        elements.forEach((el) => {
            el.setAttribute('href', href);
            el.removeAttribute('target');
            el.removeAttribute('rel');
        });
    };

    const setImage = (selector, value, alt) => {
        const src = safeParseUrl(value);
        if (!src) return;
        document.querySelectorAll(selector).forEach((img) => {
            img.setAttribute('src', src);
            if (alt) img.setAttribute('alt', alt);
        });
    };

    const escapeHtml = (value) => {
        if (value == null) return '';
        return String(value)
            .replaceAll('&', '&amp;')
            .replaceAll('<', '&lt;')
            .replaceAll('>', '&gt;')
            .replaceAll('"', '&quot;')
            .replaceAll("'", '&#39;');
    };

    const mergeVisibility = (content) => ({
        pages: { ...defaultVisibility.pages, ...(content?.visibility?.pages || {}) },
        sections: { ...defaultVisibility.sections, ...(content?.visibility?.sections || {}) }
    });

    const isVisible = (visibility, type, key) => visibility?.[type]?.[key] !== false;

    const hideElement = (el) => {
        if (!el) return;
        el.hidden = true;
        el.setAttribute('aria-hidden', 'true');
        el.style.setProperty('display', 'none', 'important');
    };

    const parseUpdatedAt = (value) => {
        const time = Date.parse(typeof value === 'string' ? value : '');
        return Number.isNaN(time) ? 0 : time;
    };

    const loadStoredDraft = () => {
        try {
            const raw = window.localStorage.getItem(DRAFT_STORAGE_KEY);
            if (!raw) return null;
            const parsed = JSON.parse(raw);
            return parsed && typeof parsed === 'object' ? parsed : null;
        } catch (_) {
            return null;
        }
    };

    const pickFreshestContent = (fileContent, draftContent) => {
        if (!draftContent) return fileContent;
        if (!fileContent) return draftContent;
        return parseUpdatedAt(draftContent.updatedAt) > parseUpdatedAt(fileContent.updatedAt)
            ? draftContent
            : fileContent;
    };

    const applySectionVisibility = (visibility) => {
        document.querySelectorAll('[data-visibility-section]').forEach((el) => {
            const key = el.getAttribute('data-visibility-section');
            if (!isVisible(visibility, 'sections', key)) hideElement(el);
        });
    };

    const hideLinksForPage = (pageKey) => {
        const hrefs = pageHrefMap[pageKey] || [];
        document.querySelectorAll('a[href]').forEach((link) => {
            const href = link.getAttribute('href') || '';
            if (!hrefs.some((candidate) => href === candidate)) return;
            const wrapper = link.closest('.nav-item, li, .col-lg-4, .col-md-6, .col-lg-6');
            hideElement(wrapper || link);
        });
    };

    const applyNavigationVisibility = (visibility) => {
        Object.keys(defaultVisibility.pages).forEach((pageKey) => {
            if (!isVisible(visibility, 'pages', pageKey)) {
                hideLinksForPage(pageKey);
            }
        });
    };

    const applyLegalLinks = () => {
        document.querySelectorAll('a').forEach((link) => {
            const label = (link.textContent || '').trim().toLowerCase();
            const href = legalHrefMap[label];
            if (!href) return;
            setPageHref([link], href);
        });
    };

    const renderUnavailablePage = () => {
        document.body.innerHTML = `
            <div style="min-height:100vh;display:flex;align-items:center;justify-content:center;padding:32px;background:linear-gradient(135deg,#06294f,#021223);font-family:Montserrat,sans-serif;">
                <div style="max-width:640px;width:100%;background:rgba(255,255,255,0.96);border-radius:24px;padding:40px 32px;box-shadow:0 24px 60px rgba(2,6,23,0.28);text-align:center;">
                    <div style="width:72px;height:72px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;background:rgba(21,147,209,0.12);color:#1593d1;font-size:28px;margin-bottom:18px;">
                        <span style="font-weight:700;">i</span>
                    </div>
                    <h1 style="font-family:Marcellus,serif;font-weight:400;font-size:clamp(2rem,4vw,2.8rem);margin:0 0 12px;color:#1a1a1a;">Temporarily Hidden</h1>
                    <p style="font-size:15px;line-height:1.8;color:#4b5563;margin:0 0 24px;">This page is currently hidden from the website and will reappear when the admin enables it again.</p>
                    <a href="index.html" style="display:inline-flex;align-items:center;justify-content:center;padding:12px 24px;border-radius:999px;background:linear-gradient(135deg,#1593d1,#0f6f9e);color:#ffffff;text-decoration:none;font-weight:600;">Return Home</a>
                </div>
            </div>
        `;
    };

    const applyPageVisibility = (visibility) => {
        const pageKey = document.body?.dataset?.pageKey;
        if (!pageKey) return true;
        if (isVisible(visibility, 'pages', pageKey)) return true;
        renderUnavailablePage();
        return false;
    };

    const renderHomeNews = (container, items) => {
        if (!container || !Array.isArray(items) || items.length === 0) return;
        const slice = items.slice(0, 2);
        container.innerHTML = slice
            .map((item) => {
                const icon = escapeHtml(item.icon || 'fa-bullhorn');
                const type = escapeHtml(item.type || 'Update');
                const year = escapeHtml(item.year || '');
                const title = escapeHtml(item.title || '');
                const summary = escapeHtml(item.summary || '');
                const url = escapeHtml(item.url || 'services.html');
                return `
                    <div class="col-lg-6">
                        <div class="news-card p-4">
                            <div class="news-meta mb-3">
                                <span class="news-badge"><i class="fas ${icon}"></i><span>${type}</span></span>
                                <span><i class="far fa-calendar me-2"></i>${year}</span>
                            </div>
                            <h3 class="h5 news-title mb-2">${title}</h3>
                            <p class="text-muted mb-4">${summary}</p>
                            <a href="${url}" class="news-link">Read more <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                `;
            })
            .join('');
    };

    const renderArticleLikeCards = (container, items, emptyLabel = 'Read more') => {
        if (!container || !Array.isArray(items) || items.length === 0) return;
        container.innerHTML = items
            .map((item) => {
                const image = safeParseUrl(item.image);
                const icon = escapeHtml(item.icon || 'fa-file-lines');
                const tag = escapeHtml(item.tag || item.type || 'Item');
                const title = escapeHtml(item.title || '');
                const summary = escapeHtml(item.summary || '');
                const url = escapeHtml(item.url || '#');
                const cta = escapeHtml(item.button || tag || emptyLabel);
                const media = image
                    ? `<img src="${escapeHtml(image)}" alt="${title}" class="img-fluid rounded-4 mb-4 w-100" style="height: 220px; object-fit: cover;">`
                    : `<div class="icon-box mx-auto mb-4" style="width: 72px; height: 72px; font-size: 2rem;"><i class="fas ${icon}"></i></div>`;
                return `
                    <div class="col-lg-4 col-md-6">
                        <div class="feature-card p-4 h-100">
                            ${media}
                            <div class="text-primary fw-bold text-uppercase small mb-2">${tag}</div>
                            <h4 class="mb-3">${title}</h4>
                            <p class="text-muted mb-4">${summary}</p>
                            <a href="${url}" class="btn btn-outline-primary mt-auto align-self-start">${cta}</a>
                        </div>
                    </div>
                `;
            })
            .join('');
    };

    const renderKnowledgeHubCards = (container, items, visibility) => {
        if (!container || !Array.isArray(items) || items.length === 0) return;
        const filtered = items.filter((item) => {
            const url = item?.url || '';
            if (url === 'news-updates.html') return isVisible(visibility, 'pages', 'newsUpdates');
            if (url === 'articles.html') return isVisible(visibility, 'pages', 'articles');
            if (url === 'insights-resources.html') return isVisible(visibility, 'pages', 'insightsResources');
            return true;
        });
        container.innerHTML = filtered
            .map((item) => {
                const icon = escapeHtml(item.icon || 'fa-book-open');
                const title = escapeHtml(item.title || '');
                const summary = escapeHtml(item.summary || '');
                const button = escapeHtml(item.button || 'Open');
                const url = escapeHtml(item.url || 'services.html');
                return `
                    <div class="col-lg-4 col-md-6">
                        <div class="feature-card p-4 h-100">
                            <div class="icon-box mb-4" style="width: 72px; height: 72px; font-size: 2rem;"><i class="fas ${icon}"></i></div>
                            <h3 class="h4 mb-3">${title}</h3>
                            <p class="text-muted mb-4">${summary}</p>
                            <a href="${url}" class="btn btn-outline-primary mt-auto align-self-start">${button}</a>
                        </div>
                    </div>
                `;
            })
            .join('');
    };

    const downloadTextFile = (filename, content) => {
        const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(url);
    };

    const renderResourceLibrary = (container, items) => {
        if (!container || !Array.isArray(items)) return;

        const searchInput = document.getElementById('resourceSearchInput');
        const categorySelect = document.getElementById('resourceCategoryFilter');
        const emptyState = document.getElementById('resourceEmptyState');
        const viewButtons = Array.from(document.querySelectorAll('[data-resource-view]'));
        const modalEl = document.getElementById('resourceModal');
        const modalTitle = document.getElementById('resourceModalTitle');
        const modalCategory = document.getElementById('resourceModalCategory');
        const modalSummary = document.getElementById('resourceModalSummary');
        const modalView = document.getElementById('resourceModalView');
        const modalDownload = document.getElementById('resourceModalDownload');
        const modal = modalEl && window.bootstrap?.Modal ? new bootstrap.Modal(modalEl) : null;
        const pageName = 'insights-resources.html';
        const state = { query: '', category: 'all', view: 'grid' };

        const normalize = (value) => String(value || '').trim();
        const categories = Array.from(new Set(items.map((item) => normalize(item.tag)).filter(Boolean)));

        if (categorySelect && categorySelect.dataset.bound !== 'true') {
            categorySelect.innerHTML = '<option value="all">All Categories</option>' + categories
                .map((category) => `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`)
                .join('');
            categorySelect.dataset.bound = 'true';
            categorySelect.addEventListener('change', () => {
                state.category = categorySelect.value;
                render();
            });
        }

        if (searchInput && searchInput.dataset.bound !== 'true') {
            searchInput.dataset.bound = 'true';
            searchInput.addEventListener('input', () => {
                state.query = searchInput.value.trim().toLowerCase();
                render();
            });
        }

        viewButtons.forEach((button) => {
            if (button.dataset.bound === 'true') return;
            button.dataset.bound = 'true';
            button.addEventListener('click', () => {
                state.view = button.getAttribute('data-resource-view') || 'grid';
                viewButtons.forEach((item) => item.classList.toggle('active', item === button));
                render();
            });
        });

        const openResource = (item) => {
            if (!modal || !modalTitle || !modalCategory || !modalSummary || !modalDownload) return;
            const title = normalize(item.title) || 'Resource';
            const category = normalize(item.tag) || 'Resource';
            const summary = normalize(item.summary) || 'No summary has been added for this resource yet.';
            const resourceUrl = normalize(item.url);
            const canOpenLink = resourceUrl && !resourceUrl.endsWith(pageName) && resourceUrl !== '#';
            const downloadName = `${title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'resource'}.txt`;
            const downloadBody = `${title}\nCategory: ${category}\n\n${summary}`;

            modalTitle.textContent = title;
            modalCategory.textContent = category;
            modalSummary.textContent = summary;

            if (modalView) {
                if (canOpenLink) {
                    modalView.hidden = false;
                    modalView.setAttribute('href', resourceUrl);
                } else {
                    modalView.hidden = true;
                    modalView.removeAttribute('href');
                }
            }

            modalDownload.onclick = () => {
                if (canOpenLink) {
                    window.open(resourceUrl, '_blank', 'noopener');
                } else {
                    downloadTextFile(downloadName, downloadBody);
                }
            };

            modal.show();
        };

        const render = () => {
            const filtered = items.filter((item) => {
                const category = normalize(item.tag);
                const haystack = `${normalize(item.title)} ${normalize(item.summary)} ${category}`.toLowerCase();
                const matchesCategory = state.category === 'all' || category === state.category;
                const matchesQuery = !state.query || haystack.includes(state.query);
                return matchesCategory && matchesQuery;
            });

            container.className = state.view === 'list' ? 'row g-3 resource-results resource-results-list' : 'row g-4 resource-results';

            if (emptyState) emptyState.hidden = filtered.length !== 0;

            container.innerHTML = filtered
                .map((item, index) => {
                    const title = escapeHtml(item.title || '');
                    const category = escapeHtml(item.tag || 'Resource');
                    const summary = escapeHtml(item.summary || '');
                    const image = safeParseUrl(item.image);
                    const icon = escapeHtml(item.icon || 'fa-book-open');
                    const imageMarkup = image
                        ? `<img src="${escapeHtml(image)}" alt="${title}" class="img-fluid rounded-4 mb-4 w-100 resource-thumb">`
                        : `<div class="icon-box mb-4" style="width: 72px; height: 72px; font-size: 2rem;"><i class="fas ${icon}"></i></div>`;
                    const colClass = state.view === 'list' ? 'col-12' : 'col-lg-4 col-md-6';
                    return `
                        <div class="${colClass}">
                            <button type="button" class="feature-card resource-card p-4 h-100 text-start" data-resource-index="${index}">
                                ${imageMarkup}
                                <div class="text-primary fw-bold text-uppercase small mb-2">${category}</div>
                                <h3 class="h4 mb-3">${title}</h3>
                                <p class="text-muted mb-0">${summary}</p>
                            </button>
                        </div>
                    `;
                })
                .join('');

            container.querySelectorAll('[data-resource-index]').forEach((button) => {
                button.addEventListener('click', () => {
                    const index = Number(button.getAttribute('data-resource-index'));
                    const item = filtered[index];
                    if (item) openResource(item);
                });
            });
        };

        render();
    };

    const renderTestimonials = (container, items) => {
        if (!container || !Array.isArray(items) || items.length === 0) return;
        container.innerHTML = items
            .slice(0, 3)
            .map((item) => {
                const quote = escapeHtml(item.quote || '');
                const name = escapeHtml(item.name || '');
                const role = escapeHtml(item.role || '');
                const avatar = escapeHtml((name || 'CL').split(' ').map((word) => word[0]).slice(0, 2).join('').toUpperCase());
                return `
                    <div class="col-lg-4">
                        <div class="testimonial-card p-4 p-lg-5">
                            <div class="testimonial-quote">${quote}</div>
                            <div class="testimonial-meta">
                                <div class="testimonial-avatar" aria-hidden="true">${avatar}</div>
                                <div>
                                    <div class="fw-bold" style="color: rgba(15,23,42,0.9);">${name}</div>
                                    <div class="text-muted small">${role}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            })
            .join('');
    };

    const renderHomeHubExplorer = (content) => {
        const nav = document.getElementById('homeHubExplorerNav');
        const preview = document.getElementById('homeHubExplorerPreview');
        const hub = content?.knowledgeHub;
        const testimonials = content?.home?.testimonials;
        if (!nav || !preview || !hub) return;

        const sections = [
            {
                id: 'news',
                navTitle: 'Latest Updates',
                navSubtitle: 'Current briefings and market developments.',
                kicker: hub?.pages?.news?.kicker || 'Latest Briefings',
                title: hub?.pages?.news?.title || 'Latest Updates',
                lead: hub?.pages?.news?.lead || 'Track announcements, market developments, and practical updates relevant to the energy and natural resources sectors.',
                link: 'news-updates.html',
                button: 'Open Latest Updates',
                image: hub?.news?.[0]?.image || 'assets/heroslide4.jpg',
                stats: [
                    { label: 'Coverage', value: 'News', note: 'Fast, timely briefings from across the sector.' },
                    { label: 'Items', value: String((hub?.news || []).length || 0).padStart(2, '0'), note: 'Live entries curated for relevance.' },
                    { label: 'Focus', value: 'Current', note: 'Built for decisions that need speed and clarity.' }
                ],
                bullets: (hub?.news || []).slice(0, 4).map((item) => `${item.title}: ${item.summary}`)
            },
            {
                id: 'articles',
                navTitle: 'Articles & Insights',
                navSubtitle: 'Long-form analysis and thought leadership.',
                kicker: hub?.pages?.articles?.kicker || 'Thought Leadership',
                title: hub?.pages?.articles?.title || 'Articles & Insights',
                lead: hub?.pages?.articles?.lead || 'Longer-form analysis, client notes, and commercially focused insight.',
                link: 'articles.html',
                button: 'Open Articles & Insights',
                image: hub?.articles?.[0]?.image || 'assets/heroslide3.jpg',
                stats: [
                    { label: 'Coverage', value: 'Ideas', note: 'Insight-led pieces with commercial context.' },
                    { label: 'Items', value: String((hub?.articles || []).length || 0).padStart(2, '0'), note: 'Feature-ready article previews.' },
                    { label: 'Focus', value: 'Depth', note: 'Built for deeper reading and practical takeaways.' }
                ],
                bullets: (hub?.articles || []).slice(0, 4).map((item) => `${item.title}: ${item.summary}`)
            },
            {
                id: 'resources',
                navTitle: 'Resource Center',
                navSubtitle: 'Bills, laws, regulations, and practical tools.',
                kicker: hub?.pages?.resources?.kicker || 'Bills, Laws and Regulations',
                title: hub?.pages?.resources?.title || 'Resource Center',
                lead: hub?.pages?.resources?.lead || 'Browse bills, laws, regulations, trackers, and practical legal materials.',
                link: 'insights-resources.html',
                button: 'Open Resource Center',
                image: hub?.resources?.[0]?.image || 'assets/mining.jpg',
                stats: [
                    { label: 'Coverage', value: 'Library', note: 'Reference materials organized for practical use.' },
                    { label: 'Items', value: String((hub?.resources || []).length || 0).padStart(2, '0'), note: 'Bills, laws, and regulations in one place.' },
                    { label: 'Focus', value: 'Tools', note: 'Useful for projects, compliance, and market tracking.' }
                ],
                bullets: (hub?.resources || []).slice(0, 4).map((item) => `${item.title}: ${item.summary}`)
            },
            {
                id: 'testimonials',
                navTitle: 'Client Perspectives',
                navSubtitle: 'Selected comments from clients and partners.',
                kicker: 'Client Perspectives',
                title: 'Trusted by Clients',
                lead: 'Selected comments from clients and partners who value clarity, responsiveness, and execution-ready counsel.',
                link: 'contact.html',
                button: 'Contact The Firm',
                image: 'assets/whoweare-optimized.webp',
                stats: [
                    { label: 'Coverage', value: 'Trust', note: 'Feedback grounded in execution and responsiveness.' },
                    { label: 'Voices', value: String((testimonials || []).length || 0).padStart(2, '0'), note: 'Representative comments across mandates.' },
                    { label: 'Focus', value: 'Value', note: 'Commercially grounded legal support that moves matters forward.' }
                ],
                bullets: (testimonials || []).slice(0, 4).map((item) => `"${item.quote}" - ${item.name}, ${item.role}`)
            }
        ].filter((section) => Array.isArray(section.bullets) && section.bullets.length);

        if (!sections.length) return;

        const renderPreview = (sectionId) => {
            const active = sections.find((section) => section.id === sectionId) || sections[0];
            nav.querySelectorAll('.hub-explorer-item').forEach((button) => {
                button.classList.toggle('is-active', button.getAttribute('data-hub-section') === active.id);
            });

            const statsMarkup = active.stats.map((stat) => `
                <div class="hub-preview-stat">
                    <div class="hub-preview-stat-label">${escapeHtml(stat.label)}</div>
                    <div class="hub-preview-stat-value">${escapeHtml(stat.value)}</div>
                    <div class="hub-preview-stat-note">${escapeHtml(stat.note)}</div>
                </div>
            `).join('');

            const bulletsMarkup = active.bullets.map((bullet) => `
                <div class="hub-preview-list-item">
                    <i class="fas fa-circle-check"></i>
                    <span>${escapeHtml(bullet)}</span>
                </div>
            `).join('');

            const imageStyle = active.image ? `style="--hub-preview-image: url('${escapeHtml(active.image)}')"` : '';

            preview.innerHTML = `
                <article class="hub-preview-panel">
                    <div class="hub-preview-media" ${imageStyle}></div>
                    <div class="hub-preview-content">
                        <p class="hub-preview-kicker">${escapeHtml(active.kicker)}</p>
                        <h3 class="hub-preview-title">${escapeHtml(active.title)}</h3>
                        <p class="hub-preview-lead">${escapeHtml(active.lead)}</p>
                        <div class="hub-preview-stats">${statsMarkup}</div>
                        <div class="hub-preview-list">${bulletsMarkup}</div>
                        <a href="${escapeHtml(active.link)}" class="btn btn-primary hub-preview-cta">${escapeHtml(active.button)} <i class="fas fa-arrow-right"></i></a>
                    </div>
                </article>
            `;
        };

        nav.innerHTML = sections.map((section, index) => `
            <button type="button" class="hub-explorer-item${index === 0 ? ' is-active' : ''}" data-hub-section="${escapeHtml(section.id)}">
                <div class="hub-explorer-item-title">
                    <span>${escapeHtml(section.navTitle)}</span>
                    <i class="fas fa-arrow-right"></i>
                </div>
                <p class="hub-explorer-item-subtitle">${escapeHtml(section.navSubtitle)}</p>
            </button>
        `).join('');

        nav.querySelectorAll('.hub-explorer-item').forEach((button) => {
            button.addEventListener('click', () => {
                renderPreview(button.getAttribute('data-hub-section') || sections[0].id);
            });
        });

        renderPreview(sections[0].id);
    };

    const bindMailingListForms = (content) => {
        const destination = content?.site?.contact?.email || 'advisory@atom-energylaw.com';
        document.querySelectorAll('[data-email-list-form]').forEach((form) => {
            if (form.dataset.bound === 'true') return;
            form.dataset.bound = 'true';
            form.addEventListener('submit', (event) => {
                event.preventDefault();
                const input = form.querySelector('[data-email-list-input]');
                const success = form.querySelector('[data-email-list-success]');
                if (!(input instanceof HTMLInputElement)) return;
                if (!form.reportValidity()) return;
                const email = input.value.trim();
                const subject = encodeURIComponent('Mailing List Signup');
                const body = encodeURIComponent(`Please add this email to the Atom Energy Law Advisory mailing list:

${email}`);
                if (success) {
                    success.textContent = 'Opening your email client to complete the signup request.';
                }
                window.setTimeout(() => {
                    window.location.href = `mailto:${destination}?subject=${subject}&body=${body}`;
                }, 180);
            });
        });
    };

    const applyKnowledgeHubIntro = (hub, visibility) => {
        const intro = hub?.intro || {};
        Object.entries(intro).forEach(([key, value]) => {
            if (key === 'cards' || key === 'image') return;
            setText(byData('hub-intro', key), value);
        });
        setImage('[data-hub-intro-image]', intro.image, intro.sectionTitle || intro.heroTitle || 'Knowledge Hub');
        renderKnowledgeHubCards(document.getElementById('knowledgeHubNavCards'), intro.cards || [], visibility);
        renderKnowledgeHubCards(document.getElementById('homeKnowledgeHubCards'), intro.cards || [], visibility);
    };

    const applyKnowledgeHubPage = (hub) => {
        const key = document.body?.dataset?.hubPageKey;
        if (!key) return;
        const page = hub?.pages?.[key] || {};
        Object.entries(page).forEach(([field, value]) => {
            setText(byData('hub-page-field', field), value);
        });
        const container = document.getElementById('hubPageContainer');
        if (!container) return;
        if (key === 'news') {
            renderArticleLikeCards(container, hub?.news || [], 'Read more');
        } else if (key === 'articles') {
            renderArticleLikeCards(container, hub?.articles || [], 'Read article');
        } else if (key === 'resources') {
            renderResourceLibrary(container, hub?.resources || []);
        }
    };

    const applyContent = (content) => {
        const visibility = mergeVisibility(content);
        applyLegalLinks();
        applyNavigationVisibility(visibility);
        if (!applyPageVisibility(visibility)) return;
        applySectionVisibility(visibility);

        setText(byData('site', 'phone'), content?.site?.contact?.phone);
        setText(byData('site', 'email'), content?.site?.contact?.email);
        setText(byData('site', 'address'), content?.site?.contact?.address);

        setHref(byData('social', 'linkedin'), content?.site?.social?.linkedin);
        setHref(byData('social', 'instagram'), content?.site?.social?.instagram);
        setHref(byData('social', 'youtube'), content?.site?.social?.youtube);

        renderHomeNews(document.getElementById('homeNewsContainer'), content?.knowledgeHub?.news || []);
        renderTestimonials(document.getElementById('homeTestimonialsContainer'), content?.home?.testimonials || []);
        renderHomeHubExplorer(content);
        applyKnowledgeHubIntro(content?.knowledgeHub, visibility);
        applyKnowledgeHubPage(content?.knowledgeHub);
        bindMailingListForms(content);
    };

    const fetchJson = async () => {
        const url = new URL('site-content.json', window.location.href);
        url.searchParams.set('v', String(Date.now()));
        const response = await fetch(url.toString(), { cache: 'no-store' });
        if (!response.ok) return null;
        return response.json();
    };

    const init = async () => {
        try {
            const fileContent = await fetchJson();
            const draftContent = loadStoredDraft();
            const content = pickFreshestContent(fileContent, draftContent);
            if (!content) return;
            applyContent(content);
        } catch (_) {
            const draftContent = loadStoredDraft();
            if (!draftContent) return;
            applyContent(draftContent);
        }
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
