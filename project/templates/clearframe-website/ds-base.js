// Clearframe Studio — design-system base loader.
// One line for a consuming project to edit: point `base` at the bound design
// system (this folder's relation to the DS root). In this source project the
// template lives two levels down, so the DS root is '../..'.
(() => {
  const base = '../..';
  for (const p of ['styles.css']) {
    const l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = base + '/' + p;
    document.head.appendChild(l);
  }
  const s = document.createElement('script');
  s.src = base + '/_ds_bundle.js';
  s.onerror = () => console.error(
    'ds-base.js: failed to load ' + s.src +
    ' — if this is a consuming project, point the base line at the bound _ds/<folder> tree relative to this page; in a fresh design system the bundle may not be compiled yet.'
  );
  document.head.appendChild(s);
  window.__CF_DS_BASE__ = base;
})();
