import { Reseller, ResellerItem, ResellerItemWithProduct } from '@/types/catalog';
import { INITIAL_RESELLERS, INITIAL_RESELLER_ITEMS } from '@/data/mock-resellers';
import { APPLE_MASTER_CATALOG, getAppleProductById } from '@/data/apple-master-catalog';

const STORAGE_KEYS = {
  RESELLERS: 'apple_saas_resellers_v2',
  ITEMS: 'apple_saas_items_v2',
};

// Memory fallback to ensure SSR and initial client hydration match 100%
let memoryResellers = [...INITIAL_RESELLERS];
let memoryItems = [...INITIAL_RESELLER_ITEMS];

export function getAllResellers(): Reseller[] {
  if (typeof window !== 'undefined') {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.RESELLERS);
      if (raw) {
        return JSON.parse(raw);
      }
    } catch {}
  }
  return memoryResellers;
}

export function getResellerBySlug(slug: string): Reseller | undefined {
  const resellers = getAllResellers();
  return resellers.find((r) => r.slug.toLowerCase() === slug.toLowerCase());
}

export function getResellerById(id: string): Reseller | undefined {
  const resellers = getAllResellers();
  return resellers.find((r) => r.id === id);
}

export function getResellerItems(resellerId: string): ResellerItemWithProduct[] {
  let items = memoryItems;
  if (typeof window !== 'undefined') {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.ITEMS);
      if (raw) {
        items = JSON.parse(raw);
      }
    } catch {}
  }

  const activeItems = items.filter((item) => item.resellerId === resellerId && item.isActive);
  const reseller = getResellerById(resellerId);

  return activeItems
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
  let items = memoryItems;
  if (typeof window !== 'undefined') {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.ITEMS);
      if (raw) {
        items = JSON.parse(raw);
      }
    } catch {}
  }

  const resellerItems = items.filter((item) => item.resellerId === resellerId);
  const reseller = getResellerById(resellerId);

  return resellerItems
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
  let items = memoryItems;
  if (typeof window !== 'undefined') {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.ITEMS);
      if (raw) {
        items = JSON.parse(raw);
      }
    } catch {}
  }

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

export function addResellerItem(data: Omit<ResellerItem, 'id' | 'createdAt'>): ResellerItem {
  let items = memoryItems;
  if (typeof window !== 'undefined') {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.ITEMS);
      if (raw) items = JSON.parse(raw);
    } catch {}
  }

  const newItem: ResellerItem = {
    ...data,
    id: `item-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    createdAt: new Date().toISOString(),
  };

  const updated = [newItem, ...items];
  memoryItems = updated;

  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(STORAGE_KEYS.ITEMS, JSON.stringify(updated));
    } catch {}
  }

  return newItem;
}

export function updateResellerItem(itemId: string, updates: Partial<ResellerItem>): boolean {
  let items = memoryItems;
  if (typeof window !== 'undefined') {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.ITEMS);
      if (raw) items = JSON.parse(raw);
    } catch {}
  }

  const index = items.findIndex((i) => i.id === itemId);
  if (index === -1) return false;

  items[index] = { ...items[index], ...updates };
  memoryItems = [...items];

  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(STORAGE_KEYS.ITEMS, JSON.stringify(memoryItems));
    } catch {}
  }

  return true;
}

export function deleteResellerItem(itemId: string): boolean {
  let items = memoryItems;
  if (typeof window !== 'undefined') {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.ITEMS);
      if (raw) items = JSON.parse(raw);
    } catch {}
  }

  const filtered = items.filter((i) => i.id !== itemId);
  if (filtered.length === items.length) return false;

  memoryItems = filtered;
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(STORAGE_KEYS.ITEMS, JSON.stringify(filtered));
    } catch {}
  }

  return true;
}

export function updateResellerProfile(resellerId: string, updates: Partial<Reseller>): boolean {
  let resellers = memoryResellers;
  if (typeof window !== 'undefined') {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.RESELLERS);
      if (raw) resellers = JSON.parse(raw);
    } catch {}
  }

  const index = resellers.findIndex((r) => r.id === resellerId);
  if (index === -1) return false;

  resellers[index] = { ...resellers[index], ...updates };
  memoryResellers = [...resellers];

  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(STORAGE_KEYS.RESELLERS, JSON.stringify(memoryResellers));
    } catch {}
  }

  return true;
}
