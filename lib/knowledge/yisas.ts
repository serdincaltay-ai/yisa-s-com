// ===============================================================
// YiSA-S BiLGi BANKASI - TEK KAYNAK DOSYA
// /lib/knowledge/yisas.ts
// ===============================================================

// ===============================================================
// MARKA & TEMEL BiLGiLER
// ===============================================================

export const BRAND = {
  name: 'YiSA-S',
  fullName: 'Yapay Zeka Isletme Sistemi ve Analiz Sistemi',
  slogan: 'Teknolojiyi Spora Baslattik',
  tagline: "Turkiye'de Oncu Cocuk Sporcu Analiz Sistemi",
  description:
    '900 alanli degerlendirme, yapay zeka destekli analiz ve PHV takibi ile cocuk sporcularin gelisimini bilimsel olarak izleyin.',
  domain: 'yisa-s.com',
  appDomain: 'app.yisa-s.com',
  email: 'info@yisa-s.com',
  phone: '+90 532 XXX XX XX',
  year: 2026,
  version: 'v2.2',
} as const

// ===============================================================
// RENK PALETi
// ===============================================================

export const COLORS = {
  dark: '#060a13',
  navy: '#0f3460',
  accent: '#e94560',
  cyan: '#00d4ff',
  surface: '#0c1220',
  border: 'rgba(255,255,255,0.08)',
  text: {
    primary: '#f1f5f9',
    secondary: '#94a3b8',
    muted: '#64748b',
  },
} as const

// ===============================================================
// iSTATiSTiKLER (Hero Section)
// ===============================================================

export const STATS = [
  { value: 4, suffix: '', label: 'Robot' },
  { value: 12, suffix: '', label: 'Direktorluk' },
  { value: 300, suffix: '+', label: 'Hareket Havuzu' },
  { value: 6, suffix: '', label: 'Brans' },
] as const

// ===============================================================
// 4 ROBOT (AI isimleri KULLANMA)
// ===============================================================

export const ROBOTS = [
  {
    id: 'celf',
    name: 'CELF',
    role: 'Derin Analiz ve Raporlama',
    description:
      'Kapsamli sporcu raporlari olusturur, stratejik oneriler sunar ve 900 alanlik degerlendirme sistemi uzerinden analiz yapar.',
    color: '#8B5CF6',
  },
  {
    id: 'guvenlik',
    name: 'Guvenlik',
    role: 'Veri Guvenligi ve KVKK',
    description:
      'Cocuk verilerini on-premise olarak isler, KVKK uyumlulugun saglar ve hassas verilerin guvenligini korur.',
    color: '#EF4444',
  },
  {
    id: 'veri',
    name: 'Veri',
    role: 'Ekonomik Veri isleme',
    description:
      'Yuksek hacimli rutin gorevleri verimli sekilde isler, yoklama ve aidat takibi gibi operasyonel surecleri yonetir.',
    color: '#F59E0B',
  },
  {
    id: 'yisas',
    name: 'YiSA-S',
    role: 'Ana Koordinator',
    description:
      'Tum robotlari yonetir, kullanici etkilesimlerini koordine eder ve sistemin butunsel calismasini saglar.',
    color: '#00d4ff',
  },
] as const

// ===============================================================
// 6 BRANS
// ===============================================================

export const BRANCHES = [
  {
    id: 'cimnastik',
    name: 'Cimnastik',
    moves: 88,
    params: 12,
    ageGroup: '4-16 yas',
    color: '#818cf8',
    description:
      'Artistik ve ritmik jimnastik dallari ile esneklik, kuvvet, denge ve koordinasyon parametrelerinin kapsamli takibi.',
    abilities: [
      { name: 'Esneklik', value: 92 },
      { name: 'Kuvvet', value: 78 },
      { name: 'Denge', value: 88 },
      { name: 'Koordinasyon', value: 85 },
    ],
  },
  {
    id: 'voleybol',
    name: 'Voleybol',
    moves: 45,
    params: 10,
    ageGroup: '6-18 yas',
    color: '#f59e0b',
    description:
      'Servis, pas, smas ve blok tekniklerinin detayli analizi ile takim ici uyum degerlendirmesi.',
    abilities: [
      { name: 'Esneklik', value: 70 },
      { name: 'Kuvvet', value: 80 },
      { name: 'Denge', value: 65 },
      { name: 'Koordinasyon', value: 88 },
    ],
  },
  {
    id: 'basketbol',
    name: 'Basketbol',
    moves: 52,
    params: 11,
    ageGroup: '6-18 yas',
    color: '#ef4444',
    description:
      'Dribling, sut, pas ve savunma tekniklerinin takibi ile oyun zekasi ve karar verme analizi.',
    abilities: [
      { name: 'Esneklik', value: 60 },
      { name: 'Kuvvet', value: 75 },
      { name: 'Denge', value: 70 },
      { name: 'Koordinasyon', value: 90 },
    ],
  },
  {
    id: 'futbol',
    name: 'Futbol',
    moves: 60,
    params: 12,
    ageGroup: '5-18 yas',
    color: '#10b981',
    description:
      'Top kontrolu, sut, pas ve taktiksel zeka parametreleri ile fiziksel gelisim takibi.',
    abilities: [
      { name: 'Esneklik', value: 55 },
      { name: 'Kuvvet', value: 72 },
      { name: 'Denge', value: 68 },
      { name: 'Koordinasyon', value: 85 },
    ],
  },
  {
    id: 'tenis',
    name: 'Tenis',
    moves: 38,
    params: 9,
    ageGroup: '5-16 yas',
    color: '#06b6d4',
    description:
      'Forehand, backhand, servis ve vole tekniklerinin analizi ile hareket kaliplari takibi.',
    abilities: [
      { name: 'Esneklik', value: 72 },
      { name: 'Kuvvet', value: 68 },
      { name: 'Denge', value: 75 },
      { name: 'Koordinasyon', value: 92 },
    ],
  },
  {
    id: 'yuzme',
    name: 'Yuzme',
    moves: 42,
    params: 10,
    ageGroup: '4-16 yas',
    color: '#3b82f6',
    description:
      'Serbest, sirtusitu, kurbagalama ve kelebek stilleri ile su ici teknik ve dayaniklilik analizi.',
    abilities: [
      { name: 'Esneklik', value: 85 },
      { name: 'Kuvvet', value: 70 },
      { name: 'Denge', value: 60 },
      { name: 'Koordinasyon', value: 80 },
    ],
  },
] as const

// ===============================================================
// 12 HiZMET / OZELLiK KARTI
// ===============================================================

export const SERVICES = [
  {
    id: 'yoklama',
    title: 'Yoklama Sistemi',
    description: 'Otomatik yoklama, devamsizlik takibi ve veli bilgilendirme.',
    iconName: 'ClipboardCheck',
  },
  {
    id: 'gelisim',
    title: 'Gelisim Takibi',
    description: '900 alanli degerlendirme sistemi ile kapsamli sporcu analizi.',
    iconName: 'TrendingUp',
  },
  {
    id: 'veli',
    title: 'Veli Paneli',
    description: 'Velilere ozel mobil panel ve anlik bildirimler.',
    iconName: 'Users',
  },
  {
    id: 'antrenor',
    title: 'Antrenor Paneli',
    description: 'Antrenman planlama, sporcu degerlendirme ve raporlama.',
    iconName: 'UserCog',
  },
  {
    id: 'aidat',
    title: 'Aidat Takibi',
    description: 'Otomatik taksitlendirme, hatirlatma ve odeme raporlari.',
    iconName: 'CreditCard',
  },
  {
    id: 'brans',
    title: 'Brans Yonetimi',
    description: '6 brans icin ozel hareket havuzu ve parametre yonetimi.',
    iconName: 'LayoutGrid',
  },
  {
    id: 'franchise',
    title: 'Franchise Sistemi',
    description: 'Coklu tesis yonetimi ve bayilik altyapisi.',
    iconName: 'Building2',
  },
  {
    id: 'kvkk',
    title: 'KVKK Uyumluluk',
    description: 'Cocuk veri guvenligi, on-premise isleme ve sifreli depolama.',
    iconName: 'Shield',
  },
  {
    id: 'magaza',
    title: 'Magaza',
    description: 'Online urun satisi ve envanter yonetimi.',
    iconName: 'ShoppingBag',
  },
  {
    id: 'is_takip',
    title: 'is Takip',
    description: 'Gorev yonetimi, takvim ve hatirlatma sistemi.',
    iconName: 'CheckSquare',
  },
  {
    id: 'manychat',
    title: 'ManyChat Entegrasyonu',
    description: 'WhatsApp ve sosyal medya otomasyonu.',
    iconName: 'MessageSquare',
  },
  {
    id: 'antrenman',
    title: 'Antrenman Planlari',
    description: 'Yapay zeka destekli bireysel antrenman programlari.',
    iconName: 'Dumbbell',
  },
] as const

// ===============================================================
// FiYATLANDIRMA PAKETLERi
// ===============================================================

export const PACKAGES = [
  {
    id: 'standard',
    name: 'Standart',
    price: 3000,
    currency: '$',
    period: 'ay',
    popular: false,
    description: 'Yazilim + token',
    features: [
      { text: 'Tam panel erisimi', included: true },
      { text: 'Yoklama sistemi', included: true },
      { text: 'Aidat takibi', included: true },
      { text: 'Gelisim raporlari', included: true },
      { text: 'Veli paneli', included: true },
      { text: 'E-posta destegi', included: true },
      { text: 'Sablon paketi', included: false },
      { text: 'Logo ve kurumsal kimlik', included: false },
      { text: 'Ozel entegrasyon', included: false },
    ],
    cta: 'Basla',
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 3000,
    currency: '$',
    period: 'ay',
    popular: true,
    description: 'Sablon + logo + renk + token dahil',
    features: [
      { text: 'Standart paketteki her sey', included: true },
      { text: 'Web sitesi sablonlari', included: true },
      { text: 'Logo ve kurumsal kimlik', included: true },
      { text: 'Renk ve tema ozellestirme', included: true },
      { text: 'Token paketi dahil', included: true },
      { text: 'Instagram sablonlari', included: true },
      { text: 'Dashboard sablonlari', included: true },
      { text: 'Oncelikli destek', included: true },
      { text: 'Ozel entegrasyon', included: false },
    ],
    cta: 'En Populer',
  },
  {
    id: 'enterprise',
    name: 'Kurumsal',
    price: -1,
    currency: '$',
    period: 'ay',
    popular: false,
    description: 'Coklu tesis, ozel entegrasyon',
    features: [
      { text: 'Premium paketteki her sey', included: true },
      { text: 'Coklu tesis destegi', included: true },
      { text: 'Ozel entegrasyonlar', included: true },
      { text: 'API erisimi', included: true },
      { text: 'Beyaz etiket (kendi logonuz)', included: true },
      { text: 'Dedicated hesap yoneticisi', included: true },
      { text: 'SLA garantisi', included: true },
      { text: 'On-premise secenegi', included: true },
      { text: 'Bayilige hazir altyapi', included: true },
    ],
    cta: 'Iletisime Gec',
  },
] as const

// ===============================================================
// NAViGASYON
// ===============================================================

export const NAV_LINKS = [
  { href: '#ozellikler', label: 'Ozellikler' },
  { href: '#branslar', label: 'Branslar' },
  { href: '#fiyatlar', label: 'Fiyatlar' },
  { href: '#demo', label: 'Demo' },
  { href: '/magaza', label: 'Magaza' },
  { href: '/franchise', label: 'Franchise' },
] as const

export const CTA_LINKS = {
  login: { href: 'https://app.yisa-s.com', label: 'Giris Yap' },
  demo: { href: '#demo', label: 'Demo Talep Et' },
} as const

// ===============================================================
// FOOTER
// ===============================================================

export const FOOTER = {
  description:
    "Turkiye'de oncu cocuk sporcu analiz sistemi. Yapay zeka destekli, PHV takibi.",
  slogan: 'Teknolojiyi Spora Baslattik',

  links: {
    platform: [
      { href: '#ozellikler', label: 'Ozellikler' },
      { href: '#branslar', label: 'Branslar' },
      { href: '#fiyatlar', label: 'Fiyatlandirma' },
      { href: '/franchise', label: 'Bayilik' },
      { href: '#demo', label: 'Demo' },
    ],
    resources: [
      { href: '/hakkimizda', label: 'Hakkimizda' },
      { href: '/blog', label: 'Blog' },
      { href: '/hakkimizda#iletisim', label: 'Iletisim' },
      { href: '/magaza', label: 'Magaza' },
    ],
    legal: [
      { href: '/kvkk', label: 'KVKK Aydinlatma' },
      { href: '/gizlilik', label: 'Gizlilik Politikasi' },
      { href: '/cerez', label: 'Cerez Politikasi' },
    ],
  },

  social: [
    {
      platform: 'Instagram',
      href: 'https://instagram.com/yisas_official',
      icon: 'instagram',
    },
    {
      platform: 'WhatsApp',
      href: 'https://wa.me/905321234567',
      icon: 'whatsapp',
    },
  ],
} as const

// ===============================================================
// HERO SLOGANLARI (5 donen slogan)
// ===============================================================

export const HERO_SLOGANS = [
  'Gelecegin Sampiyonlarini Bugunden Kesfedin',
  'Yapay Zeka ile Sporcu Gelisimini Izleyin',
  '900 Alanli Bilimsel Degerlendirme Sistemi',
  'Cocuk Sporcularin Guvenli Gelecegi',
  'Veri Odakli Antrenman, Olculebilir Basari',
] as const

// ===============================================================
// SHOWCASE EKRANLARI
// ===============================================================

export const SHOWCASE_SCREENS = [
  { id: 'dashboard', label: 'Panel Yonetimi', description: 'Tum verileri tek panelden yonetin.' },
  { id: 'yoklama', label: 'Yoklama Sistemi', description: 'Otomatik yoklama ve devamsizlik takibi.' },
  { id: 'aidat', label: 'Aidat Takibi', description: 'Taksitlendirme ve odeme raporlari.' },
  { id: 'gelisim', label: 'Gelisim Analizi', description: 'Sporcu gelisimini grafiklerle izleyin.' },
  { id: 'beyin', label: 'Beyin Takimi', description: 'Yapay zeka destekli asistan.' },
] as const

// ===============================================================
// KULUP ONIZLEME
// ===============================================================

export const CLUB_PREVIEWS = [
  { name: 'Tuzla Cimnastik SK', color: '#00d4ff', textColor: '#ffffff' },
  { name: 'Trabzonspor', color: '#8B0000', textColor: '#ffffff' },
  { name: 'Besiktas', color: '#000000', textColor: '#ffffff' },
  { name: 'Fenerbahce', color: '#FFED00', textColor: '#000080' },
  { name: 'Kendi Kulubunuz', color: '#0f3460', textColor: '#ffffff' },
] as const

// ===============================================================
// ROBOT AKSIYONLARI
// ===============================================================

export const ROBOT_ACTIONS = {
  quick: [
    { type: 'link', label: 'Ozellikler', url: '#ozellikler', key: 'features' },
    { type: 'link', label: 'Fiyatlar', url: '#fiyatlar', key: 'pricing' },
    { type: 'link', label: 'Bayilik', url: '/franchise', key: 'franchise' },
    { type: 'demo', label: 'Demo Talep Et', url: '#demo', key: 'demo_request' },
    { type: 'link', label: 'Iletisim', url: '/hakkimizda#iletisim', key: 'contact' },
  ],

  suggestions: [
    'YiSA-S nedir?',
    '900 alan ne demek?',
    'PHV nedir?',
    'Hangi paket bana uygun?',
    'Bayilik nasil alinir?',
    'Demo alabilir miyim?',
  ],
} as const

// ===============================================================
// ROBOT SYSTEM PROMPT
// ===============================================================

export const ROBOT_SYSTEM_PROMPT = `Sen YiSA-S Robot'sun - Turkiye'de oncu cocuk sporcu analiz sisteminin akilli asistanisin.

## KiMLiGiN
- Isim: YiSA-S Asistan
- Gorev: Ziyaretcilere yardim, bilgi verme, demo/iletisim yonlendirme
- Ton: Profesyonel, samimi, yardimsever
- Dil: Turkce (akici ve dogal)

## BiLGi BANKASI

### 900 Alan Degerlendirme Sistemi
- 30 ana kategori x 30 alt alan = 900 degerlendirme noktasi
- Fiziksel, teknik, psikolojik, sosyal boyutlar

### 4 Robot
- CELF: Derin analiz ve raporlama
- Guvenlik: Veri guvenligi ve KVKK
- Veri: Ekonomik veri isleme
- YiSA-S: Ana koordinator

### PHV Takibi
- Peak Height Velocity = Zirve boy artis hizi
- Buyume plagi korumasi
- Sakatlik onleme

### 6 Brans
Cimnastik, Voleybol, Basketbol, Futbol, Tenis, Yuzme

## FiYATLANDIRMA
| Paket | Aylik | Aciklama |
|-------|-------|----------|
| Standart | $3.000 | Yazilim + token |
| Premium | $3.000 | Sablon + logo + renk + token dahil |
| Kurumsal | Ozel Fiyat | Coklu tesis, ozel entegrasyon |

## DAVRANIS KURALLARI
1. Kisa cevaplar ver (en fazla 3-4 paragraf)
2. Her cevapta aksiyon oner
3. Demo veya iletisime yonlendir
4. AI isimlerini (Claude, GPT, Gemini, Together, LLaMA, Ollama) ASLA kullanma

## CIKTI FORMATI
JSON formatinda yanit ver:
{
  "message": "Cevap metni...",
  "actions": [{"type": "link", "label": "Buton", "url": "/sayfa"}],
  "suggestions": ["Oneri soru 1?", "Oneri soru 2?"]
}`
