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
    <div className="bg-canvas border border-hairline rounded-apple-card p-6 flex flex-col justify-between group hover:border-ink/20 transition-all duration-200">
      {/* Top: Condition & Battery */}
      <div>
        <div className="flex items-center justify-between gap-2 min-h-[26px]">
          <ConditionBadge
            condition={item.condition}
            grade={item.grade}
            hasCustomPhoto={hasCustomPhoto}
          />
          {isPreOwned && item.batteryHealth && (
            <BatteryGauge percentage={item.batteryHealth} size="sm" />
          )}
        </div>

        {/* Product Photography Area */}
        <Link
          href={detailUrl}
          className="block relative w-full h-[220px] my-4 overflow-hidden rounded-xl bg-canvas-parchment/40 flex items-center justify-center p-3 cursor-pointer"
        >
          {hasCustomPhoto ? (
            <div className="relative w-full h-full">
              <img
                src={displayImage}
                alt={`${product.name} foto real`}
                className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute bottom-2 left-2 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-black/75 text-white backdrop-blur-sm flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-400" />
                Foto real do aparelho
              </span>
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <img
                src={displayImage}
                alt={product.name}
                className="max-h-[190px] max-w-[85%] object-contain apple-product-shadow group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}
        </Link>

        {/* Specs & Name */}
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-[12px] text-ink-muted48">
            <span className="font-medium text-ink">{item.storage}</span>
            <span>•</span>
            <span className="truncate">{item.color}</span>
            {matchedColor && (
              <span
                className="w-2.5 h-2.5 rounded-full border border-black/15 inline-block flex-shrink-0"
                style={{ backgroundColor: matchedColor.hex }}
              />
            )}
          </div>

          <Link href={detailUrl} className="block group-hover:text-primary transition-colors">
            <h3 className="text-[19px] font-semibold text-ink leading-snug tracking-tight">
              {product.name}
            </h3>
          </Link>

          {/* Regional Pickup Tag */}
          {reseller && (
            <div className="flex items-center gap-1 text-[12px] text-ink-muted48 pt-1">
              <MapPin className="w-3 h-3 text-primary flex-shrink-0" />
              <span>{reseller.city}, {reseller.state}</span>
              <span className="text-[11px] text-ink-muted48/80 hidden sm:inline">• Retirada disponível</span>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Pricing & CTAs */}
      <div className="pt-4 mt-4 border-t border-hairline/60">
        <div className="mb-3">
          <div className="text-[20px] font-semibold text-ink leading-tight tabular-nums">
            {formatBRL(item.priceCash)}
            <span className="text-[12px] font-normal text-ink-muted48 ml-1.5">à vista</span>
          </div>
          {item.priceInstallment && (
            <div className="text-[12px] text-ink-muted48">
              ou {item.maxInstallments || 12}x de {formatBRL(item.priceInstallment / (item.maxInstallments || 12))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Link
            href={detailUrl}
            className="w-full text-center py-2 px-3 rounded-full text-[13px] font-medium text-primary bg-primary/10 hover:bg-primary/15 transition-all active:scale-[0.95] flex items-center justify-center gap-1"
          >
            <span>Ver detalhes</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center py-2 px-3 rounded-full text-[13px] font-medium text-white bg-[#25D366] hover:bg-[#20ba59] transition-all active:scale-[0.95] flex items-center justify-center gap-1.5 shadow-xs"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>Negociar</span>
          </a>
        </div>
      </div>
    </div>
  );
}
