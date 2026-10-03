export type AppleCategory =
  | 'iphone'
  | 'mac'
  | 'ipad'
  | 'watch'
  | 'airpods'
  | 'accessories';

export type ItemCondition = 'new_sealed' | 'pre_owned';

export type CosmeticGrade = 'sealed' | 'excellent' | 'very_good' | 'good';

export interface AppleProductColor {
  name: string;
  hex: string;
  imageUrl: string;
}

export interface AppleProductSpecs {
  chip?: string;
  display?: string;
  camera?: string;
  battery?: string;
  connectivity?: string;
  ports?: string;
  highlights: string[];
}

export interface AppleProduct {
  id: string;
  category: AppleCategory;
  name: string;
  family: string;
  tagline: string;
  releaseYear: string;
  defaultImage: string;
  heroImage?: string;
  colors: AppleProductColor[];
  storageOptions: string[];
  specs: AppleProductSpecs;
}

export interface Reseller {
  id: string;
  name: string;
  slug: string;
  logoUrl?: string;
  bio?: string;
  whatsapp: string;
  instagram?: string;
  city: string;
  state: string;
  pickupAddress?: string;
  deliveryPolicy?: string;
  isVerified?: boolean;
}

export interface ResellerItem {
  id: string;
  resellerId: string;
  appleProductId: string;
  condition: ItemCondition;
  grade: CosmeticGrade;
  batteryHealth?: number; // e.g. 96 for pre-owned
  color: string;
  storage: string;
  priceCash: number;
  priceInstallment?: number;
  maxInstallments?: number;
  customPhotos?: string[]; // real device photos
  customDescription?: string;
  includedItems: string[];
  warranty: string;
  isActive: boolean;
  createdAt: string;
  featured?: boolean;
}

export interface ResellerItemWithProduct extends ResellerItem {
  product: AppleProduct;
  reseller?: Reseller;
}
