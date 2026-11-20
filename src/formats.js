// Formatos por red social.
export const FORMATS = {
  instagram: ['reel', 'carrusel', 'post', 'historia'],
  tiktok: ['video'],
  facebook: ['post', 'reel'],
};

export function formatsFor(network) {
  const list = FORMATS[network];
  if (!list) throw new Error(`Red no soportada: ${network}`);
  return list;
}
