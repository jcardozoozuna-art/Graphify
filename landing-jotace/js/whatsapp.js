import { CONFIG } from './config.js';
import { getService } from './services.js';

// Mensaje prellenado según desde dónde escriben.
export function buildMessage(serviceId) {
  if (!serviceId) return 'Hola! Vi la web de jotace. y quiero hablar de mi marca.';
  const s = getService(serviceId);
  return `Hola! Vi la web de jotace. y me interesa: ${s.title}.`;
}

export function whatsappLink(serviceId, phone = CONFIG.whatsapp) {
  const clean = String(phone).replace(/\D/g, '');
  if (clean.length < 8) throw new Error('Número de WhatsApp inválido');
  return `https://wa.me/${clean}?text=${encodeURIComponent(buildMessage(serviceId))}`;
}
