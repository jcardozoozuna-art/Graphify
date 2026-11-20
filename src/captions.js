import { getPillar } from './pillars.js';

const CTAS = {
  educar: 'Guardalo para tenerlo a mano.',
  mostrar: '¿Cuál versión te gusta más?',
  conectar: 'Contame en comentarios.',
  vender: 'Escribime por DM y lo armamos.',
};

export function buildHashtags(tags, max = 5) {
  return tags
    .slice(0, max)
    .map((t) => '#' + t.toLowerCase().replace(/\s+/g, ''))
    .join(' ');
}

export function buildCaption({ pillarId, hook, body, tags = [] }) {
  getPillar(pillarId); // valida el pilar
  const parts = [hook, body, CTAS[pillarId], buildHashtags(tags)];
  return parts.filter(Boolean).join('\n\n');
}
