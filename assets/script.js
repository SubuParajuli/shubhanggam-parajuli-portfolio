(function(){
  const btn = document.getElementById('themeBtn');
  const root = document.body;
  const saved = localStorage.getItem('theme');
  if (saved) root.setAttribute('data-theme', saved);
  if (btn){
    btn.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  }
  const yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();
  const updated = document.getElementById('updated');
  if (updated){
    updated.textContent = new Date().toLocaleDateString(undefined, {year:'numeric', month:'short', day:'2-digit'});
  }
})();