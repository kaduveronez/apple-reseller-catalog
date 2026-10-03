'use client';

import React from 'react';
import { MessageCircle, MapPin } from 'lucide-react';
import { formatBRL } from '@/lib/utils';

interface FloatingBottomBarProps {
  productName: string;
  priceCash: number;
  condition: string;
  batteryHealth?: number;
  whatsappLink: string;
  storeName: string;
  city?: string;
  state?: string;
}

export function FloatingBottomBar({
  productName,
  priceCash,
  condition,
  batteryHealth,
  whatsappLink,
  storeName,
  city,
  state,
}: FloatingBottomBarProps) {
  const isPreOwned = condition === 'pre_owned';

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 frosted-glass border-t border-hairline/70 shadow-lg py-3 px-4">
      <div className="max-w-[1024px] mx-auto flex items-center justify-between gap-4">
        {/* Left: Product & Price Info */}
        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-ink text-[16px] truncate max-w-[200px] sm:max-w-none">
              {productName}
            </span>
            <span className="text-[12px] px-2 py-0.5 rounded-full bg-black/5 text-ink-muted80 font-medium">
              {isPreOwned
                ? `Seminovo ${batteryHealth ? `• ${batteryHealth}%` : ''}`
                : 'Lacrado'}
            </span>
          </div>

          <div className="flex items-center gap-2 mt-0.5">
            <div className="text-[18px] sm:text-[20px] font-bold text-ink tabular-nums leading-tight">
              {formatBRL(priceCash)}
              <span className="text-[12px] font-normal text-ink-muted48 ml-1">à vista</span>
            </div>

            {city && state && (
              <span className="text-[12px] text-ink-muted48 hidden md:flex items-center gap-1">
                <MapPin className="w-3 h-3 text-primary" />
                {city} - {state}
              </span>
            )}
          </div>
        </div>

        {/* Right: WhatsApp Conversion Button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-[15px] font-semibold bg-[#25D366] hover:bg-[#20ba59] transition-all duration-150 active:scale-[0.95] shadow-md flex-shrink-0"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="hidden sm:inline">Negociar no WhatsApp</span>
          <span className="sm:hidden">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
