-- attendance tablosuna eski şemada eksik olabilecek kolonları ekle
-- Büyük şemayı çalıştırmadan önce veya "column does not exist" hatası alırsan bu sorguyu çalıştır.
ALTER TABLE attendance ADD COLUMN IF NOT EXISTS tarih DATE DEFAULT CURRENT_DATE;
ALTER TABLE attendance ADD COLUMN IF NOT EXISTS schedule_id UUID;
ALTER TABLE attendance ADD COLUMN IF NOT EXISTS giris_saati TIME;
ALTER TABLE attendance ADD COLUMN IF NOT EXISTS cikis_saati TIME;
ALTER TABLE attendance ADD COLUMN IF NOT EXISTS kaydeden_id UUID;
ALTER TABLE attendance ADD COLUMN IF NOT EXISTS notlar TEXT;
