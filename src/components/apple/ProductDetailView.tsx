'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { RealPhotoGallery } from './RealPhotoGallery';
import { BatteryGauge } from './BatteryGauge';
import { ConditionBadge } from './ConditionBadge';
import { TechSpecsAccordion } from './TechSpecsAccordion';
import { FloatingBottomBar } from './FloatingBottomBar';
import { AppleFooter } from './AppleFooter';
import { Reseller, ResellerItemWithProduct } from '@/types/catalog';
import { formatBRL, generateWhatsAppLink } from '@/lib/utils';
import {
  ChevronLeft,
  MessageCircle,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Award,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductDetailViewProps {
  reseller: Reseller;
  item: ResellerItemWithProduct;
}

export function ProductDetailView({ reseller, item }: ProductDetailViewProps) {
  const { product } = item;
  const isPreOwned = item.condition === 'pre_owned';

  // State for interactive configurator feel
  const [selectedColor, setSelectedColor] = useState<string>(item.color);
  const [selectedStorage, setSelectedStorage] = useState<string>(item.storage);

  const matchedColor =
    product.colors.find((c) => c.name.toLowerCase() === selectedColor.toLowerCase()) ||
    product.colors[0];

  // Gallery images: if pre-owned with custom photos, prioritize real photos
  const galleryPhotos =
    isPreOwned && item.customPhotos && item.customPhotos.length > 0
      ? item.customPhotos
      : [
          matchedColor?.imageUrl || product.defaultImage,
          ...(product.heroImage ? [product.heroImage] : []),
        ];

  const waLink = generateWhatsAppLink(
    reseller.whatsapp,
    `${product.name} ${selectedStorage} ${selectedColor}`,
    item.condition,
    item.priceCash,
    reseller.name,
    item.batteryHealth
  );

  return (
    <div className="min-h-screen bg-canvas flex flex-col justify-between pb-24">
      {/* Sub Header com Breadcrumb Apple */}
      <div className="bg-canvas-parchment/70 border-b border-hairline/80 py-3 px-4">
        <div className="max-w-[1024px] mx-auto flex items-center justify-between text-[13px]">
          <Link
            href={`/${reseller.slug}`}
            className="inline-flex items-center gap-1 text-primary hover:underline font-medium"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Voltar ao catálogo de {reseller.name}</span>
          </Link>

          <div className="hidden sm:flex items-center gap-2 text-ink-muted48 text-[12px]">
            <span>{reseller.name}</span>
            <span>/</span>
            <span>{product.category.toUpperCase()}</span>
            <span>/</span>
            <span className="text-ink font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Main Buy View (Apple Style) */}
      <div className="max-w-[1024px] mx-auto px-4 py-10 w-full flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Photography Gallery */}
          <div className="lg:col-span-6 lg:sticky lg:top-24 self-start space-y-4">
            <RealPhotoGallery
              photos={galleryPhotos}
              productName={product.name}
              isPreOwned={isPreOwned}
            />

            {/* Note on Authenticity */}
            <div className="p-4 rounded-xl bg-canvas-parchment border border-hairline text-[13px] text-ink-muted80 flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-ink">
                  {isPreOwned
                    ? 'Unidade Física com Fotos Reais'
                    : 'Produto 100% Novo e Lacrado na Caixa'}
                </span>
                <p className="text-ink-muted48 text-[12px] mt-0.5">
                  {isPreOwned
                    ? 'Fotos reais fotografadas pelo revendedor. O aparelho está exatamente nas condições demonstradas.'
                    : 'Garantia mundial de 1 ano válida a partir do momento da primeira ativação junto à Apple.'}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Apple Configurator Form */}
          <div className="lg:col-span-6 space-y-8">
            {/* Header: Title & Tagline */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <ConditionBadge
                  condition={item.condition}
                  grade={item.grade}
                  hasCustomPhoto={Boolean(item.customPhotos && item.customPhotos.length > 0)}
                />
                {isPreOwned && item.batteryHealth && (
                  <BatteryGauge percentage={item.batteryHealth} size="sm" />
                )}
              </div>

              <h1 className="text-[34px] sm:text-[40px] font-semibold text-ink tracking-apple-hero leading-tight">
                {product.name}
              </h1>
              <p className="text-[17px] text-ink-muted48 mt-1 font-light">
                {product.tagline}
              </p>
            </div>

            {/* Price Box */}
            <div className="p-5 rounded-apple-card bg-canvas-parchment border border-hairline space-y-1">
              <div className="text-[12px] font-semibold uppercase tracking-wider text-ink-muted48">
                Valor no Catálogo
              </div>
              <div className="text-[34px] font-bold text-ink tabular-nums leading-none pt-1">
                {formatBRL(item.priceCash)}
                <span className="text-[15px] font-normal text-ink-muted48 ml-2">à vista</span>
              </div>
              {item.priceInstallment && (
                <div className="text-[13px] text-ink-muted80 pt-1">
                  ou até {item.maxInstallments || 12}x de{' '}
                  <strong className="text-ink font-semibold">
                    {formatBRL(item.priceInstallment / (item.maxInstallments || 12))}
                  </strong>{' '}
                  no cartão de crédito
                </div>
              )}
            </div>

            {/* Configurator Section 1: Color Selection */}
            <div className="space-y-3">
              <div className="text-[14px] font-semibold text-ink">
                Acabamento / Cor:{' '}
                <span className="font-normal text-primary">{selectedColor}</span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {product.colors.map((color) => {
                  const isSelected = selectedColor === color.name;
                  return (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={cn(
                        'flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-[13px] transition-all active:scale-[0.95]',
                        isSelected
                          ? 'border-primary ring-2 ring-primary/20 bg-primary/5 font-medium text-ink'
                          : 'border-hairline bg-white hover:border-ink/30 text-ink-muted80'
                      )}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-black/15 flex-shrink-0"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span>{color.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Configurator Section 2: Storage Selection */}
            <div className="space-y-3">
              <div className="text-[14px] font-semibold text-ink">
                Capacidade de Armazenamento:{' '}
                <span className="font-normal text-primary">{selectedStorage}</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {product.storageOptions.map((storage) => {
                  const isSelected = selectedStorage === storage;
                  return (
                    <button
                      key={storage}
                      onClick={() => setSelectedStorage(storage)}
                      className={cn(
                        'p-3 rounded-apple-card border text-center transition-all active:scale-[0.95]',
                        isSelected
                          ? 'border-primary ring-2 ring-primary/20 bg-primary/5 text-ink font-semibold'
                          : 'border-hairline bg-white hover:border-ink/30 text-ink-muted80 font-normal'
                      )}
                    >
                      <span className="text-[15px]">{storage}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Pre-Owned Specific Inspection Report */}
            {isPreOwned && (
              <div className="p-5 rounded-apple-card border border-hairline bg-white space-y-4 shadow-xs">
                <div className="flex items-center justify-between pb-3 border-b border-hairline/60">
                  <div className="text-[14px] font-semibold text-ink flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                    <span>Relatório de Condições da Peça</span>
                  </div>
                  {item.batteryHealth && (
                    <BatteryGauge percentage={item.batteryHealth} size="sm" />
                  )}
                </div>

                <div className="grid grid-cols-2 gap-3 text-[13px]">
                  <div className="p-3 rounded-xl bg-canvas-parchment">
                    <span className="text-ink-muted48 block text-[11px] uppercase font-semibold">
                      Estado Estético
                    </span>
                    <span className="text-[15px] font-bold text-ink">
                      {item.grade === 'excellent' ? 'Grade A+ (Impecável)' : 'Muito Bom'}
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-canvas-parchment">
                    <span className="text-ink-muted48 block text-[11px] uppercase font-semibold">
                      Garantia
                    </span>
                    <span className="text-[14px] font-semibold text-emerald-700">
                      {item.warranty}
                    </span>
                  </div>
                </div>

                {item.customDescription && (
                  <div className="text-[13px] text-ink-muted80 bg-canvas-parchment/60 p-3 rounded-xl border border-hairline/60">
                    <strong className="text-ink block mb-0.5 text-[11px] uppercase">
                      Observações do Lojista:
                    </strong>
                    <p className="leading-relaxed">{item.customDescription}</p>
                  </div>
                )}

                {item.includedItems && item.includedItems.length > 0 && (
                  <div>
                    <span className="font-semibold text-ink block mb-2 text-[11px] uppercase text-ink-muted48">
                      Itens Inclusos na Embalagem:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {item.includedItems.map((inc, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[12px] font-medium bg-canvas-parchment text-ink border border-hairline"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>{inc}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Regional Pickup & Store Location */}
            <div className="p-5 rounded-apple-card border border-hairline bg-white space-y-2 text-[13px]">
              <div className="text-[14px] font-semibold text-ink flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Atendimento & Retirada em {reseller.city}, {reseller.state}</span>
              </div>
              <p className="text-ink-muted80">
                <strong>Local de Retirada:</strong> {reseller.pickupAddress}
              </p>
              {reseller.deliveryPolicy && (
                <p className="text-ink-muted48 text-[12px]">
                  <strong>Envios:</strong> {reseller.deliveryPolicy}
                </p>
              )}
            </div>

            {/* WhatsApp Main Button */}
            <div className="space-y-2 pt-2">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-full text-white text-[16px] font-semibold bg-[#25D366] hover:bg-[#20ba59] transition-all duration-150 active:scale-[0.95] flex items-center justify-center gap-2.5 shadow-md"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Negociar com {reseller.name} no WhatsApp</span>
              </a>
              <p className="text-[12px] text-center text-ink-muted48">
                Fale diretamente com o revendedor para combinar pagamento, retirada ou envio.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Specs Accordion */}
        <div className="mt-16">
          <TechSpecsAccordion specs={product.specs} productName={product.name} />
        </div>
      </div>

      {/* Floating Bottom Sticky Bar */}
      <FloatingBottomBar
        productName={product.name}
        priceCash={item.priceCash}
        condition={item.condition}
        batteryHealth={item.batteryHealth}
        whatsappLink={waLink}
        storeName={reseller.name}
        city={reseller.city}
        state={reseller.state}
      />

      {/* Footer */}
      <AppleFooter />
    </div>
  );
}
