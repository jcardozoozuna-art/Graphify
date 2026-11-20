import { test } from 'node:test';
import assert from 'node:assert/strict';
import { getPillar, PILLARS } from '../src/pillars.js';
import { buildCaption } from '../src/captions.js';

test('encuentra cada pilar por su id', () => {
  for (const p of PILLARS) assert.equal(getPillar(p.id).id, p.id);
});

test('un pilar mal escrito da error en vez de pasar en silencio', () => {
  assert.throws(() => getPillar('vendre'), /Pilar desconocido/);
});

test('un caption con pilar mal escrito no se genera sin CTA', () => {
  assert.throws(() => buildCaption({ pillarId: 'vendre', hook: 'Hola', body: 'Texto' }));
});
