'use client';

import React from 'react';
import Link from 'next/link';
import { AppleFooter } from '@/components/apple/AppleFooter';
import { ArrowRight, ChevronRight, Store, ShieldCheck, Sparkles, MapPin } from 'lucide-react';

export default function AppleCloneHomePage() {
  return (
    <div className="min-h-screen bg-canvas text-ink flex flex-col justify-between">
      {/* TILE 1 (LIGHT HERO): iPhone 16 Pro Max */}
      <section className="w-full bg-canvas text-ink pt-16 pb-12 px-4 text-center border-b border-hairline/60">
        <div className="max-w-4xl mx-auto space-y-3">
          <h1 className="text-[44px] sm:text-[56px] font-semibold text-ink tracking-apple-hero leading-[1.07]">
            iPhone 16 Pro
          </h1>

          <p className="text-[24px] sm:text-[28px] text-ink-muted48 font-normal leading-snug">
            Construído em titânio. Tão Pro.
          </p>

          <p className="text-[17px] text-ink-muted48 max-w-lg mx-auto">
            Plataforma oficial de catálogo para revendedores Apple. Novos lacrados e seminovos certificados.
          </p>

          {/* Action Pills */}
          <div className="flex items-center justify-center gap-3 pt-3">
            <Link
              href="/iphones-brasil"
              className="btn-apple-primary px-5 py-2 text-[15px]"
            >
              Ver Loja Demo (Brasília)
            </Link>

            <Link
              href="/dashboard/catalogo/novo"
              className="btn-apple-secondary px-5 py-2 text-[15px] flex items-center gap-1"
            >
              <span>Montar Catálogo</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Hero Photography with System Shadow */}
          <div className="pt-8 flex justify-center">
            <Link href="/iphones-brasil" className="group block">
              <img
                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-model-unselect-gallery-2-202409_GEO_EMEA?wid=5120&hei=2880&fmt=webp"
                alt="iPhone 16 Pro Titânio Deserto"
                className="max-h-[360px] sm:max-h-[420px] w-auto object-contain apple-product-shadow group-hover:scale-105 transition-transform duration-500"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* TILE 2 (DARK TILE - #272729): iPhone 16 */}
      <section className="w-full bg-surface-tile1 text-white pt-20 pb-16 px-4 text-center border-b border-white/10">
        <div className="max-w-4xl mx-auto space-y-3">
          <h2 className="text-[44px] sm:text-[56px] font-semibold text-white tracking-apple-hero leading-[1.07]">
            iPhone 16
          </h2>

          <p className="text-[24px] sm:text-[28px] text-body-muted font-normal leading-snug">
            Cheio de brilho. Controle da Câmera.
          </p>

          <p className="text-[17px] text-white/70 max-w-lg mx-auto">
            Todas as cores e armazenamentos de fábrica pré-mapeados para sua revenda.
          </p>

          {/* Action Pills */}
          <div className="flex items-center justify-center gap-3 pt-3">
            <Link
              href="/iphones-brasil?cat=iphone"
              className="btn-apple-primary px-5 py-2 text-[15px]"
            >
              Explorar iPhones
            </Link>

            <Link
              href="/paulista-prime"
              className="inline-flex items-center justify-center font-normal text-[15px] leading-tight text-white border border-white/30 hover:border-white rounded-full px-5 py-2 transition-all active:scale-[0.95]"
            >
              Ver Loja (São Paulo)
            </Link>
          </div>

          {/* Hero Photography with System Shadow */}
          <div className="pt-8 flex justify-center">
            <Link href="/iphones-brasil?cat=iphone" className="group block">
              <img
                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-ultramarine?wid=1000&hei=1000&fmt=png-alpha"
                alt="iPhone 16 Ultramarino"
                className="max-h-[340px] w-auto object-contain apple-product-shadow group-hover:scale-105 transition-transform duration-500"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* TILE 3 (2x2 APPLE HOMEPAGE GRID): MacBook Pro, Apple Watch, iPad Pro, AirPods */}
      <section className="w-full bg-canvas py-8 px-4">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Card A: MacBook Pro M4 (Dark Tile 2) */}
          <div className="bg-surface-tile2 text-white rounded-apple-card p-10 flex flex-col items-center text-center justify-between min-h-[460px] overflow-hidden group">
            <div className="space-y-2">
              <h3 className="text-[34px] sm:text-[40px] font-semibold text-white tracking-apple-hero leading-tight">
                MacBook Pro
              </h3>
              <p className="text-[19px] text-body-muted">
                Uma força sobrenatural. Com Chip M4.
              </p>
              <div className="flex items-center justify-center gap-3 pt-2">
                <Link
                  href="/iphones-brasil?cat=mac"
                  className="btn-apple-primary text-[13px] py-1.5 px-4"
                >
                  Ver no Catálogo
                </Link>
                <Link
                  href="/dashboard/catalogo/novo"
                  className="text-primary-on-dark hover:underline text-[14px] flex items-center gap-1"
                >
                  <span>Cadastrar Mac</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="pt-6 w-full flex justify-center">
              <img
                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spaceblack-select-202410?wid=1000&hei=1000&fmt=png-alpha"
                alt="MacBook Pro M4"
                className="max-h-[220px] w-auto object-contain apple-product-shadow group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Card B: Apple Watch Series 10 (Light Parchment) */}
          <div className="bg-canvas-parchment text-ink rounded-apple-card p-10 flex flex-col items-center text-center justify-between min-h-[460px] overflow-hidden border border-hairline/80 group">
            <div className="space-y-2">
              <h3 className="text-[34px] sm:text-[40px] font-semibold text-ink tracking-apple-hero leading-tight">
                Apple Watch Series 10
              </h3>
              <p className="text-[19px] text-ink-muted48">
                O mais fino de sempre. Com a maior tela.
              </p>
              <div className="flex items-center justify-center gap-3 pt-2">
                <Link
                  href="/iphones-brasil?cat=watch"
                  className="btn-apple-primary text-[13px] py-1.5 px-4"
                >
                  Ver no Catálogo
                </Link>
                <Link
                  href="/dashboard/catalogo/novo"
                  className="text-primary hover:underline text-[14px] flex items-center gap-1"
                >
                  <span>Cadastrar Watch</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="pt-6 w-full flex justify-center">
              <img
                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/s10-case-unselect-gallery-1-202409?wid=1000&hei=1000&fmt=png-alpha"
                alt="Apple Watch Series 10"
                className="max-h-[220px] w-auto object-contain apple-product-shadow group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Card C: iPad Pro M4 (Parchment) */}
          <div className="bg-canvas-parchment text-ink rounded-apple-card p-10 flex flex-col items-center text-center justify-between min-h-[460px] overflow-hidden border border-hairline/80 group">
            <div className="space-y-2">
              <h3 className="text-[34px] sm:text-[40px] font-semibold text-ink tracking-apple-hero leading-tight">
                iPad Pro
              </h3>
              <p className="text-[19px] text-ink-muted48">
                Ultrafino. Tela Ultra Retina XDR OLED.
              </p>
              <div className="flex items-center justify-center gap-3 pt-2">
                <Link
                  href="/iphones-brasil?cat=ipad"
                  className="btn-apple-primary text-[13px] py-1.5 px-4"
                >
                  Ver no Catálogo
                </Link>
                <Link
                  href="/dashboard/catalogo/novo"
                  className="text-primary hover:underline text-[14px] flex items-center gap-1"
                >
                  <span>Cadastrar iPad</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="pt-6 w-full flex justify-center">
              <img
                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-finish-unselect-gallery-1-202405?wid=1000&hei=1000&fmt=png-alpha"
                alt="iPad Pro M4"
                className="max-h-[220px] w-auto object-contain apple-product-shadow group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Card D: AirPods Pro 2 (Pure White) */}
          <div className="bg-canvas text-ink rounded-apple-card p-10 flex flex-col items-center text-center justify-between min-h-[460px] overflow-hidden border border-hairline/80 group">
            <div className="space-y-2">
              <h3 className="text-[34px] sm:text-[40px] font-semibold text-ink tracking-apple-hero leading-tight">
                AirPods Pro (2ª geração)
              </h3>
              <p className="text-[19px] text-ink-muted48">
                Cancelamento Ativo de Ruído até 2x superior.
              </p>
              <div className="flex items-center justify-center gap-3 pt-2">
                <Link
                  href="/iphones-brasil?cat=airpods"
                  className="btn-apple-primary text-[13px] py-1.5 px-4"
                >
                  Ver no Catálogo
                </Link>
                <Link
                  href="/dashboard/catalogo/novo"
                  className="text-primary hover:underline text-[14px] flex items-center gap-1"
                >
                  <span>Cadastrar AirPods</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="pt-6 w-full flex justify-center">
              <img
                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-pro-2-hero-select-202409?wid=1000&hei=1000&fmt=png-alpha"
                alt="AirPods Pro 2"
                className="max-h-[200px] w-auto object-contain apple-product-shadow group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TILE 4 (SAAS REGIONAL VALUE PROP): Como Funciona para o Revendedor */}
      <section className="w-full bg-canvas-parchment text-ink py-20 px-4 border-t border-hairline">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-[13px] font-semibold uppercase tracking-wider text-primary">
            SaaS para Lojistas e Revendedores
          </span>

          <h2 className="text-[36px] sm:text-[48px] font-semibold text-ink tracking-apple-hero leading-tight">
            Monte sua vitrine oficial em minutos.
          </h2>

          <p className="text-[17px] text-ink-muted80 max-w-2xl mx-auto leading-relaxed">
            Dê aos seus clientes a experiência de compra do site da Apple, com a transparência e agilidade que o mercado de revenda exige.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 text-left">
            <div className="bg-white p-6 rounded-apple-card border border-hairline/80 space-y-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                1
              </div>
              <h4 className="font-semibold text-ink text-[17px]">Catálogo Mestre Pronto</h4>
              <p className="text-[13px] text-ink-muted48 leading-relaxed">
                Todos os modelos e variações de fábrica já pré-cadastrados com fotos oficiais.
              </p>
            </div>

            <div className="bg-white p-6 rounded-apple-card border border-hairline/80 space-y-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                2
              </div>
              <h4 className="font-semibold text-ink text-[17px]">Lacrados ou Seminovos</h4>
              <p className="text-[13px] text-ink-muted48 leading-relaxed">
                Cadastre a saúde da bateria, observações e fotos reais que aparecem logo de cara no card.
              </p>
            </div>

            <div className="bg-white p-6 rounded-apple-card border border-hairline/80 space-y-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                3
              </div>
              <h4 className="font-semibold text-ink text-[17px]">Foco na Sua Região</h4>
              <p className="text-[13px] text-ink-muted48 leading-relaxed">
                Destaque sua cidade e ponto de retirada para clientes negociarem direto no WhatsApp.
              </p>
            </div>
          </div>

          <div className="pt-6">
            <Link
              href="/dashboard/catalogo/novo"
              className="btn-apple-primary px-8 py-3 text-[17px] font-semibold"
            >
              Começar Agora Gratuitamente
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <AppleFooter />
    </div>
  );
}
