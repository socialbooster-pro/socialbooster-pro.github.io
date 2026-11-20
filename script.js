'use strict';
const menu = document.getElementById('menu');
const nav = document.getElementById('nav');
if (menu && nav) {
  const small = window.matchMedia('(max-width: 800px)');
  function setOpen(open) { menu.setAttribute('aria-expanded', String(open)); nav.hidden = !open; nav.style.display = open ? '' : 'none'; }
  function sync() { menu.hidden = !small.matches; setOpen(!small.matches); }
  menu.addEventListener('click', () => setOpen(menu.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('click', e => { if (small.matches && e.target.closest('a')) setOpen(false); });
  small.addEventListener('change', sync); sync();
}
