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
    const year = document.year ? String(document.year) : '';
    return `<div class="col-md-6 col-xl-4">
      <article class="card resource-card ${latest ? 'latest-resource-card' : ''}" data-resource-card data-category="${category}" data-year="${escapeHtml(year)}">
        <div class="card-body">
          <h2>${title}</h2>
          <div class="resource-actions">
            <a class="btn btn-primary" href="${escapeHtml(file)}" target="_blank" rel="noopener">Open PDF <i class="fa fa-arrow-right ms-1" aria-hidden="true"></i></a>
          </div>
        </div>
      </article>
    </div>`;
  };

  const existingGrid = document.getElementById('existingResourceGrid');
  const regulationGrid = document.getElementById('regulationGrid');
  const status = document.getElementById('regulationLoadStatus');
  const removeLegacyResourceUi = () => {
    document.querySelectorAll('#latestAdditions, #latestRegulations').forEach((element) => element.remove());
    document.querySelectorAll('.resource-card').forEach((card) => {
      card.querySelectorAll('.tag, .resource-category, [data-resource-category]').forEach((element) => element.remove());
      card.querySelectorAll('a, button').forEach((element) => {
        if (/^\s*preview\s*$/i.test(element.textContent || '')) element.remove();
      });
      card.querySelectorAll('p').forEach((element) => {
        if (/^\s*(?:recently added )?regulatory document(?:\s*[·\-].*)?\s*$/i.test(element.textContent || '')) element.remove();
      });
    });
  };
  removeLegacyResourceUi();
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
    const cards = [...document.querySelectorAll('#existingResourceGrid [data-resource-card]')];
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

  const controls = ['resourceSearch', 'resourceCategory', 'resourceYear'];
  for (const id of controls) {
    const element = document.getElementById(id);
    element?.addEventListener(id === 'resourceSearch' ? 'input' : 'change', applyFilters);
  }

  fetch('assets/knowledge-hub/regulations.json', { cache: 'no-cache' })
    .then((response) => { if (!response.ok) throw new Error(`Catalog returned ${response.status}`); return response.json(); })
    .then((catalog) => {
      const documents = Array.isArray(catalog.documents) ? catalog.documents : [];
      if (existingGrid) existingGrid.insertAdjacentHTML('beforeend', documents.map((item) => makeCard(item)).join(''));
      if (regulationGrid) regulationGrid.remove();
      removeLegacyResourceUi();
      if (status) status.textContent = `${documents.length} newly added regulatory documents`;
      addYearOptions();
      applyFilters();
    })
    .catch((error) => {
      console.error('Could not load regulation catalog:', error);
      if (status) status.textContent = 'New regulatory documents are temporarily unavailable; the existing library remains available.';
      removeLegacyResourceUi();
      addYearOptions();
      applyFilters();
    });
  const observer = new MutationObserver(removeLegacyResourceUi);
  observer.observe(document.body, { childList: true, subtree: true });
})();
