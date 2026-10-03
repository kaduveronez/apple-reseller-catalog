'use client';

import React from 'react';
import Link from 'next/link';
import { MessageCircle, MapPin, Sparkles, ChevronRight } from 'lucide-react';
import { ResellerItemWithProduct } from '@/types/catalog';
import { formatBRL, generateWhatsAppLink } from '@/lib/utils';
import { BatteryGauge } from './BatteryGauge';
import { ConditionBadge } from './ConditionBadge';

interface StoreUtilityCardProps {
  item: ResellerItemWithProduct;
  storeSlug: string;
}

export function StoreUtilityCard({ item, storeSlug }: StoreUtilityCardProps) {
  const { product, reseller } = item;
  const isPreOwned = item.condition === 'pre_owned';
  const hasCustomPhoto = Boolean(item.customPhotos && item.customPhotos.length > 0);

  // Se tiver foto real personalizada, prioriza a foto real; senão, usa a foto oficial da cor selecionada ou a padrão
  const matchedColor = product.colors.find(
    (c) => c.name.toLowerCase() === item.color.toLowerCase()
  );
  const displayImage = hasCustomPhoto
    ? item.customPhotos![0]
    : matchedColor?.imageUrl || product.defaultImage;

  const detailUrl = `/${storeSlug}/produto/${item.id}`;

  const waLink = reseller
    ? generateWhatsAppLink(
        reseller.whatsapp,
        product.name,
        item.condition,
        item.priceCash,
        reseller.name,
        item.batteryHealth
      )
    : '#';

  return (
    <div className="apple-card flex flex-col justify-between group hover:border-ink/30 transition-all duration-300 relative bg-white">
      {/* Top Header: Condition Badges & Battery Gauge */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <ConditionBadge
            condition={item.condition}
            grade={item.grade}
            hasCustomPhoto={hasCustomPhoto}
          />
          {isPreOwned && item.batteryHealth && (
            <BatteryGauge percentage={item.batteryHealth} size="sm" />
          )}
        </div>

        {/* Product Image Area */}
        <Link
          href={detailUrl}
          className="block relative w-full h-[220px] my-3 overflow-hidden rounded-xl bg-canvas-parchment/60 flex items-center justify-center p-3 group/img cursor-pointer"
        >
          {hasCustomPhoto ? (
            <div className="relative w-full h-full">
              <img
                src={displayImage}
                alt={`${product.name} real`}
                className="w-full h-full object-cover rounded-lg group-hover/img:scale-105 transition-transform duration-500"
              />
              <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-black/70 text-white backdrop-blur-sm flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-400" />
                Foto real do aparelho
              </span>
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <img
                src={displayImage}
                alt={product.name}
                className="max-h-[190px] max-w-[90%] object-contain apple-product-shadow group-hover/img:scale-105 transition-transform duration-500"
              />
            </div>
          )}
        </Link>

        {/* Product Specifications & Name */}
        <div className="space-y-1 mt-3">
          <div className="flex items-center gap-2 text-[12px] text-ink-muted48">
            <span className="font-medium text-ink/80">{item.storage}</span>
            <span>•</span>
            <span className="truncate">{item.color}</span>
            {matchedColor && (
              <span
                className="w-2.5 h-2.5 rounded-full border border-black/10 inline-block flex-shrink-0"
                style={{ backgroundColor: matchedColor.hex }}
                title={matchedColor.name}
              />
            )}
          </div>

          <Link href={detailUrl} className="block group-hover:text-primary transition-colors">
            <h3 className="text-[18px] font-semibold text-ink leading-snug">
              {product.name}
            </h3>
          </Link>

          {/* Regional Pickup Tag */}
          {reseller && (
            <div className="flex items-center gap-1 text-[12px] text-ink-muted48 pt-0.5">
              <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0" />
              <span className="font-medium text-ink">
                {reseller.city} - {reseller.state}
              </span>
              <span className="truncate text-ink-muted48 hidden sm:inline">
                (Retirada disponível)
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Pricing & CTA Buttons */}
      <div className="pt-4 mt-4 border-t border-hairline/60">
        <div className="mb-3">
          <div className="text-[20px] font-bold text-ink leading-tight tabular-nums">
            {formatBRL(item.priceCash)}
            <span className="text-[12px] font-normal text-ink-muted48 ml-1">à vista</span>
          </div>
          {item.priceInstallment && (
            <div className="text-[12px] text-ink-muted48">
              ou {item.maxInstallments || 12}x de{' '}
              <span className="font-medium text-ink">
                {formatBRL(item.priceInstallment / (item.maxInstallments || 12))}
              </span>
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Link
            href={detailUrl}
            className="w-full text-center py-2 px-3 rounded-full text-[13px] font-medium text-primary bg-primary/10 hover:bg-primary/15 transition-all active:scale-[0.95] flex items-center justify-center gap-1"
          >
            <span>Ver Detalhes</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center py-2 px-3 rounded-full text-[13px] font-medium text-white bg-[#25D366] hover:bg-[#20ba59] transition-all active:scale-[0.95] flex items-center justify-center gap-1.5 shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>Negociar</span>
          </a>
        </div>
      </div>
    </div>
  );
}
