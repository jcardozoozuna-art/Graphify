// Pilares de contenido de la marca: el "qué" de cada publicación.
export const PILLARS = [
  { id: 'educar', name: 'Educar', goal: 'Enseñar algo útil de marketing o branding' },
  { id: 'mostrar', name: 'Mostrar', goal: 'Mostrar trabajos, procesos y antes/después' },
  { id: 'conectar', name: 'Conectar', goal: 'Mostrar a la persona detrás de la marca' },
  { id: 'vender', name: 'Vender', goal: 'Presentar servicios con un llamado a la acción' },
];

export function getPillar(id) {
  const pillar = PILLARS.find((p) => p.id === id);
  if (!pillar) throw new Error(`Pilar desconocido: ${id}`);
  return pillar;
}
