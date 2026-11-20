import { test } from 'node:test';
import assert from 'node:assert/strict';
import { whatsappLink, buildMessage } from '../landing-jotace/js/whatsapp.js';

test('link general sin servicio', () => {
  const url = whatsappLink(undefined, '+595 981 123 456');
  assert.match(url, /^https:\/\/wa\.me\/595981123456\?text=/);
});

test('mensaje menciona el servicio elegido', () => {
  assert.match(buildMessage('branding'), /Branding/);
});

test('servicio mal escrito da error', () => {
  assert.throws(() => buildMessage('brandin'));
});

test('número inválido da error', () => {
  assert.throws(() => whatsappLink(undefined, '123'));
});
