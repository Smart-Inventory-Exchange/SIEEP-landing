export type Category =
  | 'Dairy'
  | 'Bakery'
  | 'Confectionery'
  | 'Beverages'
  | 'Cosmetics'
  | 'Household';

export type NavId = 'how' | 'features' | 'market' | 'impact';

export interface Product {
  readonly img: string;
  readonly cat: Category;
  readonly name: string;
  readonly seller: string;
  readonly area: string;
  readonly moq: string;
  readonly stock: string;
  readonly left: string;
  readonly now: number;
  readonly was: number;
  readonly unit: string;
  readonly off: number;
  readonly viewers: number;
  readonly halal?: boolean;
}

export interface Step {
  readonly n: string;
  readonly t: string;
  readonly d: string;
}

export interface Feature {
  readonly e: string;
  readonly t: string;
  readonly d: string;
}

export interface NavItem {
  readonly id: NavId;
  readonly label: string;
}

export const PRODUCTS: readonly Product[] = [
  { img: 'photo-1488477181946-6428a0291777', cat: 'Dairy',         name: 'Greek Yogurt 24×170g',      seller: 'Activia · Distributor lot', area: 'Al Quoz',                 moq: 'MOQ 5 cases',          stock: '200 cases',   left: 'BBE 14 days',      now: 18.0,    was: 42.0,    unit: '/case',    off: 57, viewers: 4, halal: true },
  { img: 'photo-1452195100486-9cc805987862', cat: 'Dairy',         name: 'Aged Cheddar Wheels 5kg',   seller: 'Jebel Ali Dairy Co.',       area: 'Dubai Investments Park',  moq: 'MOQ 2 wheels',         stock: '40 wheels',   left: 'BBE 21 days',      now: 65.0,    was: 180.0,   unit: '/wheel',   off: 64, viewers: 3, halal: true },
  { img: 'photo-1568254183919-78a4f43a2877', cat: 'Bakery',        name: 'Frozen Sourdough 800g',     seller: 'Modern Bakery FZE',         area: 'Al Quoz',                 moq: 'MOQ 50 units',         stock: '500 units',   left: 'BBE 45 days',      now: 6.0,     was: 14.0,    unit: '/unit',    off: 57, viewers: 2, halal: true },
  { img: 'photo-1481391319762-47dff72954d9', cat: 'Confectionery', name: 'Belgian Chocolate 24×100g', seller: 'Callebaut · Importer lot',  area: 'Dubai Silicon Oasis',     moq: 'MOQ 5 cases',          stock: '60 cases',    left: 'BBE 60 days',      now: 95.0,    was: 220.0,   unit: '/case',    off: 57, viewers: 6, halal: true },
  { img: 'photo-1600271886742-f049cd451bba', cat: 'Beverages',     name: 'Orange Juice 1L 12-pack',   seller: 'Almarai · Wholesale',       area: 'Al Quoz',                 moq: 'MOQ 20 cartons',       stock: '300 cartons', left: 'BBE 21 days',      now: 22.0,    was: 48.0,    unit: '/carton',  off: 54, viewers: 5, halal: true },
  { img: 'photo-1556228720-195a672e8a03',    cat: 'Cosmetics',     name: 'Vitamin C Serum 30ml',      seller: 'Skinora Distribution',      area: 'JAFZA',                   moq: 'MOQ 1 lot (50 units)', stock: '12 lots',     left: 'Expires Aug 2026', now: 280.0,   was: 800.0,   unit: '/lot',     off: 65, viewers: 8 },
  { img: 'photo-1610557892470-55d9e80c0bce', cat: 'Household',     name: 'Laundry Pods 60-pack',      seller: 'Persil · Importer lot',     area: 'Al Quoz',                 moq: 'MOQ 10 cases',         stock: '120 cases',   left: 'BBE 9 months',     now: 42.0,    was: 110.0,   unit: '/case',    off: 62, viewers: 2 },
  { img: 'photo-1563636619-e9143da7973b',    cat: 'Dairy',         name: 'UHT Milk Pallet 672×1L',    seller: 'Al Ain Farms · Bulk',       area: 'Jebel Ali',               moq: 'MOQ ½ pallet',         stock: '8 pallets',   left: 'BBE 45 days',      now: 2400.0,  was: 7000.0,  unit: '/pallet',  off: 66, viewers: 3, halal: true },
];

export const STEPS: readonly Step[] = [
  { n: '01', t: "List what's about to expire", d: 'Snap a photo, set a quantity, name your price in AED. Our urgency engine surfaces it to nearby buyers across the emirate.' },
  { n: '02', t: 'Match with stores within 5km', d: 'Cafés, restaurants and groceries from Jumeirah to Al Barsha see your stock live, sorted by time-to-expiry.' },
  { n: '03', t: 'Trade, settle, pickup',        d: 'Accept, counter or reserve. Payment held in escrow, pickup before closing. No paperwork, no waste.' },
];

export const FEATURES: readonly Feature[] = [
  { e: 'Urgency engine', t: 'Real-time expiry pricing',     d: 'Suggested AED price drops as the clock ticks. Maximize recovery, never let stock spoil.' },
  { e: 'Trade center',   t: 'Negotiate without the calls',  d: 'Counter offers, partial quantities, and pickup windows in Arabic or English — all in one thread.' },
  { e: 'Impact ledger',  t: 'Sustainability you can prove', d: 'Auditable kg-saved and CO₂ figures aligned with UAE Net Zero 2050 reporting.' },
  { e: 'Trust layer',    t: 'Verified storefronts only',    d: 'Trade licence checked with DED. Ratings after every trade. Halal-certified suppliers flagged.' },
];

export const NAV_ITEMS: readonly NavItem[] = [
  { id: 'how',      label: 'How it works' },
  { id: 'features', label: 'Features' },
  { id: 'market',   label: 'Live market' },
  { id: 'impact',   label: 'Impact' },
];

export const STATS: ReadonlyArray<{ readonly v: string; readonly l: string }> = [
  { v: '4,720kg',     l: 'Food rescued this month across UAE' },
  { v: 'AED 38,200',  l: 'Value recovered for stores' },
  { v: '162',         l: 'Trades closed this week' },
  { v: '11.4t',       l: 'CO₂ avoided · Net Zero 2050 aligned' },
];

export const productImage = (id: string, w: number = 600): string =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${w}&q=80`;

export const formatAED = (value: number): string =>
  value.toLocaleString('en-AE', {
    minimumFractionDigits: value >= 1000 ? 0 : 2,
    maximumFractionDigits: value >= 1000 ? 0 : 2,
  });
