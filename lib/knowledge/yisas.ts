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
    icon: '\u{1F938}',
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
    icon: '\u{1F3D0}',
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
    icon: '\u{1F3C0}',
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
    icon: '\u{26BD}',
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
    icon: '\u{1F3BE}',
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
    icon: '\u{1F3CA}',
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
    athleteLimit: 50,
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
    athleteLimit: 250,
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
    athleteLimit: -1,
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
// FEATURES (Neden YiSA-S kartlari)
// ===============================================================

export const FEATURES = [
  {
    id: 'analiz',
    icon: '\u{1F4CA}',
    title: '900 Alan Analiz',
    description: 'Her sporcu 900 farkli parametrede degerlendirilir ve bilimsel rapor olusturulur.',
  },
  {
    id: 'ai',
    icon: '\u{1F916}',
    title: '4 AI Robot',
    description: 'Her gorev icin ozel tasarlanmis yapay zeka robotlari ile akilli otomasyon.',
  },
  {
    id: 'phv',
    icon: '\u{1F4C8}',
    title: 'PHV Takibi',
    description: 'Buyume plagi korumasi ve sakatlik onleme icin zirve boy artis hizi takibi.',
  },
  {
    id: 'guvenlik',
    icon: '\u{1F6E1}',
    title: 'KVKK Uyumlu',
    description: 'Cocuk veri guvenligi, on-premise isleme ve tam KVKK uyumluluk.',
  },
] as const

// ===============================================================
// FRANCHISE (Bayilik)
// ===============================================================

export const FRANCHISE = {
  investment: {
    entry: 50000,
    monthly: 15000,
    currency: '\u{20BA}',
  },
  benefits: [
    'Kurumsal paket erisimi',
    'Bolgesel tekel hakki',
    'Egitim ve sertifika',
    'Pazarlama destegi',
    'Teknik altyapi ve destek',
    'Marka kullanim hakki',
  ],
  requirements: [
    'Spor sektoru deneyimi veya ilgisi',
    'Minimum 3 yillik is deneyimi',
    'Bolgesel pazar bilgisi',
    'Yatirim kapasitesi',
    'Girisimci ruh ve liderlik',
  ],
  process: [
    { step: 1, title: 'Basvuru', description: 'Online formu doldurun' },
    { step: 2, title: 'Degerlendirme', description: 'Basvurunuz incelenir' },
    { step: 3, title: 'Gorusme', description: 'Detayli gorusme yapilir' },
    { step: 4, title: 'Sozlesme', description: 'Anlasma imzalanir' },
    { step: 5, title: 'Egitim', description: 'Kapsamli egitim alinir' },
    { step: 6, title: 'Basla', description: 'Bayilik aktif edilir' },
  ],
} as const

// ===============================================================
// EVALUATION SYSTEM (900 Alan)
// ===============================================================

export const EVALUATION_SYSTEM = {
  total: 900,
  formula: '30 Ana Kategori x 30 Alt Alan = 900 Degerlendirme Noktasi',
  categories: [
    { id: 'fiziksel', icon: '\u{1F4AA}', name: 'Fiziksel Gelisim', description: 'Boy, kilo, vucut kompozisyonu' },
    { id: 'teknik', icon: '\u{26BD}', name: 'Teknik Beceri', description: 'Brans bazli teknik analiz' },
    { id: 'taktik', icon: '\u{1F9E0}', name: 'Taktiksel Zeka', description: 'Oyun okuma ve karar verme' },
    { id: 'psikolojik', icon: '\u{1F9D8}', name: 'Psikolojik', description: 'Mental guc ve motivasyon' },
    { id: 'sosyal', icon: '\u{1F465}', name: 'Sosyal Gelisim', description: 'Takim ici uyum ve liderlik' },
    { id: 'motorik', icon: '\u{1F3C3}', name: 'Motorik Beceri', description: 'Koordinasyon ve ceviklik' },
    { id: 'esneklik', icon: '\u{1F938}', name: 'Esneklik', description: 'Eklem hareketliligi' },
    { id: 'dayaniklilik', icon: '\u{2764}', name: 'Dayaniklilik', description: 'Aerobik ve anaerobik kapasite' },
    { id: 'kuvvet', icon: '\u{1F4A5}', name: 'Kuvvet', description: 'Kas gucu ve patlayicilik' },
    { id: 'hiz', icon: '\u{26A1}', name: 'Hiz', description: 'Sprint ve reaksiyon suresi' },
    { id: 'denge', icon: '\u{2696}', name: 'Denge', description: 'Statik ve dinamik denge' },
    { id: 'ritim', icon: '\u{1F3B5}', name: 'Ritim', description: 'Hareket ritmi ve zamanlama' },
    { id: 'algi', icon: '\u{1F441}', name: 'Algi', description: 'Gorsel ve mekansal algi' },
    { id: 'beslenme', icon: '\u{1F34E}', name: 'Beslenme', description: 'Beslenme aliskanliklari' },
    { id: 'uyku', icon: '\u{1F634}', name: 'Uyku', description: 'Uyku kalitesi ve suresi' },
    { id: 'stres', icon: '\u{1F60C}', name: 'Stres Yonetimi', description: 'Yarisma stresi ve basi etme' },
    { id: 'odaklanma', icon: '\u{1F3AF}', name: 'Odaklanma', description: 'Dikkat suresi ve konsantrasyon' },
    { id: 'ozguven', icon: '\u{1F4AA}', name: 'Ozguven', description: 'Ozguven ve cesaret' },
    { id: 'iletisim', icon: '\u{1F4AC}', name: 'Iletisim', description: 'Sozel ve sozel olmayan iletisim' },
    { id: 'sakatlik', icon: '\u{1FA79}', name: 'Sakatlik Riski', description: 'Sakatlik gecmisi ve risk analizi' },
    { id: 'buyume', icon: '\u{1F4C8}', name: 'Buyume Takibi', description: 'PHV ve buyume hizi' },
    { id: 'genetik', icon: '\u{1F9EC}', name: 'Genetik Potansiyel', description: 'Aile gecmisi ve potansiyel' },
    { id: 'oyun_zekasi', icon: '\u{265F}', name: 'Oyun Zekasi', description: 'Stratejik dusunme' },
    { id: 'liderlik', icon: '\u{1F451}', name: 'Liderlik', description: 'Takim kaptanligi ve yon verme' },
    { id: 'disiplin', icon: '\u{23F0}', name: 'Disiplin', description: 'Kurallara uyum ve sorumluluk' },
    { id: 'yaraticilik', icon: '\u{1F3A8}', name: 'Yaraticilik', description: 'Yaratici problem cozme' },
    { id: 'adaptasyon', icon: '\u{1F504}', name: 'Adaptasyon', description: 'Degisime uyum' },
    { id: 'rekabet', icon: '\u{1F3C6}', name: 'Rekabet Gucu', description: 'Yarisma istegi ve hirs' },
    { id: 'toparlanma', icon: '\u{1F504}', name: 'Toparlanma', description: 'Antrenmandan sonra iyilesme' },
    { id: 'tutarlilik', icon: '\u{1F4CA}', name: 'Tutarlilik', description: 'Performans istikrari' },
  ],
} as const

// ===============================================================
// 10 PERSPEKTiF
// ===============================================================

export const PERSPECTIVES = [
  { id: 'fiziksel', icon: '\u{1F4AA}', name: 'Fiziksel', description: 'Vucut olculeri ve fiziksel kapasite' },
  { id: 'teknik', icon: '\u{26BD}', name: 'Teknik', description: 'Brans bazli teknik beceriler' },
  { id: 'taktik', icon: '\u{1F9E0}', name: 'Taktik', description: 'Oyun zekasi ve strateji' },
  { id: 'mental', icon: '\u{1F9D8}', name: 'Mental', description: 'Psikolojik guc ve motivasyon' },
  { id: 'sosyal', icon: '\u{1F465}', name: 'Sosyal', description: 'Takim uyumu ve iletisim' },
  { id: 'saglik', icon: '\u{2764}', name: 'Saglik', description: 'Genel saglik ve beslenme' },
  { id: 'buyume', icon: '\u{1F4C8}', name: 'Buyume', description: 'PHV ve gelisim takibi' },
  { id: 'potansiyel', icon: '\u{2B50}', name: 'Potansiyel', description: 'Gelecek projeksiyonu' },
  { id: 'risk', icon: '\u{26A0}', name: 'Risk', description: 'Sakatlik ve asiri yuklenme' },
  { id: 'performans', icon: '\u{1F3C6}', name: 'Performans', description: 'Yarisma ve musabaka analizi' },
] as const

// ===============================================================
// 6 AI MOTORU
// ===============================================================

export const AI_ENGINES = [
  {
    id: 'analiz',
    name: 'Analiz Motoru',
    icon: '\u{1F9E0}',
    color: '#8B5CF6',
    role: 'Derin Sporcu Analizi',
    description: 'Kapsamli sporcu degerlendirmesi, rapor olusturma ve stratejik oneri sistemi.',
  },
  {
    id: 'goruntu',
    name: 'Goruntu Motoru',
    icon: '\u{1F4F7}',
    color: '#06B6D4',
    role: 'Gorsel Analiz',
    description: 'Hareket analizi, form kontrolu ve teknik degerlendirme icin goruntu isleme.',
  },
  {
    id: 'tahmin',
    name: 'Tahmin Motoru',
    icon: '\u{1F52E}',
    color: '#10B981',
    role: 'Gelecek Projeksiyonu',
    description: 'Sporcu gelisim tahmini, potansiyel analizi ve kariyer yol haritasi.',
  },
  {
    id: 'dogal_dil',
    name: 'Dogal Dil Motoru',
    icon: '\u{1F4AC}',
    color: '#F59E0B',
    role: 'Iletisim ve Raporlama',
    description: 'Otomatik rapor yazimi, veli iletisimi ve chatbot destegi.',
  },
  {
    id: 'guvenlik',
    name: 'Guvenlik Motoru',
    icon: '\u{1F6E1}',
    color: '#EF4444',
    role: 'Veri Guvenligi',
    description: 'KVKK uyumluluk, veri sifreleme ve erisim kontrolu.',
  },
  {
    id: 'optimizasyon',
    name: 'Optimizasyon Motoru',
    icon: '\u{26A1}',
    color: '#3B82F6',
    role: 'Performans Optimizasyonu',
    description: 'Antrenman plani optimizasyonu, yuk dengeleme ve toparlanma yonetimi.',
  },
] as const

// ===============================================================
// PHV (Peak Height Velocity)
// ===============================================================

export const PHV = {
  name: 'PHV Takibi',
  fullName: 'Peak Height Velocity - Zirve Boy Artis Hizi',
  description:
    'Cocugun en hizli buyudugu donemi bilimsel olarak takip eder. Bu donemde buyume plaklari hassastir ve antrenman yogunlugunun dikkatli ayarlanmasi gerekir.',
  warning:
    'PHV doneminde asiri yuklenme, buyume plagi yaralanmalarina ve kalici hasara yol acabilir. Bu donemde antrenman yogunlugu mutlaka azaltilmalidir.',
  benefits: [
    'Buyume plagi korumasi',
    'Sakatlik onleme',
    'Antrenman yogunlugu ayarlama',
    'Bireysel gelisim takibi',
  ],
  stages: [
    {
      id: 'pre-phv',
      name: 'Pre-PHV',
      description: 'Buyume henuz hizlanmamis. Temel beceri gelistirme donemi.',
      risk: 'D\u00FC\u015F\u00FCk' as const,
    },
    {
      id: 'onset-phv',
      name: 'PHV Baslangici',
      description: 'Buyume hizlanmaya basliyor. Dikkatli izleme gerekli.',
      risk: 'Orta' as const,
    },
    {
      id: 'peak-phv',
      name: 'Zirve PHV',
      description: 'En hizli buyume donemi. Antrenman yogunlugu azaltilmali.',
      risk: 'Y\u00FCksek' as const,
    },
    {
      id: 'post-phv',
      name: 'Post-PHV',
      description: 'Buyume yavasliyor. Kademeli olarak yogunluk arttirilabilir.',
      risk: 'Orta' as const,
    },
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
