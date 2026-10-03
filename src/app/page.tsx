'use client';

import React from 'react';
import Link from 'next/link';
import {
  Sparkles,
  Store,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  ArrowRight,
  Battery,
  Camera,
  Layers,
  ChevronRight,
} from 'lucide-react';
import { AppleFooter } from '@/components/apple/AppleFooter';
import { APPLE_MASTER_CATALOG } from '@/data/apple-master-catalog';
import { getAllResellers } from '@/lib/store-service';
import { formatBRL } from '@/lib/utils';

export default function SaaSPlatformLandingPage() {
  const resellers = getAllResellers();
  const demoStore1 = resellers[0]; // iPhones Brasil (Brasília)
  const demoStore2 = resellers[1]; // Paulista Prime (São Paulo)

  return (
    <div className="min-h-screen bg-canvas flex flex-col justify-between">
      {/* TILE 1 (LIGHT HERO): Apresentação do SaaS Clone Apple */}
      <section className="w-full bg-canvas text-ink py-20 px-4 text-center border-b border-hairline/60">
        <div className="max-w-4xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-canvas-parchment text-ink text-[13px] font-medium border border-hairline/80 shadow-xs">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>SaaS para Revendedores de Produtos Apple Novos e Seminovos</span>
          </div>

          <h1 className="text-[44px] sm:text-[64px] font-semibold text-ink tracking-apple-hero leading-[1.05]">
            O catálogo Apple definitivo. <br className="hidden sm:inline" />
            Personalizado para sua loja.
          </h1>

          <p className="text-[21px] sm:text-[24px] text-ink-muted48 max-w-2xl mx-auto font-normal leading-snug">
            Todos os produtos da Apple já mapeados com variações de fábrica. Cadastre novos lacrados ou seminovos com saúde de bateria e fotos reais em poucos segundos.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <Link
              href="/dashboard/catalogo/novo"
              className="btn-apple-primary px-8 py-3 text-[17px] font-medium w-full sm:w-auto shadow-sm"
            >
              Criar Meu Catálogo Grátis
            </Link>

            <Link
              href="/iphones-brasil"
              className="btn-apple-secondary px-8 py-3 text-[17px] font-medium w-full sm:w-auto flex items-center justify-center gap-1.5"
            >
              <Store className="w-4 h-4" />
              <span>Ver Loja Demo (Brasília)</span>
            </Link>
          </div>

          {/* Hero Photography Renders */}
          <div className="pt-10 flex items-center justify-center">
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-model-unselect-gallery-2-202409_GEO_EMEA?wid=5120&hei=2880&fmt=webp"
              alt="iPhone 16 Pro Titânio"
              className="max-h-[380px] w-auto object-contain apple-product-shadow"
            />
          </div>
        </div>
      </section>

      {/* TILE 2 (DARK TILE 1 - #272729): Lacrado vs. Seminovo */}
      <section className="w-full bg-surface-tile1 text-white py-20 px-4">
        <div className="max-w-[1100px] mx-auto space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-[13px] font-semibold uppercase tracking-wider text-primary-on-dark">
              Didática Visual Incomparável
            </span>
            <h2 className="text-[36px] sm:text-[48px] font-semibold text-white tracking-apple-hero leading-tight">
              Novos ou Seminovos. <br />
              Tratados com a transparência que vendem.
            </h2>
            <p className="text-[17px] text-body-muted leading-relaxed">
              O cliente sabe exatamente o que está comprando antes mesmo de clicar no anúncio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Box Novo Lacrado */}
            <div className="bg-[#1f1f21] rounded-apple-card p-8 border border-white/10 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <CheckCircle2 className="w-4 h-4" />
                  Produto Novo / Lacrado
                </span>
                <h3 className="text-[24px] font-semibold text-white">
                  Zero esforço de cadastro
                </h3>
                <p className="text-[15px] text-white/70 leading-relaxed">
                  O revendedor escolhe o modelo e a cor. O sistema carrega instantaneamente as fotos de estúdio em alta resolução da Apple, especificações completas e a garantia mundial oficial de 1 ano.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[13px] text-white/60">
                <span>Fotos oficiais de estúdio</span>
                <span>•</span>
                <span>Garantia Apple 1 ano</span>
              </div>
            </div>

            {/* Box Seminovo Personalizado */}
            <div className="bg-[#1f1f21] rounded-apple-card p-8 border border-white/10 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-semibold bg-blue-500/10 text-primary-on-dark border border-blue-500/20">
                  <Sparkles className="w-4 h-4" />
                  Produto Seminovo / Usado
                </span>
                <h3 className="text-[24px] font-semibold text-white">
                  Fotos reais e bateria em destaque
                </h3>
                <p className="text-[15px] text-white/70 leading-relaxed">
                  Permite cadastrar a saúde da bateria (ex: 94%), a classificação estética (Grade A+), observações personalizadas do aparelho e carregar as fotos reais que aparecem logo de cara no card da vitrine.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[13px] text-white/60">
                <span>Foto real no card</span>
                <span>•</span>
                <span>Medidor de bateria</span>
                <span>•</span>
                <span>Termo da loja</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TILE 3 (PARCHMENT): Atuação Regional e Retirada em Mãos */}
      <section className="w-full bg-canvas-parchment text-ink py-20 px-4 border-b border-hairline">
        <div className="max-w-[1024px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <span className="text-[13px] font-semibold uppercase tracking-wider text-primary">
              Multi-tenant Regional
            </span>
            <h2 className="text-[36px] sm:text-[44px] font-semibold text-ink tracking-apple-hero leading-tight">
              Feito para quem vende em sua região.
            </h2>
            <p className="text-[17px] text-ink-muted80 leading-relaxed">
              Muitos revendedores atuam em polos específicos — como Brasília, São Paulo ou Goiânia — onde a entrega em mãos e a retirada em locais seguros são o padrão.
            </p>
            <p className="text-[15px] text-ink-muted48 leading-relaxed">
              Cada loja tem seu diretório exclusivo (ex: <code className="text-ink font-semibold">/iphones-brasil</code>), destacando endereço de retirada, termos de garantia e canal direto para o WhatsApp.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/iphones-brasil"
                className="btn-apple-primary text-[14px] py-2 px-5 flex items-center gap-1.5"
              >
                <span>Explorar Vitrine de Brasília (DF)</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                href="/paulista-prime"
                className="btn-apple-secondary text-[14px] py-2 px-5"
              >
                <span>Explorar Vitrine de São Paulo (SP)</span>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-apple-card border border-hairline p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-hairline">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-ink text-[16px]">Exemplo de Exibição Regional</div>
                <div className="text-[12px] text-ink-muted48">Card com transparência para o comprador</div>
              </div>
            </div>

            <div className="space-y-2 text-[13px] text-ink-muted80">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span><strong>Cidade:</strong> Brasília - DF</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                <span><strong>Retirada:</strong> ParkShopping Brasília ou Asa Sul</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-ink"></span>
                <span><strong>Negociação:</strong> Direto no WhatsApp sem intermediários</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TILE 4 (WHITE): Catálogo Mestre Apple Completo */}
      <section id="catalogo-oficial" className="w-full bg-canvas text-ink py-20 px-4">
        <div className="max-w-[1200px] mx-auto space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-[13px] font-semibold uppercase tracking-wider text-primary">
              Mapeamento Completo
            </span>
            <h2 className="text-[36px] sm:text-[48px] font-semibold text-ink tracking-apple-hero leading-tight">
              O ecossistema Apple já está pronto.
            </h2>
            <p className="text-[17px] text-ink-muted48">
              Centenas de variações de modelos, cores oficiais, chips de silício da Apple e capacidades pré-configuradas.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {APPLE_MASTER_CATALOG.slice(0, 6).map((product) => (
              <div
                key={product.id}
                className="bg-canvas-parchment rounded-apple-card p-4 border border-hairline flex flex-col items-center text-center justify-between hover:border-primary/50 transition-all duration-200 group"
              >
                <div className="w-full h-32 flex items-center justify-center p-2 mb-2">
                  <img
                    src={product.defaultImage}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain apple-product-shadow group-hover:scale-105 transition-transform"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-ink text-[14px] leading-tight">
                    {product.name}
                  </h4>
                  <span className="text-[11px] text-ink-muted48">
                    {product.family} • {product.releaseYear}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              href="/dashboard/catalogo/novo"
              className="btn-apple-primary px-8 py-3 text-[16px] font-semibold"
            >
              Acessar Painel e Montar Catálogo Agora
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <AppleFooter />
    </div>
  );
}
