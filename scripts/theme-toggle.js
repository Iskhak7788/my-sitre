document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('theme-toggle');
  const key = 'theme-preference';
  function applyTheme(t) {
    document.body.setAttribute('data-theme', t);
    localStorage.setItem(key, t);
  }
  const saved = localStorage.getItem(key) || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  applyTheme(saved);
  btn.addEventListener('click', () => {
    const next = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
  });
});
