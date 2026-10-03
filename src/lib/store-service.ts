import { Reseller, ResellerItem, ResellerItemWithProduct } from '@/types/catalog';
import { INITIAL_RESELLERS, INITIAL_RESELLER_ITEMS } from '@/data/mock-resellers';
import { APPLE_MASTER_CATALOG, getAppleProductById } from '@/data/apple-master-catalog';

const STORAGE_KEYS = {
  RESELLERS: 'apple_saas_resellers_v1',
  ITEMS: 'apple_saas_items_v1',
};

function getStoredResellers(): Reseller[] {
  if (typeof window === 'undefined') return INITIAL_RESELLERS;
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.RESELLERS);
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.RESELLERS, JSON.stringify(INITIAL_RESELLERS));
      return INITIAL_RESELLERS;
    }
    return JSON.parse(raw);
  } catch {
    return INITIAL_RESELLERS;
  }
}

function getStoredItems(): ResellerItem[] {
  if (typeof window === 'undefined') return INITIAL_RESELLER_ITEMS;
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.ITEMS);
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.ITEMS, JSON.stringify(INITIAL_RESELLER_ITEMS));
      return INITIAL_RESELLER_ITEMS;
    }
    return JSON.parse(raw);
  } catch {
    return INITIAL_RESELLER_ITEMS;
  }
}

function saveItems(items: ResellerItem[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEYS.ITEMS, JSON.stringify(items));
  } catch (e) {
    console.error('Erro ao salvar itens no localStorage', e);
  }
}

function saveResellers(resellers: Reseller[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEYS.RESELLERS, JSON.stringify(resellers));
  } catch (e) {
    console.error('Erro ao salvar revendedores no localStorage', e);
  }
}

export function getAllResellers(): Reseller[] {
  return getStoredResellers();
}

export function getResellerBySlug(slug: string): Reseller | undefined {
  const resellers = getStoredResellers();
  return resellers.find((r) => r.slug.toLowerCase() === slug.toLowerCase());
}

export function getResellerById(id: string): Reseller | undefined {
  const resellers = getStoredResellers();
  return resellers.find((r) => r.id === id);
}

export function getResellerItems(resellerId: string): ResellerItemWithProduct[] {
  const items = getStoredItems().filter((item) => item.resellerId === resellerId && item.isActive);
  const reseller = getResellerById(resellerId);

  return items
    .map((item) => {
      const product = getAppleProductById(item.appleProductId);
      if (!product) return null;
      return {
        ...item,
        product,
        reseller,
      };
    })
    .filter(Boolean) as ResellerItemWithProduct[];
}

export function getAllResellerItemsAdmin(resellerId: string): ResellerItemWithProduct[] {
  const items = getStoredItems().filter((item) => item.resellerId === resellerId);
  const reseller = getResellerById(resellerId);

  return items
    .map((item) => {
      const product = getAppleProductById(item.appleProductId);
      if (!product) return null;
      return {
        ...item,
        product,
        reseller,
      };
    })
    .filter(Boolean) as ResellerItemWithProduct[];
}

export function getResellerItemById(itemId: string): ResellerItemWithProduct | undefined {
  const items = getStoredItems();
  const item = items.find((i) => i.id === itemId);
  if (!item) return undefined;

  const product = getAppleProductById(item.appleProductId);
  if (!product) return undefined;

  const reseller = getResellerById(item.resellerId);

  return {
    ...item,
    product,
    reseller,
  };
}

export function addResellerItem(
  data: Omit<ResellerItem, 'id' | 'createdAt'>
): ResellerItem {
  const items = getStoredItems();
  const newItem: ResellerItem = {
    ...data,
    id: `item-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    createdAt: new Date().toISOString(),
  };

  const updated = [newItem, ...items];
  saveItems(updated);
  return newItem;
}

export function updateResellerItem(itemId: string, updates: Partial<ResellerItem>): boolean {
  const items = getStoredItems();
  const index = items.findIndex((i) => i.id === itemId);
  if (index === -1) return false;

  items[index] = { ...items[index], ...updates };
  saveItems([...items]);
  return true;
}

export function deleteResellerItem(itemId: string): boolean {
  const items = getStoredItems();
  const filtered = items.filter((i) => i.id !== itemId);
  if (filtered.length === items.length) return false;

  saveItems(filtered);
  return true;
}

export function updateResellerProfile(resellerId: string, updates: Partial<Reseller>): boolean {
  const resellers = getStoredResellers();
  const index = resellers.findIndex((r) => r.id === resellerId);
  if (index === -1) return false;

  resellers[index] = { ...resellers[index], ...updates };
  saveResellers([...resellers]);
  return true;
}
