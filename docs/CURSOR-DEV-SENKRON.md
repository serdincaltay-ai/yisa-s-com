# Cursor ↔ Dev Görünürlük ve Senkron (yisa-s-com)

**Amaç:** Cursor yaptıkların ile Dev’in gördükleri aynı olsun; eksik komutları Dev versin, sen Cursor’da çalıştırasın.

---

## 1. Kim neyi görüyor?

| Taraf | Gördüğü yer | Ne zaman güncel? |
|-------|-------------|-------------------|
| **Cursor (sen)** | Bu bilgisayardaki **yisa-s-com** klasörü. | Her save/commit anında. |
| **Dev (Devin)** | **GitHub:** serdincaltay-ai/yisa-s-com. | Sen **push** yaptığında. |

**Eşitlik:** Yerel klasör = GitHub ancak **commit + push** ile güncel olur.

---

## 2. Akış

1. **Cursor:** Bu repoda işi yap → **commit** → **push** (origin main).
2. **Dev:** GitHub’da yisa-s-com’u inceler → eksik komutları verir.
3. **Cursor:** Komutları çalıştırır → **commit** + **push**.
4. Gerekirse 2–3 tekrarlanır.

---

## 3. Şu an

- Bu repoda yerel değişiklikler varsa **commit** edip **push** et; Dev güncel kodu görsün.
- Üç repo özeti: **tenant-yisa-s/docs/UC-REPO-CURSOR-DEV-SENKRON.md**

*Bu dosya yisa-s-com/docs/ içindedir.*
