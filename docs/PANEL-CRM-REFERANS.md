# Panel ve CRM Referansları

> **Amaç:** Vitrin (yisa-s-com) panelinde lead/CRM veya ManyChat entegrasyonu ihtiyacında nereye bakılacağı.

## Mevcut durum

- **yisa-s-com `/panel`:** Demo listesi (`/panel/demo-listesi`), bayilik listesi (`/panel/bayilik-listesi`), layout ve API’ler mevcut. Supabase ile çalışıyor.

## Sosyal medya / Lead / CRM referansı

**Kaynak:** `_schema_sources/v0-social-media-ai-assistant-main/`

- **Admin sayfaları:** `app/admin/` (layout, sidebar, header); alt sayfalar: leads, messages, catalog, content, deletion-requests, analytics, social, bookings, users, whatsapp, settings.
- **API:** `app/api/` — auth (login, register, logout), whatsapp (webhook, send), messages (reply, generate-response), content/generate, bookings/create, users/list, deletion-requests, activity-log.
- **Lib:** whatsapp.ts, ai-helpers.ts, db.ts, permissions.ts.

**Ne zaman kullanılır:** ManyChat veya benzeri lead/CRM/sosyal medya yönetimi yisa-s.com panelinde genişletilecekse bu proje referans alınır. Şu an yisa-s-com paneli demo ve bayilik listesi ile sınırlı; ihtiyaç olursa bu kaynaktan sayfa/API uyarlanır.
