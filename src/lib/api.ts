import { SampleRequest } from '../types';

export const WHATSAPP_NUMBER = '213662250526';
export const CONTACT_EMAIL = 'makerslabel01@gmail.com';
export const INSTAGRAM_URL = 'https://www.instagram.com/makers.label/';

// Google Apps Script that writes requests to the MAKERS Google Sheet (same endpoint as the previous site).
const LEADS_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbzAEoztlJNsE0uaVGoTBnZyxpK-1oxoJRq5f1oruIyoyzVRTED0ikFcTixPvYx8oCYyPw/exec';

export function whatsappLink(text: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function requestSummary(data: SampleRequest): string {
  return [
    "Salam MAKERS, demande d'échantillon :",
    `Nom : ${data.name}`,
    data.brand && `Marque / entreprise : ${data.brand}`,
    `Produits : ${data.products.join(', ')}`,
    data.quantity && `Quantité prévue : ${data.quantity}`,
    data.branding && `Logo : ${data.branding}`,
    data.message && `Message : ${data.message}`,
  ]
    .filter(Boolean)
    .join('\n');
}

/** Resolves true when the request left the browser. no-cors hides the response, so a network error is the only failure we can see. */
export async function submitSampleRequest(data: SampleRequest): Promise<boolean> {
  const row = {
    name: data.name,
    phone: data.whatsapp,
    product: data.products.join(', '),
    quantity: data.quantity,
    budget: '',
    design: data.branding,
    description: `[Demande d'échantillon] Marque : ${data.brand || '-'} | E-mail : ${data.email || '-'} | ${data.message}`,
  };
  try {
    await fetch(LEADS_ENDPOINT, { method: 'POST', mode: 'no-cors', body: JSON.stringify(row) });
    return true;
  } catch {
    return false;
  }
}
