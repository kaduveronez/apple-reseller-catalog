'use client';

import React, { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getResellerBySlug, getResellerItemById } from '@/lib/store-service';
import { RealPhotoGallery } from '@/components/apple/RealPhotoGallery';
import { BatteryGauge } from '@/components/apple/BatteryGauge';
import { ConditionBadge } from '@/components/apple/ConditionBadge';
import { TechSpecsAccordion } from '@/components/apple/TechSpecsAccordion';
import { FloatingBottomBar } from '@/components/apple/FloatingBottomBar';
import { AppleFooter } from '@/components/apple/AppleFooter';
import {
  ChevronLeft,
  MessageCircle,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  Box,
  HelpCircle,
  Sparkles,
} from 'lucide-react';
import { formatBRL, generateWhatsAppLink } from '@/lib/utils';

interface ProductDetailPageProps {
  params: Promise<{
    slug: string;
    itemId: string;
  }>;
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const resolvedParams = use(params);
  const { slug, itemId } = resolvedParams;

  const reseller = getResellerBySlug(slug);
  const item = getResellerItemById(itemId);

  if (!reseller || !item) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-[28px] font-semibold text-ink">Produto não encontrado</h1>
        <p className="text-ink-muted48 mt-2 text-[15px]">
          Este item pode ter sido vendido ou removido do catálogo.
        </p>
        <Link href={`/${slug}`} className="btn-apple-primary mt-6">
          Voltar ao Catálogo da Loja
        </Link>
      </div>
    );
  }

  const { product } = item;
  const isPreOwned = item.condition === 'pre_owned';

  // Imagens a serem exibidas na galeria
  const matchedColor = product.colors.find(
    (c) => c.name.toLowerCase() === item.color.toLowerCase()
  );

  const galleryPhotos =
    isPreOwned && item.customPhotos && item.customPhotos.length > 0
      ? item.customPhotos
      : [matchedColor?.imageUrl || product.defaultImage, ...(product.heroImage ? [product.heroImage] : [])];

  const waLink = generateWhatsAppLink(
    reseller.whatsapp,
    product.name,
    item.condition,
    item.priceCash,
    reseller.name,
    item.batteryHealth
  );

  return (
    <div className="min-h-screen flex flex-col justify-between bg-canvas pb-20">
      {/* Barra de Navegação de Retorno */}
      <div className="bg-canvas-parchment/60 border-b border-hairline py-3 px-4">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between text-[13px]">
          <Link
            href={`/${slug}`}
            className="inline-flex items-center gap-1 text-primary hover:underline font-medium"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Voltar ao catálogo de {reseller.name}</span>
          </Link>

          <div className="hidden sm:flex items-center gap-1.5 text-ink-muted48">
            <span>{reseller.name}</span>
            <span>/</span>
            <span>{product.category.toUpperCase()}</span>
            <span>/</span>
            <span className="text-ink font-medium truncate max-w-[200px]">
              {product.name}
            </span>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal do Produto */}
      <div className="max-w-[1200px] mx-auto px-4 py-8 w-full flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Coluna Esquerda: Galeria de Fotos */}
          <div className="lg:col-span-6">
            <RealPhotoGallery
              photos={galleryPhotos}
              productName={product.name}
              isPreOwned={isPreOwned}
            />

            {/* Aviso de Transparência sobre as fotos */}
            <div className="mt-4 p-4 rounded-xl bg-canvas-parchment text-[13px] text-ink-muted80 flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-ink">
                  {isPreOwned
                    ? 'Fotos reais fotografadas pelo revendedor'
                    : 'Produto 100% novo na caixa lacrada de fábrica'}
                </span>
                <p className="text-ink-muted48 text-[12px] mt-0.5">
                  {isPreOwned
                    ? 'Você visualiza fotos da unidade física exata que irá receber, com todas as características e condições preservadas.'
                    : 'Garantia oficial mundial de 1 ano concedida pela Apple a partir da primeira ativação.'}
                </p>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Informações, Condição, Preço e Ações */}
          <div className="lg:col-span-6 space-y-6">
            {/* Badges de Condição e Bateria */}
            <div className="flex items-center gap-3 flex-wrap">
              <ConditionBadge
                condition={item.condition}
                grade={item.grade}
                hasCustomPhoto={Boolean(item.customPhotos && item.customPhotos.length > 0)}
              />
              {isPreOwned && item.batteryHealth && (
                <BatteryGauge percentage={item.batteryHealth} size="md" />
              )}
            </div>

            {/* Título e Tagline */}
            <div>
              <h1 className="text-[32px] sm:text-[38px] font-semibold text-ink tracking-apple-tight leading-tight">
                {product.name}
              </h1>
              <p className="text-[17px] text-ink-muted48 mt-1 font-light">
                {product.tagline}
              </p>
            </div>

            {/* Especificações Rápidas Selecionadas (Cor e Armazenamento) */}
            <div className="flex items-center gap-3 py-2 border-y border-hairline">
              <div className="flex items-center gap-2">
                <span className="text-[13px] text-ink-muted48 font-medium">Cor:</span>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-canvas-parchment text-ink text-[13px] font-medium border border-hairline">
                  {matchedColor && (
                    <span
                      className="w-3 h-3 rounded-full border border-black/10 inline-block"
                      style={{ backgroundColor: matchedColor.hex }}
                    />
                  )}
                  <span>{item.color}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[13px] text-ink-muted48 font-medium">Capacidade:</span>
                <span className="px-3 py-1 rounded-full bg-canvas-parchment text-ink text-[13px] font-medium border border-hairline">
                  {item.storage}
                </span>
              </div>
            </div>

            {/* Bloco de Preço */}
            <div className="p-5 rounded-apple-card bg-canvas-parchment border border-hairline space-y-1">
              <div className="text-[13px] font-medium text-ink-muted48 uppercase tracking-wider">
                Preço no catálogo do revendedor
              </div>
              <div className="text-[32px] font-bold text-ink tracking-tight tabular-nums leading-none pt-1">
                {formatBRL(item.priceCash)}
                <span className="text-[15px] font-normal text-ink-muted48 ml-2">à vista</span>
              </div>
              {item.priceInstallment && (
                <div className="text-[14px] text-ink-muted80 pt-1">
                  ou até {item.maxInstallments || 12}x de{' '}
                  <strong className="text-ink font-semibold">
                    {formatBRL(item.priceInstallment / (item.maxInstallments || 12))}
                  </strong>{' '}
                  no cartão de crédito
                </div>
              )}
            </div>

            {/* Card Exclusivo de Seminovo (Saúde da Bateria, Condição e Observações) */}
            {isPreOwned && (
              <div className="p-5 rounded-apple-card border border-hairline space-y-4 bg-white">
                <div className="text-[14px] font-semibold text-ink flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span>Relatório de Condições da Peça</span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-[13px]">
                  <div className="p-3 rounded-xl bg-canvas-parchment">
                    <span className="text-ink-muted48 block text-[11px] uppercase font-semibold">
                      Saúde da Bateria
                    </span>
                    <span className="text-[16px] font-bold text-emerald-600">
                      {item.batteryHealth || 90}% Original
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-canvas-parchment">
                    <span className="text-ink-muted48 block text-[11px] uppercase font-semibold">
                      Classificação Estética
                    </span>
                    <span className="text-[16px] font-bold text-ink">
                      {item.grade === 'excellent' ? 'Grade A+ (Excelente)' : 'Muito Bom'}
                    </span>
                  </div>
                </div>

                {item.customDescription && (
                  <div className="text-[14px] text-ink-muted80 bg-canvas-parchment/60 p-3 rounded-xl border border-hairline/60">
                    <span className="font-semibold text-ink block mb-0.5 text-[12px] uppercase">
                      Observações do Revendedor:
                    </span>
                    <p className="leading-relaxed">{item.customDescription}</p>
                  </div>
                )}

                {/* Itens Inclusos */}
                {item.includedItems && item.includedItems.length > 0 && (
                  <div>
                    <span className="font-semibold text-ink block mb-2 text-[12px] uppercase">
                      Itens Inclusos com este Aparelho:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {item.includedItems.map((inc, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[12px] font-medium bg-canvas-parchment text-ink border border-hairline"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>{inc}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Garantia */}
                <div className="text-[13px] text-ink-muted80 pt-2 border-t border-hairline flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>
                    <strong>Garantia:</strong> {item.warranty}
                  </span>
                </div>
              </div>
            )}

            {/* Informações da Loja e Retirada Regional */}
            <div className="p-5 rounded-apple-card border border-hairline space-y-3 bg-white">
              <div className="text-[14px] font-semibold text-ink flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Atendimento & Retirada em {reseller.city} - {reseller.state}</span>
              </div>
              <div className="text-[13px] text-ink-muted80 space-y-1.5">
                <p>
                  <strong>Local para retirada:</strong> {reseller.pickupAddress}
                </p>
                {reseller.deliveryPolicy && (
                  <p>
                    <strong>Política de envio:</strong> {reseller.deliveryPolicy}
                  </p>
                )}
              </div>
            </div>

            {/* Botão de Contato Principal WhatsApp */}
            <div className="space-y-2 pt-2">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-full text-white text-[16px] font-semibold bg-[#25D366] hover:bg-[#20ba59] transition-all duration-150 active:scale-[0.95] flex items-center justify-center gap-2 shadow-md"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Falar com o Revendedor no WhatsApp</span>
              </a>
              <p className="text-[12px] text-center text-ink-muted48">
                Ao clicar, você será direcionado para negociar diretamente com {reseller.name}.
              </p>
            </div>
          </div>
        </div>

        {/* Ficha Técnica Apple Accordion */}
        <div className="mt-16">
          <TechSpecsAccordion specs={product.specs} productName={product.name} />
        </div>
      </div>

      {/* Barra Adesiva Flutuante no Rodapé para Conversão Rápida */}
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
