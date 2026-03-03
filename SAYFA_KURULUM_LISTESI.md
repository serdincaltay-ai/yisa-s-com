# YiSA-S Vitrin Sayfası — Kurulum Listesi

Aynı sayfayı (gönderdiğin tasarıma göre) sıfırdan veya başka bir ortamda kurmak için gereken tüm özellikler ve ihtiyaçlar. Cloud / Vercel’e çıkmadan önce kontrol listesi olarak kullanılabilir.

---

## 1. Teknik altyapı

| Madde | Açıklama |
|-------|----------|
| **Framework** | Next.js 14 (App Router) |
| **Node** | 18+ (LTS önerilir) |
| **Paket yöneticisi** | npm |
| **Dil** | TypeScript |
| **Stil** | Tailwind CSS 3.x |
| **Animasyon** | Framer Motion 11.x |
| **İkonlar** | Lucide React |

---

## 2. Bağımlılıklar (package.json)

```json
{
  "dependencies": {
    "@supabase/ssr": "^0.5.0",
    "@supabase/supabase-js": "^2.45.0",
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.460.0",
    "next": "14.2.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "tailwindcss": "^3.4.0",
    "typescript": "^5.0.0"
  }
}
```

- Demo/API için istenirse: `@anthropic-ai/sdk` (robot chat).
- Tüm metinler Türkçe; sayfada İngilizce kullanılmaz.

---

## 3. Ortam değişkenleri (.env.local)

| Değişken | Zorunlu | Açıklama |
|----------|--------|----------|
| `NEXT_PUBLIC_SITE_URL` | Hayır | Site URL (örn. https://yisa-s.com) |
| `NEXT_PUBLIC_SUPABASE_URL` | Evet (form/panel için) | Supabase proje URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Evet (form/panel için) | Supabase anon key |
| `GITHUB_REPO` | Vercel için | `yisa-s-website` (vitrin repo) |

- Supabase: Tek proje; vitrin aynı Supabase’i kullanır (demo, franchise formları, panel listeleri).

---

## 4. Ana sayfa bölümleri (sırayla)

Aynı sayfayı kurmak için ana sayfada bu bileşenler bu sırada olmalı:

| Sıra | Bileşen | İçerik özeti |
|------|---------|--------------|
| 1 | **IntroOverlay** | Açılış overlay (logo / kısa mesaj, isteğe bağlı) |
| 2 | **HeroSection** | Arka plan görseli + gradient, slogan, “Teknolojiyi Spora Başlattık”, Tuzla Cimnastik & Hobi GYM, dönen slogan, 2 CTA (Ücretsiz Demo, Tanıtım İzle), istatistikler (4 Robot, 12 Direktörlük, 300+ Hareket, 6 Branş), sağda görsel kart + sliding overlay, CANLI badge |
| 3 | **InteractiveShowcase** | 4 ekran: Panel Yönetimi, Yoklama Sistemi, Aidat Takibi, Gelişim Analizi (Beyin Takımı yok) |
| 4 | **BranslarSection** | 6 branş (Cimnastik, Bale, Yüzme, Futbol, Voleybol, Basketbol) — yisas.ts BRANCHES |
| 5 | **FeaturesSection** | Neden YiSA-S: 900 Alan, 6 AI Motoru, PHV, Veli Paneli — yisas.ts FEATURES |
| 6 | **ClubPreview** | Kulüp seçici (Tuzla Cimnastik SK, Trabzonspor, Beşiktaş, Fenerbahçe, Kendi Kulübünüz), menü: Gelişim Raporları, Sistem Ayarları (Beyin Takımı yok) |
| 7 | **PricingSection** | Fiyatlandırma kartları — yisas.ts PACKAGES |
| 8 | **DemoForm** | Demo talep formu, #demo anchor |

- Layout: Sabit **Header** (logo, nav, Giriş Yap, Demo Talep Et) + **Footer** + isteğe bağlı **ChatWidget**.

---

## 5. Veri kaynağı: lib/knowledge/yisas.ts

Sayfanın aynı olması için bu export’lar kullanılmalı (içerik senin gönderdiğin / rebuild’deki gibi):

| Export | Kullanıldığı yer |
|--------|-------------------|
| BRAND | Header, Footer, metadata, genel |
| COLORS | Tema / renkler |
| STATS | Hero istatistik satırı |
| ROBOTS | (Özellikler / robot bölümü varsa) |
| BRANCHES | Branşlar bölümü (6 branş, icon dahil) |
| SERVICES | (Hizmetler bölümü varsa) |
| PACKAGES | Fiyatlandırma (athleteLimit dahil) |
| FRANCHISE | Franchise sayfası |
| EVALUATION_SYSTEM | Özellikler sayfası |
| PERSPECTIVES | Özellikler sayfası |
| AI_ENGINES | Özellikler / AI bölümü |
| PHV | Özellikler (PHV aşamaları, risk: Düşük/Orta/Yüksek) |
| NAV_LINKS | Header menü |
| CTA_LINKS | Header (Giriş Yap, Demo Talep Et) |
| FOOTER | Footer metin ve linkler |
| HERO_SLOGANS | Hero dönen slogan |
| SHOWCASE_SCREENS | InteractiveShowcase (4 ekran; Beyin Takımı yok) |
| CLUB_PREVIEWS | ClubPreview kulüp listesi |
| FEATURES | FeaturesSection |

- Beyin Takımı: Vitrin sayfasında **yer almaz** (ne SHOWCASE_SCREENS’te ne ClubPreview menüsünde).

---

## 6. Görsel ve varlıklar

| Varlık | Yol | Açıklama |
|--------|-----|----------|
| Hero görseli | `public/images/yisa-s-hero.jpg` | Hero arka plan + sağ kart; yoksa gradient fallback kullanılabilir |
| Favicon | `app/icon.png` veya `public/favicon.ico` | Tarayıcı sekmesi |
| PWA manifest | `app/manifest.ts` veya `public/manifest.webmanifest` | Manifest + themeColor (#0f3460) |

---

## 7. Sayfa rotaları (aynı yapı için)

- `/` — Ana sayfa (yukarıdaki bölümler)
- `/demo` — Demo talep (form)
- `/ozellikler` — Özellikler (900 alan, PHV, AI motorları vb.)
- `/fiyatlandirma` — Fiyatlandırma
- `/franchise` — Franchise
- `/giris` — Giriş (app.yisa-s.com’a yönlendirme veya giriş formu)
- `/hakkimizda` — Hakkımızda
- `/robot` — Robot / chat sayfası (isteğe bağlı)
- `/panel`, `/panel/bayilik-listesi`, `/panel/demo-listesi` — Panel listeleri (Supabase gerekir)

---

## 8. Header

- Logo: Y kutusu (hover parlaması), YiSA-S, altında yisa-s.com (font-mono).
- Menü: NAV_LINKS (Özellikler, Branşlar, Fiyatlar, Demo, Mağaza, Franchise).
- CTA: Giriş Yap (app.yisa-s.com), Demo Talep Et (#demo).
- Mobil: Açılır menü, aynı linkler + CTA’lar.

---

## 9. Footer

- FOOTER.slogan, FOOTER.description, FOOTER.links (platform, kurumsal, yasal).
- İletişim: e-posta, telefon, Instagram, WhatsApp (yisas’tan).
- © BRAND.year BRAND.name.

---

## 10. Tema ve stil

- Renkler: #060a13 (arka plan), #0f3460 (navy), #e94560 (accent), #00d4ff (cyan).
- Font: Inter (veya projede tanımlı font).
- CSS değişkenleri: globals.css’te --background, --foreground, --primary, --card, --border vb. (isteğe bağlı shadcn uyumu).
- Butonlar: btn-primary (cyan vurgu), outline ikincil aksiyonlar.

---

## Kontrol listesi (cloud / Vercel öncesi)

- [ ] Node 18+, npm install, `npm run build` hatasız
- [ ] .env.local: NEXT_PUBLIC_SUPABASE_* (ve gerekiyorsa GITHUB_REPO)
- [ ] Ana sayfa: 8 bölüm sırası ve içerik doğru
- [ ] Beyin Takımı hiçbir bölümde yok (SHOWCASE_SCREENS 4 ekran, ClubPreview 2 menü satırı)
- [ ] lib/knowledge/yisas.ts tüm listelenen export’lara sahip
- [ ] public/images/yisa-s-hero.jpg var veya fallback test edildi
- [ ] Tüm kullanıcıya görünen metinler Türkçe
- [ ] Header / Footer linkleri ve CTA’lar doğru
- [ ] Vercel’de GITHUB_REPO=yisa-s-website ve Supabase env’ler tanımlı

Bu listeyi cloud’a çıkmadan önce tek tek işaretleyerek aynı sayfayı kurduğunu doğrulayabilirsin.
