import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatBRL(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value);
}

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove acentos
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function generateWhatsAppLink(
  phone: string,
  productName: string,
  condition: string,
  price: number,
  storeName: string,
  batteryHealth?: number
): string {
  // Limpa caracteres não numéricos
  const cleanPhone = phone.replace(/\D/g, '');
  const condText =
    condition === 'new_sealed'
      ? 'Novo / Lacrado'
      : `Seminovo${batteryHealth ? ` (Bateria ${batteryHealth}%)` : ''}`;

  const message = `Olá! Vi o anúncio do *${productName}* (${condText}) por *${formatBRL(
    price
  )}* no catálogo da *${storeName}* e gostaria de saber se ainda está disponível para retirada/envio.`;

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}
