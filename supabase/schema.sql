-- Schema para Catálogo SaaS de Revendedores Apple (apple.kadu.pro)

-- 1. Tabela de Revendedores
CREATE TABLE IF NOT EXISTS resellers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  logo_url TEXT,
  bio TEXT,
  whatsapp TEXT NOT NULL,
  instagram TEXT,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  pickup_address TEXT,
  delivery_policy TEXT,
  is_verified BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 2. Tabela de Itens Cadastrados pelo Revendedor
CREATE TABLE IF NOT EXISTS reseller_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  reseller_id UUID REFERENCES resellers(id) ON DELETE CASCADE,
  apple_product_id TEXT NOT NULL,
  condition TEXT NOT NULL CHECK (condition IN ('new_sealed', 'pre_owned')),
  grade TEXT NOT NULL DEFAULT 'sealed',
  battery_health INT,
  color TEXT NOT NULL,
  storage TEXT NOT NULL,
  price_cash NUMERIC(10, 2) NOT NULL,
  price_installment NUMERIC(10, 2),
  max_installments INT DEFAULT 12,
  custom_photos JSONB DEFAULT '[]'::jsonb,
  custom_description TEXT,
  included_items JSONB DEFAULT '[]'::jsonb,
  warranty TEXT NOT NULL,
  is_active BOOLEAN DEFAULT true,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 3. Habilita RLS
ALTER TABLE resellers ENABLE ROW LEVEL SECURITY;
ALTER TABLE reseller_items ENABLE ROW LEVEL SECURITY;

-- 4. Políticas de Leitura Pública
CREATE POLICY "Leitura pública de revendedores" ON resellers
  FOR SELECT USING (true);

CREATE POLICY "Leitura pública de itens ativos" ON reseller_items
  FOR SELECT USING (is_active = true);

-- 5. Políticas de Escrita do Revendedor
CREATE POLICY "Revendedores gerenciam seu próprio perfil" ON resellers
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Revendedores gerenciam seus próprios itens" ON reseller_items
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM resellers
      WHERE resellers.id = reseller_items.reseller_id
      AND resellers.user_id = auth.uid()
    )
  );

-- 6. Storage Bucket para Fotos Reais dos Seminovos
INSERT INTO storage.buckets (id, name, public) 
VALUES ('reseller-photos', 'reseller-photos', true)
ON CONFLICT (id) DO NOTHING;

CREATE POLICY "Upload público de fotos reais para o bucket" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'reseller-photos');

CREATE POLICY "Leitura pública de fotos reais" ON storage.objects
  FOR SELECT USING (bucket_id = 'reseller-photos');
