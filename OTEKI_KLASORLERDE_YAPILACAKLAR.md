# Öteki klasörlerde yapılacaklar — yisa-s-com & tenant-yisa-s

**Bu dosya:** `app-yisa-s` dışındaki projelerde yapılacak işlerin tek listesi.  
**Kullanım:** Bu dosyayı ilgili klasöre (yisa-s-com veya tenant-yisa-s) kopyalayıp orada Cursor ile çalışırken referans alın.

---

## 1. yisa-s-com (Vitrin — yisa-s.com / www.yisa-s.com) ← **BU KLASÖR**

| # | Klasör / Dosya | İş | Not |
|---|----------------|-----|-----|
| 1 | Vitrin ana sayfa | yisa-s.com ana sayfa, fuar tanıtımı, kendi tasarımı | Bu repo'da; vitrin sitesi bu kod tabanında. |
| 2 | Demo formu | Vitrin sitesinden demo talebi gönderimi (API: app-yisa-s'teki `/api/demo-requests`) | Form gönderirken `source: 'vitrin'` body'de eklenebilir. |
| 3 | Fuar / tanıtım | Fuar Demo Modu: QR + 90 sn tour sayfası (opsiyonel) | Görev 53. |

**Not:** Vitrin backend (fiyat hesaplama, demo kayıt) app-yisa-s'te. Vitrin **frontend** (sayfa tasarımı, içerik, form UI) yisa-s-com'da.

---

## 2. tenant-yisa-s (Franchise — *.yisa-s.com)

| # | Klasör / Dosya | İş | Not |
|---|----------------|-----|-----|
| 1 | `app/franchise/yoklama/` veya tenant route | Yoklama modülü: GELDİ/GELMEDİ/MUAF, devamsızlık SMS tetiği | sms_templates + sms-provider ile entegre (app-yisa-s'te API/cron var). |
| 2 | `app/franchise/aidatlar/` | Aidat yönetimi: hatırlatma, liste, toplu düzenleme | |
| 3 | `app/franchise/iletisim/` | Duyurular, anketler, eğitmen–veli mesajlaşma | |
| 4 | `app/franchise/belgeler/` | Belge yönetimi: sağlık raporu, geçerlilik uyarıları, veli/eğitmen yükleme | |
| 5 | `app/veli/dashboard/` | Veli dashboard: çocuk listesi, devamsızlık özeti | |
| 6 | (Veli) | Çocuk devamsızlık görüntüleme sayfası/komponenti | |
| 7 | (Veli) | Online aidat ödeme (İyzico/Paratika entegrasyonu) | |
| 8 | (Veli) | Mesajlaşma: antrenör ile iletişim | |

**Not:** Veritabanı ve Supabase tek (app-yisa-s ile aynı). Tenant subdomain'e göre `tenant_id` / RLS ile veri filtreleme yapılır.

---

## 3. Görev–klasör eşlemesi (referans)

| Görev no (GOREV_LISTESI_SIRALI) | Klasör |
|----------------------------------|--------|
| 27–30 | tenant-yisa-s (yoklama, aidat, iletişim, belgeler) |
| 31–34 | tenant-yisa-s (veli paneli) |
| 53 (Fuar Demo) | yisa-s-com veya app-yisa-s (vitrin sayfası) |

---

## 4. Bu dosyayı nasıl kullanacaksınız?

1. **yisa-s-com** klasörünü açın → Bu dosyadaki "1. yisa-s-com" bölümündeki işleri yapın.
2. **tenant-yisa-s** klasörünü açın → "2. tenant-yisa-s" bölümündeki işleri yapın.
3. Cursor'a örnek: *"OTEKI_KLASORLERDE_YAPILACAKLAR.md'deki tenant-yisa-s bölümündeki 1 numaralı işi yap"* (yoklama modülü).

Bu dosyayı ilgili repo'ya kopyalayıp orada "yapılacaklar" listesi olarak kullanabilirsiniz.
