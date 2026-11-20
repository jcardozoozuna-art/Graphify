import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildCaption, buildHashtags } from '../src/captions.js';

test('arma hashtags limpios', () => {
  assert.equal(buildHashtags(['Marketing Digital', 'branding']), '#marketingdigital #branding');
});

test('caption incluye hook y CTA del pilar', () => {
  const c = buildCaption({ pillarId: 'vender', hook: 'Hola', body: 'Texto' });
  assert.match(c, /^Hola/);
  assert.match(c, /DM/);
});
