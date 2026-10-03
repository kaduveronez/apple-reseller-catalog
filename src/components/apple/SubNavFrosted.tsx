'use client';

import React from 'react';
import Link from 'next/link';
import { Search, MapPin, MessageCircle, ShieldCheck } from 'lucide-react';
import { Reseller } from '@/types/catalog';
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

const CATEGORIES = [
  { id: 'all', label: 'Todos' },
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
  const waLink = reseller
    ? `https://wa.me/${reseller.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
        `Olá! Estou visitando o catálogo da ${reseller.name} e gostaria de tirar dúvidas sobre os produtos disponíveis.`
      )}`
    : '#';

  return (
    <div className="sticky top-[44px] z-40 w-full frosted-glass border-b border-hairline/80">
      <div className="max-w-[1024px] mx-auto px-4">
        {/* Main SubNav Bar (52px height) */}
        <div className="h-[52px] flex items-center justify-between gap-4">
          {/* Left: Store Name & Region Pill */}
          <div className="flex items-center gap-2.5 min-w-0">
            <Link
              href={reseller ? `/${reseller.slug}` : '/'}
              className="text-[19px] sm:text-[21px] font-semibold text-ink tracking-tight hover:opacity-80 transition-opacity truncate"
            >
              {reseller?.name || 'Catálogo Oficial'}
            </Link>

            {reseller && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-canvas border border-hairline text-ink-muted80 flex-shrink-0">
                <MapPin className="w-3 h-3 text-primary" />
                <span>{reseller.city}, {reseller.state}</span>
              </span>
            )}
          </div>

          {/* Right: WhatsApp CTA & Store Info */}
          <div className="flex items-center gap-3">
            {reseller && (
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-apple-primary text-[13px] py-1.5 px-4 shadow-none flex items-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span className="hidden sm:inline">WhatsApp</span>
                <span className="sm:hidden">Contato</span>
              </a>
            )}
          </div>
        </div>

        {/* Secondary Category & Filter Strip */}
        <div className="py-2.5 border-t border-hairline/50 flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Category Tabs */}
          <div className="flex items-center space-x-1 overflow-x-auto no-scrollbar py-0.5">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={cn(
                    'px-3.5 py-1 rounded-full text-[13px] font-normal transition-all duration-150 active:scale-[0.95] whitespace-nowrap',
                    isActive
                      ? 'bg-ink text-white font-medium shadow-xs'
                      : 'text-ink-muted80 hover:text-ink hover:bg-black/5'
                  )}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Condition Filter & Search */}
          <div className="flex items-center gap-2">
            {/* Condition Segmented Control */}
            <div className="inline-flex p-0.5 bg-black/5 rounded-full border border-hairline/80">
              <button
                onClick={() => onSelectCondition('all')}
                className={cn(
                  'px-3 py-1 rounded-full text-[12px] font-normal transition-all active:scale-[0.95]',
                  selectedCondition === 'all'
                    ? 'bg-white text-ink font-medium shadow-xs'
                    : 'text-ink-muted48 hover:text-ink'
                )}
              >
                Todos
              </button>
              <button
                onClick={() => onSelectCondition('new_sealed')}
                className={cn(
                  'px-3 py-1 rounded-full text-[12px] font-normal transition-all active:scale-[0.95]',
                  selectedCondition === 'new_sealed'
                    ? 'bg-white text-ink font-medium shadow-xs'
                    : 'text-ink-muted48 hover:text-ink'
                )}
              >
                Lacrados
              </button>
              <button
                onClick={() => onSelectCondition('pre_owned')}
                className={cn(
                  'px-3 py-1 rounded-full text-[12px] font-normal transition-all active:scale-[0.95]',
                  selectedCondition === 'pre_owned'
                    ? 'bg-white text-ink font-medium shadow-xs'
                    : 'text-ink-muted48 hover:text-ink'
                )}
              >
                Seminovos
              </button>
            </div>

            {/* Compact Search Input */}
            <div className="relative w-36 sm:w-44">
              <Search className="w-3.5 h-3.5 text-ink-muted48 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Buscar..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full h-7 pl-8 pr-2.5 text-[12px] bg-white border border-hairline rounded-full text-ink placeholder:text-ink-muted48 focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
