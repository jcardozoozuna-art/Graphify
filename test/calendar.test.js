import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildCalendar } from '../src/calendar.js';

test('rota pilares y respeta la red', () => {
  const plan = buildCalendar({ startDate: '2026-12-01', days: 14 });
  assert.ok(plan.length >= 4);
  assert.equal(plan[0].pillar, 'educar');
  assert.equal(plan[1].pillar, 'mostrar');
  assert.ok(plan.every((p) => p.network === 'instagram'));
});

test('falla con una red no soportada', () => {
  assert.throws(() => buildCalendar({ startDate: '2026-12-01', days: 7, network: 'myspace' }));
});
