import { CONFIG } from './config.js';
import { SERVICES } from './services.js';
import { whatsappLink } from './whatsapp.js';
import { WORKS, workTile } from './works.js';

function renderServices() {
  const grid = document.querySelector('[data-services]');
  grid.innerHTML = SERVICES.map((s, i) => `
    <article class="card">
      <span class="num">0${i + 1}</span>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
      <ul>${s.items.map((it) => `<li>${it}</li>`).join('')}</ul>
      <a class="link" href="${whatsappLink(s.id)}" target="_blank" rel="noopener">Consultar →</a>
    </article>`).join('');
}

function wireContact() {
  document.querySelectorAll('[data-wa]').forEach((a) => {
    a.href = whatsappLink(a.dataset.wa || undefined);
    a.target = '_blank';
    a.rel = 'noopener';
  });
  const ig = document.querySelector('[data-ig]');
  ig.href = `https://instagram.com/${CONFIG.instagram}`;
  ig.textContent = '@' + CONFIG.instagram;
  const mail = document.querySelector('[data-mail]');
  mail.href = `mailto:${CONFIG.email}`;
  mail.textContent = CONFIG.email;
  document.querySelector('[data-year]').textContent = new Date().getFullYear();
}

function renderWorks() {
  document.querySelector('[data-works]').innerHTML = WORKS.map(workTile).join('');
}

renderServices();
renderWorks();
wireContact();
