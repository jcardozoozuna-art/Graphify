import { PILLARS } from './pillars.js';
import { formatsFor } from './formats.js';

// Arma un calendario rotando pilares y formatos.
export function buildCalendar({ startDate, days, network = 'instagram', postsPerWeek = 3 }) {
  const formats = formatsFor(network);
  const start = new Date(startDate + 'T00:00:00');
  const step = Math.max(1, Math.floor(7 / postsPerWeek));
  const plan = [];
  for (let d = 0, i = 0; d < days; d += step, i++) {
    const date = new Date(start);
    date.setDate(start.getDate() + d);
    plan.push({
      date: date.toISOString().slice(0, 10),
      network,
      pillar: PILLARS[i % PILLARS.length].id,
      format: formats[i % formats.length],
    });
  }
  return plan;
}
