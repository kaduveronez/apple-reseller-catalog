'use client';

import React from 'react';
import Link from 'next/link';
import { Search, MapPin, MessageCircle, ShieldCheck } from 'lucide-react';
import { AppleCategory, ItemCondition, Reseller } from '@/types/catalog';
import { cn } from '@/lib/utils';

interface SubNavFrostedProps {
  reseller?: Reseller;
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  selectedCondition: string;
  onSelectCondition: (cond: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

const CATEGORIES: { id: string; label: string }[] = [
  { id: 'all', label: 'Todos os Produtos' },
  { id: 'iphone', label: 'iPhone' },
  { id: 'mac', label: 'Mac' },
  { id: 'ipad', label: 'iPad' },
  { id: 'watch', label: 'Watch' },
  { id: 'airpods', label: 'AirPods' },
  { id: 'accessories', label: 'Acessórios' },
];

export function SubNavFrosted({
  reseller,
  selectedCategory,
  onSelectCategory,
  selectedCondition,
  onSelectCondition,
  searchQuery,
  onSearchChange,
}: SubNavFrostedProps) {
  return (
    <div className="sticky top-[44px] z-40 w-full frosted-glass border-b border-hairline/70">
      <div className="max-w-[1200px] mx-auto px-4 py-2.5">
        {/* Top line: Store Brand & Regional Location Badge */}
        {reseller && (
          <div className="flex flex-wrap items-center justify-between gap-3 pb-2.5 border-b border-hairline/40">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full overflow-hidden bg-slate-200 border border-hairline flex-shrink-0">
                {reseller.logoUrl ? (
                  <img
                    src={reseller.logoUrl}
                    alt={reseller.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center font-bold text-xs bg-ink text-white">
                    {reseller.name.substring(0, 2).toUpperCase()}
                  </div>
                )}
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h1 className="text-[17px] font-semibold text-ink leading-tight">
                    {reseller.name}
                  </h1>
                  {reseller.isVerified && (
                    <span title="Revendedor Verificado">
                      <ShieldCheck className="w-4 h-4 text-primary" />
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-[13px] text-ink-muted48">
                  <span className="flex items-center gap-1 text-ink font-medium">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                    {reseller.city} - {reseller.state}
                  </span>
                  <span>•</span>
                  <span className="truncate max-w-[280px] sm:max-w-none">
                    {reseller.pickupAddress || 'Retirada em mãos ou envio com seguro'}
                  </span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Action for Store */}
            <div className="flex items-center gap-2">
              <a
                href={`https://wa.me/${reseller.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#25D366] text-white text-[13px] font-medium transition-all active:scale-[0.95] hover:opacity-95 shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>Falar no WhatsApp</span>
              </a>
            </div>
          </div>
        )}

        {/* Bottom line: Category Filter Pills, Condition Tabs & Search */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 pt-2">
          {/* Categories Horizontal Scroll */}
          <div className="flex items-center space-x-1.5 overflow-x-auto no-scrollbar py-0.5">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={cn(
                    'px-3.5 py-1.5 rounded-full text-[13px] font-medium whitespace-nowrap transition-all duration-150 active:scale-[0.95]',
                    isActive
                      ? 'bg-ink text-white shadow-sm'
                      : 'bg-white/80 text-ink hover:bg-white text-ink-muted80 border border-hairline/60'
                  )}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Condition Segmented Control & Search Input */}
          <div className="flex items-center gap-2.5 flex-wrap sm:flex-nowrap">
            {/* Segmented Control (Todos / Novos Lacrados / Seminovos) */}
            <div className="inline-flex p-1 bg-black/5 rounded-full border border-hairline/60">
              <button
                onClick={() => onSelectCondition('all')}
                className={cn(
                  'px-3 py-1 rounded-full text-[12px] font-medium transition-all active:scale-[0.95]',
                  selectedCondition === 'all'
                    ? 'bg-white text-ink shadow-sm'
                    : 'text-ink-muted80 hover:text-ink'
                )}
              >
                Todos
              </button>
              <button
                onClick={() => onSelectCondition('new_sealed')}
                className={cn(
                  'px-3 py-1 rounded-full text-[12px] font-medium transition-all active:scale-[0.95] flex items-center gap-1',
                  selectedCondition === 'new_sealed'
                    ? 'bg-white text-ink shadow-sm'
                    : 'text-ink-muted80 hover:text-ink'
                )}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Lacrados
              </button>
              <button
                onClick={() => onSelectCondition('pre_owned')}
                className={cn(
                  'px-3 py-1 rounded-full text-[12px] font-medium transition-all active:scale-[0.95] flex items-center gap-1',
                  selectedCondition === 'pre_owned'
                    ? 'bg-white text-ink shadow-sm'
                    : 'text-ink-muted80 hover:text-ink'
                )}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                Seminovos
              </button>
            </div>

            {/* Apple Pill Search Input */}
            <div className="relative flex-1 sm:w-48">
              <Search className="w-3.5 h-3.5 text-ink-muted48 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar modelo..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full h-8 pl-8 pr-3 text-[13px] bg-white border border-hairline rounded-full text-ink placeholder:text-ink-muted48 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
