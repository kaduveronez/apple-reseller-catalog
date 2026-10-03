'use client';

import React, { useState, useMemo, use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  getResellerBySlug,
  getResellerItems,
  getAllResellers,
} from '@/lib/store-service';
import { SubNavFrosted } from '@/components/apple/SubNavFrosted';
import { StoreUtilityCard } from '@/components/apple/StoreUtilityCard';
import { AppleFooter } from '@/components/apple/AppleFooter';
import { MapPin, MessageCircle, ShieldCheck, Sparkles, Filter, Store } from 'lucide-react';
import { formatBRL } from '@/lib/utils';

interface ResellerStorePageProps {
  params: Promise<{ slug: string }>;
}

export default function ResellerStorePage({ params }: ResellerStorePageProps) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  const reseller = getResellerBySlug(slug);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedCondition, setSelectedCondition] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  if (!reseller) {
    const allResellers = getAllResellers();
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
        <div className="w-16 h-16 rounded-full bg-canvas-parchment flex items-center justify-center mb-4">
          <Store className="w-8 h-8 text-ink-muted48" />
        </div>
        <h1 className="text-[28px] font-semibold text-ink">Catálogo não encontrado</h1>
        <p className="text-ink-muted48 max-w-md mt-2 text-[15px]">
          O endereço <span className="font-mono text-ink">/{slug}</span> não corresponde a um revendedor cadastrado.
        </p>

        <div className="mt-8 space-y-3">
          <p className="text-sm font-medium text-ink">Lojas de demonstração disponíveis:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {allResellers.map((r) => (
              <Link
                key={r.slug}
                href={`/${r.slug}`}
                className="px-4 py-2 rounded-full border border-hairline bg-white hover:border-primary text-ink text-sm font-medium transition-all"
              >
                {r.name} ({r.city} - {r.state})
              </Link>
            ))}
          </div>
        </div>

        <Link href="/" className="btn-apple-primary mt-8">
          Voltar para o Início
        </Link>
      </div>
    );
  }

  const items = getResellerItems(reseller.id);

  // Filtros combinados
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      // Categoria
      if (selectedCategory !== 'all' && item.product.category !== selectedCategory) {
        return false;
      }
      // Condição
      if (selectedCondition !== 'all' && item.condition !== selectedCondition) {
        return false;
      }
      // Busca
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = item.product.name.toLowerCase().includes(query);
        const matchesColor = item.color.toLowerCase().includes(query);
        const matchesStorage = item.storage.toLowerCase().includes(query);
        if (!matchesName && !matchesColor && !matchesStorage) {
          return false;
        }
      }
      return true;
    });
  }, [items, selectedCategory, selectedCondition, searchQuery]);

  // Contadores para o resumo
  const totalNovos = items.filter((i) => i.condition === 'new_sealed').length;
  const totalSeminovos = items.filter((i) => i.condition === 'pre_owned').length;

  return (
    <div className="min-h-screen flex flex-col justify-between bg-canvas">
      {/* Sub-Navegação Adesiva com Vidro Desfocado */}
      <SubNavFrosted
        reseller={reseller}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        selectedCondition={selectedCondition}
        onSelectCondition={setSelectedCondition}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Hero Showcase da Loja */}
      <section className="bg-canvas-parchment border-b border-hairline py-8 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-semibold bg-white border border-hairline text-ink">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                <span>Atuação Regional: {reseller.city} - {reseller.state}</span>
              </div>
              <h2 className="text-[32px] sm:text-[40px] font-semibold text-ink tracking-apple-tight leading-tight">
                {reseller.name}
              </h2>
              <p className="text-[17px] text-ink-muted80 leading-relaxed">
                {reseller.bio}
              </p>
              <div className="flex items-center gap-4 pt-1 text-[13px] text-ink-muted48">
                <span>
                  <strong className="text-ink font-semibold">{items.length}</strong> produtos disponíveis
                </span>
                <span>•</span>
                <span>
                  <strong className="text-emerald-600 font-semibold">{totalNovos}</strong> lacrados
                </span>
                <span>•</span>
                <span>
                  <strong className="text-primary font-semibold">{totalSeminovos}</strong> seminovos
                </span>
              </div>
            </div>

            {/* Card com Detalhes de Retirada e Contato */}
            <div className="bg-white p-5 rounded-apple-card border border-hairline/80 shadow-sm space-y-3 sm:w-80 flex-shrink-0">
              <div className="text-[13px] font-semibold text-ink uppercase tracking-wider">
                Informações de Atendimento
              </div>
              <div className="space-y-2 text-[13px] text-ink-muted80">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-ink">Ponto de Retirada:</span>
                    <p className="text-ink-muted48 text-[12px]">{reseller.pickupAddress}</p>
                  </div>
                </div>
                {reseller.deliveryPolicy && (
                  <div className="flex items-start gap-2 pt-1 border-t border-hairline/40">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <p className="text-[12px] text-ink-muted48">{reseller.deliveryPolicy}</p>
                  </div>
                )}
              </div>

              <a
                href={`https://wa.me/${reseller.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 px-4 rounded-full text-[14px] font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] transition-all duration-150 active:scale-[0.95] flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Conversar com a Loja</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Produtos (Estilo Apple Store Utility Grid) */}
      <section className="max-w-[1200px] mx-auto px-4 py-10 w-full flex-1">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-[24px] font-semibold text-ink tracking-tight">
              {selectedCategory === 'all'
                ? 'Todos os Produtos em Estoque'
                : `Produtos: ${selectedCategory.toUpperCase()}`}
            </h2>
            <p className="text-[14px] text-ink-muted48">
              Exibindo {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'itens'}
              {selectedCondition !== 'all' && (
                <span> ({selectedCondition === 'new_sealed' ? 'apenas novos' : 'apenas seminovos'})</span>
              )}
            </p>
          </div>

          {(selectedCategory !== 'all' || selectedCondition !== 'all' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedCondition('all');
                setSearchQuery('');
              }}
              className="text-[13px] text-primary hover:underline font-medium"
            >
              Limpar filtros
            </button>
          )}
        </div>

        {filteredItems.length === 0 ? (
          <div className="bg-canvas-parchment rounded-apple-card border border-hairline p-12 text-center my-6">
            <Filter className="w-10 h-10 text-ink-muted48 mx-auto mb-3 opacity-50" />
            <h3 className="text-[18px] font-semibold text-ink">Nenhum produto encontrado</h3>
            <p className="text-[14px] text-ink-muted48 mt-1 max-w-sm mx-auto">
              Nenhum item corresponde aos filtros selecionados. Tente buscar por outro termo ou limpar os filtros.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedCondition('all');
                setSearchQuery('');
              }}
              className="btn-apple-secondary mt-5 text-[14px] py-2 px-5"
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
