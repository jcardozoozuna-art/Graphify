// Trabajos por rubro (sin nombres de clientes). Sin imagen se muestra un degradé.
export const WORKS = [
  { rubro: 'Cafetería', tipo: 'Branding', img: 'img/alesso.jpg', color: '#354d38' },
  { rubro: 'Detailing automotriz', tipo: 'Branding', img: 'img/rg-detailing.jpg', color: '#101113' },
  { rubro: 'Spa de uñas y cabello', tipo: 'Identidad visual', img: 'img/paloma.jpg', color: '#4a2b3a' },
  { rubro: 'Lubricentro', tipo: 'Contenido', img: 'img/lubri2.jpg', color: '#1d2f5c' },
];

export function workTile(w) {
  const bg = w.img
    ? `<img src="${w.img}" alt="${w.tipo} para ${w.rubro.toLowerCase()}" loading="lazy" />`
    : '';
  const style = w.img ? '' : ` style="background:linear-gradient(160deg, ${w.color}, #0b0b0c 70%)"`;
  return `<div class="tile"${style}>${bg}<div class="tile-label"><span>${w.tipo}</span><strong>${w.rubro}</strong></div></div>`;
}
