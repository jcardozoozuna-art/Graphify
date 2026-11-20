import { buildCalendar } from './calendar.js';
import { buildCaption } from './captions.js';

const plan = buildCalendar({ startDate: '2026-12-01', days: 14 });
for (const item of plan) {
  console.log(`${item.date}  ${item.network}  ${item.format.padEnd(9)} ${item.pillar}`);
}

console.log('\nEjemplo de caption:\n');
console.log(
  buildCaption({
    pillarId: 'educar',
    hook: '3 errores que hacen ver tu marca amateur',
    body: 'Tipografías de más, colores sin sistema y logo pixelado.',
    tags: ['branding', 'diseño', 'marketing digital'],
  })
);
