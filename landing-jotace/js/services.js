// Servicios que se muestran en la landing.
export const SERVICES = [
  {
    id: 'gestion',
    title: 'Gestión mensual',
    desc: 'Llevo tus redes de punta a punta: estrategia, posts, reels y copy. Vos te enfocás en tu negocio.',
    items: ['Estrategia de contenido', 'Posts y reels', 'Copy con tono de marca'],
  },
  {
    id: 'branding',
    title: 'Branding',
    desc: 'Una identidad clara desde el día uno: logo, colores, tipografías y cómo habla tu marca.',
    items: ['Logo y variantes', 'Paleta y tipografías', 'Manual de marca'],
  },
  {
    id: 'piezas',
    title: 'Piezas puntuales',
    desc: 'Lo que necesitás para esta semana, bien hecho: flyers, presentaciones o tu CV.',
    items: ['Flyers y anuncios', 'Presentaciones', 'CVs profesionales'],
  },
];

export function getService(id) {
  const s = SERVICES.find((x) => x.id === id);
  if (!s) throw new Error(`Servicio desconocido: ${id}`);
  return s;
}
