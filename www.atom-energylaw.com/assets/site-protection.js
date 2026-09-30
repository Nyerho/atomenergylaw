/*
 * Lightweight copy deterrence for the public site.
 * This is not a security boundary: anything delivered to a browser can be inspected.
 */
(() => {
  'use strict';

  const editable = (target) => target instanceof Element && Boolean(
    target.closest('input, textarea, select, [contenteditable="true"], a, button, label')
  );

  document.documentElement.classList.add('copy-deterrence-active');

  document.addEventListener('contextmenu', (event) => {
    if (!editable(event.target)) event.preventDefault();
  }, { capture: true });

  document.addEventListener('dragstart', (event) => {
    if (event.target instanceof HTMLImageElement || !editable(event.target)) {
      event.preventDefault();
    }
  }, { capture: true });

  document.addEventListener('selectstart', (event) => {
    if (!editable(event.target)) event.preventDefault();
  }, { capture: true });

  document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    const modifier = event.ctrlKey || event.metaKey;
    if (!modifier || editable(event.target)) return;
    if (['c', 'u', 's', 'p'].includes(key)) {
      event.preventDefault();
      event.stopPropagation();
    }
  }, { capture: true });
})();
