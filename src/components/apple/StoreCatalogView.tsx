'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { SubNavFrosted } from './SubNavFrosted';
import { StoreUtilityCard } from './StoreUtilityCard';
import { AppleFooter } from './AppleFooter';
import { Reseller, ResellerItemWithProduct } from '@/types/catalog';
import { formatBRL, generateWhatsAppLink } from '@/lib/utils';
import { MapPin, MessageCircle, ChevronRight, Sparkles, Filter } from 'lucide-react';

interface StoreCatalogViewProps {
  reseller: Reseller;
  initialItems: ResellerItemWithProduct[];
}

export function StoreCatalogView({ reseller, initialItems }: StoreCatalogViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedCondition, setSelectedCondition] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Featured flagship item (e.g. iPhone 16 Pro Max or first item)
  const featuredItem = initialItems.find((i) => i.featured) || initialItems[0];

  // Filtering
  const filteredItems = useMemo(() => {
    return initialItems.filter((item) => {
      if (selectedCategory !== 'all' && item.product.category !== selectedCategory) {
        return false;
      }
      if (selectedCondition !== 'all' && item.condition !== selectedCondition) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = item.product.name.toLowerCase().includes(q);
        const matchesColor = item.color.toLowerCase().includes(q);
        const matchesStorage = item.storage.toLowerCase().includes(q);
        if (!matchesName && !matchesColor && !matchesStorage) return false;
      }
      return true;
    });
  }, [initialItems, selectedCategory, selectedCondition, searchQuery]);

  const featuredWaLink = featuredItem
    ? generateWhatsAppLink(
        reseller.whatsapp,
        featuredItem.product.name,
        featuredItem.condition,
        featuredItem.priceCash,
        reseller.name,
        featuredItem.batteryHealth
      )
    : '#';

  return (
    <div className="min-h-screen bg-canvas flex flex-col justify-between">
      {/* Frosted Glass Sticky Sub-Nav */}
      <SubNavFrosted
        reseller={reseller}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        selectedCondition={selectedCondition}
        onSelectCondition={setSelectedCondition}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Hero Showcase (Museum Gallery Style Tile) */}
      {featuredItem && selectedCategory === 'all' && !searchQuery && (
        <section className="w-full bg-canvas text-ink py-16 px-4 text-center border-b border-hairline/60 overflow-hidden">
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-semibold bg-canvas-parchment border border-hairline text-ink">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              <span>Destaque em {reseller.city}, {reseller.state}</span>
            </div>

            <h2 className="text-[44px] sm:text-[56px] font-semibold text-ink tracking-apple-hero leading-[1.08]">
              {featuredItem.product.name}
            </h2>

            <p className="text-[21px] sm:text-[24px] text-ink-muted48 max-w-xl mx-auto font-light leading-snug">
              {featuredItem.product.tagline}
            </p>

            <div className="pt-1 text-[17px] font-medium text-ink">
              {featuredItem.condition === 'new_sealed' ? (
                <span className="text-emerald-700">Novo Lacrado de Fábrica</span>
              ) : (
                <span className="text-primary">
                  Seminovo Impecável • Saúde da Bateria: {featuredItem.batteryHealth}%
                </span>
              )}{' '}
              por{' '}
              <strong className="text-[20px] font-bold text-ink">
                {formatBRL(featuredItem.priceCash)}
              </strong>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
              <Link
                href={`/${reseller.slug}/produto/${featuredItem.id}`}
                className="btn-apple-primary px-6 py-2.5 text-[15px]"
              >
                Ver Detalhes do Aparelho
              </Link>

              <a
                href={featuredWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-apple-secondary px-6 py-2.5 text-[15px] flex items-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Negociar via WhatsApp</span>
              </a>
            </div>

            {/* Imagem Hero com Sombra Apple */}
            <div className="pt-8 flex justify-center">
              <Link href={`/${reseller.slug}/produto/${featuredItem.id}`}>
                <img
                  src={
                    featuredItem.customPhotos && featuredItem.customPhotos.length > 0
                      ? featuredItem.customPhotos[0]
                      : featuredItem.product.defaultImage
                  }
                  alt={featuredItem.product.name}
                  className="max-h-[340px] w-auto object-contain apple-product-shadow hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Catalog Grid Section (Apple Store Style) */}
      <section className="max-w-[1024px] mx-auto px-4 py-12 w-full flex-1">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-[32px] sm:text-[36px] font-semibold text-ink tracking-tight">
              Catálogo Disponível.
            </h2>
            <p className="text-[17px] text-ink-muted48 mt-0.5">
              Aparelhos selecionados para retirada em {reseller.city} ({reseller.state}) ou envio com seguro.
            </p>
          </div>

          {(selectedCategory !== 'all' || selectedCondition !== 'all' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedCondition('all');
                setSearchQuery('');
              }}
              className="text-[14px] text-primary hover:underline font-medium self-start sm:self-auto"
            >
              Limpar todos os filtros
            </button>
          )}
        </div>

        {/* Grid de Cards */}
        {filteredItems.length === 0 ? (
          <div className="bg-canvas-parchment rounded-apple-card border border-hairline p-12 text-center my-6">
            <Filter className="w-8 h-8 text-ink-muted48 mx-auto mb-2 opacity-40" />
            <h3 className="text-[18px] font-semibold text-ink">Nenhum produto encontrado</h3>
            <p className="text-[14px] text-ink-muted48 mt-1 max-w-sm mx-auto">
              Tente selecionar outra categoria ou limpar a busca.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedCondition('all');
                setSearchQuery('');
              }}
              className="btn-apple-secondary mt-5 text-[14px] py-1.5 px-5"
            >
              Exibir todos os produtos
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <StoreUtilityCard
                key={item.id}
                item={item}
                storeSlug={reseller.slug}
              />
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <AppleFooter />
    </div>
  );
}
