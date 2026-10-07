(() => {
  const escapeHtml = (value = '') => String(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));
  const formatSize = (bytes) => {
    if (!Number.isFinite(Number(bytes))) return '';
    const mb = Number(bytes) / (1024 * 1024);
    return mb >= 1 ? `${mb.toFixed(1)} MB` : `${Math.max(1, Math.round(Number(bytes) / 1024))} KB`;
  };
  const safeFile = (value) => typeof value === 'string' && /^assets\/knowledge-hub\/[a-z0-9-]+(?:\/)?[a-z0-9-]*\.(?:pdf)$/i.test(value) ? value : '';

  const makeCard = (document, { latest = false } = {}) => {
    const file = safeFile(document.file);
    if (!file) return '';
    const title = escapeHtml(document.title || 'Regulatory document');
    const category = escapeHtml(document.category || 'oil-gas');
    const categoryLabel = escapeHtml(document.categoryLabel || 'Oil & Gas');
    const year = document.year ? String(document.year) : '';
    const size = formatSize(document.fileSizeBytes);
    return `<div class="col-md-6 col-xl-4">
      <article class="card resource-card ${latest ? 'latest-resource-card' : ''}" data-resource-card data-category="${category}" data-year="${escapeHtml(year)}">
        <div class="card-body">
          <div><span class="tag">${latest ? 'New addition · ' : ''}${categoryLabel}${year ? ` · ${escapeHtml(year)}` : ''}</span>
          <h2>${title}</h2>
          <p>${latest ? 'Recently added regulatory document' : 'Regulatory document'}${year ? ` · Document year ${escapeHtml(year)}` : ''}${size ? ` · ${escapeHtml(size)}` : ''}</p></div>
          <div class="resource-actions">
            <button class="btn btn-outline-primary" type="button" data-pdf-preview data-pdf="${escapeHtml(file)}" data-pdf-title="${title}">Preview</button>
            <a class="btn btn-primary" href="${escapeHtml(file)}" target="_blank" rel="noopener">Open PDF <i class="fa fa-arrow-right ms-1" aria-hidden="true"></i></a>
          </div>
        </div>
      </article>
    </div>`;
  };

  const dialog = document.getElementById('pdfPreviewDialog');
  const frame = document.getElementById('pdfPreviewFrame');
  const previewTitle = document.getElementById('pdfPreviewTitle');
  const openLink = document.getElementById('pdfPreviewOpenLink');
  const showPreview = (button) => {
    const file = safeFile(button.dataset.pdf);
    if (!file || !dialog || !frame) return;
    previewTitle.textContent = button.dataset.pdfTitle || 'Document preview';
    frame.title = `PDF preview: ${previewTitle.textContent}`;
    frame.src = `${file}#toolbar=1&navpanes=0&view=FitH`;
    if (openLink) openLink.href = file;
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else window.open(file, '_blank', 'noopener');
  };

  document.addEventListener('click', (event) => {
    const preview = event.target.closest('[data-pdf-preview]');
    if (preview) showPreview(preview);
    if (event.target.closest('[data-close-pdf-preview]')) dialog?.close();
    if (dialog && event.target === dialog) dialog.close();
  });
  dialog?.addEventListener('close', () => { if (frame) frame.removeAttribute('src'); });

  const latestGrid = document.getElementById('latestRegulations');
  const regulationGrid = document.getElementById('regulationGrid');
  const status = document.getElementById('regulationLoadStatus');
  const addYearOptions = () => {
    const yearSelect = document.getElementById('resourceYear');
    if (!yearSelect) return;
    const years = [...new Set([...document.querySelectorAll('[data-resource-card]')]
      .map((card) => card.dataset.year).filter(Boolean))].sort((a, b) => Number(b) - Number(a));
    yearSelect.innerHTML = '<option value="all">All document years</option>' + years.map((year) => `<option value="${escapeHtml(year)}">${escapeHtml(year)}</option>`).join('');
  };
  const applyFilters = () => {
    const query = (document.getElementById('resourceSearch')?.value || '').trim().toLowerCase();
    const category = document.getElementById('resourceCategory')?.value || 'all';
    const year = document.getElementById('resourceYear')?.value || 'all';
    const latestSection = document.getElementById('latestAdditions');
    if (latestSection) latestSection.hidden = Boolean(query || category !== 'all' || year !== 'all');
    const cards = [...document.querySelectorAll('#existingResourceGrid [data-resource-card], #regulationGrid [data-resource-card]')];
    let visible = 0;
    for (const card of cards) {
      const matches = (!query || card.textContent.toLowerCase().includes(query))
        && (category === 'all' || card.dataset.category === category)
        && (year === 'all' || card.dataset.year === year);
      const column = card.closest('[class*="col-"]');
      if (column) column.hidden = !matches;
      if (matches) visible += 1;
    }
    const empty = document.getElementById('resourceEmpty');
    if (empty) empty.hidden = visible > 0;
    const count = document.getElementById('resourceResultCount');
    if (count) count.textContent = `${visible} document${visible === 1 ? '' : 's'}`;
  };

  // Existing acts are already in the library; add the same in-page preview interaction.
  for (const link of document.querySelectorAll('#existingResourceGrid [data-resource-card] a[href$=".pdf"]')) {
    const card = link.closest('[data-resource-card]');
    const preview = card.querySelector('[data-pdf-preview]') || document.createElement('button');
    if (!preview.hasAttribute('data-pdf-preview')) {
      preview.type = 'button';
      preview.className = 'btn btn-outline-primary';
      preview.textContent = 'Preview';
    }
    preview.dataset.pdfPreview = '';
    preview.dataset.pdf = link.getAttribute('href');
    preview.dataset.pdfTitle = card.querySelector('h2')?.textContent.trim() || 'Document preview';
    link.classList.remove('btn-primary');
    link.classList.add('btn-outline-primary');
    link.innerHTML = 'Open PDF <i class="fa fa-arrow-right ms-1" aria-hidden="true"></i>';
    link.parentElement.classList.add('resource-actions');
    if (!preview.isConnected) link.before(preview);
  }

  const controls = ['resourceSearch', 'resourceCategory', 'resourceYear'];
  for (const id of controls) {
    const element = document.getElementById(id);
    element?.addEventListener(id === 'resourceSearch' ? 'input' : 'change', applyFilters);
  }

  fetch('assets/knowledge-hub/regulations.json', { cache: 'no-cache' })
    .then((response) => { if (!response.ok) throw new Error(`Catalog returned ${response.status}`); return response.json(); })
    .then((catalog) => {
      const documents = Array.isArray(catalog.documents) ? catalog.documents : [];
      const latest = documents.slice(0, 6);
      if (latestGrid) latestGrid.innerHTML = latest.map((item) => makeCard(item, { latest: true })).join('');
      if (regulationGrid) regulationGrid.innerHTML = documents.map((item) => makeCard(item)).join('');
      if (status) status.textContent = `${documents.length} newly added regulatory documents`;
      addYearOptions();
      applyFilters();
    })
    .catch((error) => {
      console.error('Could not load regulation catalog:', error);
      if (status) status.textContent = 'New regulatory documents are temporarily unavailable; the existing library remains available.';
      addYearOptions();
      applyFilters();
    });
})();
