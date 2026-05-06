(() => {
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

    const renderHomeNews = (container, items) => {
        if (!container) return;
        if (!Array.isArray(items) || items.length === 0) return;

        const slice = items.slice(0, 3);
        container.innerHTML = slice
            .map((item) => {
                const icon = escapeHtml(item.icon || 'fa-bullhorn');
                const type = escapeHtml(item.type || 'Update');
                const year = escapeHtml(item.year || '');
                const title = escapeHtml(item.title || '');
                const summary = escapeHtml(item.summary || '');
                const url = escapeHtml(item.url || 'services.html');

                return `
                    <div class="col-lg-4">
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

    const renderHubCards = (container, items) => {
        if (!container) return;
        if (!Array.isArray(items) || items.length === 0) return;

        container.innerHTML = items
            .map((item) => {
                const icon = escapeHtml(item.icon || 'fa-newspaper');
                const title = escapeHtml(item.title || '');
                const summary = escapeHtml(item.summary || '');
                const type = escapeHtml(item.type || item.tag || '');
                const url = escapeHtml(item.url || '#');
                const cta = type ? type : 'Read more';

                return `
                    <div class="col-lg-4 col-md-6">
                        <div class="feature-card p-4">
                            <div class="icon-box mx-auto mb-4" style="width: 72px; height: 72px; font-size: 2rem;">
                                <i class="fas ${icon}"></i>
                            </div>
                            <h4 class="text-center mb-3">${title}</h4>
                            <p class="text-muted mb-4">${summary}</p>
                            <a href="${url}" class="btn btn-outline-primary mt-auto">${cta}</a>
                        </div>
                    </div>
                `;
            })
            .join('');
    };

    const renderTestimonials = (container, items) => {
        if (!container) return;
        if (!Array.isArray(items) || items.length === 0) return;

        container.innerHTML = items
            .slice(0, 3)
            .map((item) => {
                const quote = escapeHtml(item.quote || '');
                const name = escapeHtml(item.name || '');
                const role = escapeHtml(item.role || '');
                const avatar = escapeHtml((name || 'CL').split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase());

                return `
                    <div class="col-lg-4">
                        <div class="testimonial-card p-4 p-lg-5">
                            <div class="testimonial-quote">“${quote}”</div>
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

    const applyContent = (content) => {
        const phone = content?.site?.contact?.phone;
        const email = content?.site?.contact?.email;
        const address = content?.site?.contact?.address;

        setText(byData('site', 'phone'), phone);
        setText(byData('site', 'email'), email);
        setText(byData('site', 'address'), address);

        setHref(byData('social', 'linkedin'), content?.site?.social?.linkedin);
        setHref(byData('social', 'instagram'), content?.site?.social?.instagram);
        setHref(byData('social', 'twitter'), content?.site?.social?.twitter);
        setHref(byData('social', 'youtube'), content?.site?.social?.youtube);

        const updates = content?.home?.latestUpdates || content?.knowledgeHub?.news;
        renderHomeNews(document.getElementById('homeNewsContainer'), updates);
        renderHubCards(document.getElementById('hubNewsContainer'), updates);
        renderHubCards(document.getElementById('hubArticlesContainer'), content?.knowledgeHub?.articles);
        renderTestimonials(document.getElementById('homeTestimonialsContainer'), content?.home?.testimonials);
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
            const content = await fetchJson();
            if (!content) return;
            applyContent(content);
        } catch (_) {
        }
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
