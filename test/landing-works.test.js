import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { WORKS, workTile } from '../landing-jotace/js/works.js';

test('las imágenes de trabajos existen', () => {
  for (const w of WORKS) if (w.img) assert.ok(existsSync(new URL('../landing-jotace/' + w.img, import.meta.url)), w.img);
});

test('sin imagen usa degradé, con imagen usa <img>', () => {
  assert.match(workTile({ rubro: 'X', tipo: 'Y', img: null, color: '#000' }), /linear-gradient/);
  assert.match(workTile(WORKS[0]), /<img/);
});
