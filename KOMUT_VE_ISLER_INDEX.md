# Komutlar ve Sonraki İşler — Nerede, Hangi Pencere?

**Bu dosya:** Komutların ve sonraki işlerin hangi klasörde / hangi dosyada olduğunu tek yerde gösterir.  
**Şu an açmanız gereken Cursor workspace:** `yisa-s-com` (bu klasör). Komutlar ve vitrin işleri burada.

---

## 1. Cursor’a verdiğiniz komutlar (ROB-CURSOR / kurulum)

| Dosya | Açıklama |
|-------|----------|
| **cursor-robot/CURSOR-KOMUT.md** | Ana başlatma komutu — Cursor’a yapıştırıp Enter’a basacağınız metin (ROB-CURSOR, kurulum adımları). |
| **cursor-robot/CURSOR_YAPISTIR_BLOKU.md** | “Yapıştır bas” kısa paket (dashboard, asistan karşılama). |
| **cursor-robot/CURSOR_TEK_PAKET.md** | Zip+üst metin birleşik; V1.1/V2, Bölüm Z, RLS. |
| **cursor-robot/ROB-CURSOR-GOREV.md** | ROB-CURSOR görev tanımı ve başlatma komutu referansı. |

**Hangi pencerede açılır?**  
→ **yisa-s-com** klasörünü Cursor’da açın. Sol dosya ağacından `cursor-robot` klasörüne girip `CURSOR-KOMUT.md` dosyasını açın.

---

## 2. Sonraki işler / yapılacaklar (hangi repo, hangi dosya)

| Repo (Cursor’da açacağınız klasör) | Dosya | İçerik |
|-------------------------------------|-------|--------|
| **yisa-s-com** (vitrin) | **OTEKI_KLASORLERDE_YAPILACAKLAR.md** | Vitrin (1–3) + tenant (1–8) işlerinin listesi; hangi işin hangi repoda yapılacağı. |
| **yisa-s-com** (vitrin) | **TENANT_PENCEREDE_YAPILACAKLAR.md** | Sadece tenant-yisa-s’te yapılacak 8 iş (yoklama, aidat, iletişim, belgeler, veli paneli vb.). Bu dosyayı tenant penceresinde referans alın. |
| **yisa-s-com** (vitrin) | **.cursor/rules/vitrin-yapilacaklar.mdc** | Vitrin için 4 iş kuralı (ana sayfa, demo formu, fuar turu, link/kopya). Bu workspace’te Cursor otomatik uygular. |

**Vitrin işleri** → yisa-s-com penceresinde.  
**Tenant işleri** → tenant-yisa-s penceresini açıp `TENANT_PENCEREDE_YAPILACAKLAR.md` (veya kopyasını) orada kullanın.

---

## 3. “Komutları yazdığın pencere” hangisi?

Komutlar **yisa-s-com** projesinde yazıldı. Yani:

- **Cursor’da şu klasörü açın:** `yisa-s-com`  
  (tam yol: `c:\Users\info\OneDrive\Desktop\v0 yisa s dosyamız\yisa-s-com`)
- **Komut dosyasını açmak için:** Sol taraftan `cursor-robot` → `CURSOR-KOMUT.md` dosyasına tıklayın.
- **Sonraki işleri görmek için:** Aynı yisa-s-com penceresinde kök dizindeki `OTEKI_KLASORLERDE_YAPILACAKLAR.md` veya `TENANT_PENCEREDE_YAPILACAKLAR.md` dosyasını açın.

Bu pencerede çıktı bulamıyorsanız: Cursor’da **File → Open Folder** ile `yisa-s-com` klasörünü açın; komutlar ve iş listeleri hep bu repoda.

---

## 4. 3 repo özeti

| Klasör | Ne için | Komut / iş dosyaları |
|--------|---------|----------------------|
| **yisa-s-com** | Vitrin (yisa-s.com) | Komutlar: `cursor-robot/CURSOR-KOMUT.md`. İşler: `OTEKI_KLASORLERDE_YAPILACAKLAR.md`, `TENANT_PENCEREDE_YAPILACAKLAR.md`, `.cursor/rules/vitrin-yapilacaklar.mdc` |
| **tenant-yisa-s** | Franchise (*.yisa-s.com) | İşler: tenant penceresinde `TENANT_PENCEREDE_YAPILACAKLAR.md` (bu repodan kopyalayıp kullanın) |
| **app-yisa-s** | Patron CELF komut merkezi | Bu repoda komut dosyası yok; kurulum komutları yisa-s-com’daki cursor-robot’ta. |

Özet: **Komutları ve sonraki iş listelerini görmek için Cursor’da `yisa-s-com` klasörünü açın; komutlar `cursor-robot/CURSOR-KOMUT.md`, işler kökteki `*YAPILACAKLAR.md` dosyalarında.**
