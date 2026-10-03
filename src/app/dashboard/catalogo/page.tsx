'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  PackagePlus,
  Search,
  Filter,
  Trash2,
  ExternalLink,
  Edit2,
  Check,
  MapPin,
  Sparkles,
} from 'lucide-react';
import {
  getAllResellers,
  getAllResellerItemsAdmin,
  updateResellerItem,
  deleteResellerItem,
} from '@/lib/store-service';
import { ResellerItemWithProduct } from '@/types/catalog';
import { formatBRL, cn } from '@/lib/utils';
import { ConditionBadge } from '@/components/apple/ConditionBadge';
import { BatteryGauge } from '@/components/apple/BatteryGauge';

export default function ResellerCatalogManagePage() {
  const resellers = getAllResellers();
  const currentReseller = resellers[0];
  const [items, setItems] = useState<ResellerItemWithProduct[]>([]);
  const [conditionFilter, setConditionFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [editingPriceId, setEditingPriceId] = useState<string | null>(null);
  const [newPrice, setNewPrice] = useState<number>(0);

  const loadItems = () => {
    if (currentReseller) {
      setItems(getAllResellerItemsAdmin(currentReseller.id));
    }
  };

  useEffect(() => {
    loadItems();
  }, [currentReseller]);

  const handleToggleStatus = (itemId: string, currentStatus: boolean) => {
    updateResellerItem(itemId, { isActive: !currentStatus });
    loadItems();
  };

  const handleDeleteItem = (itemId: string, name: string) => {
    if (confirm(`Tem certeza que deseja remover ${name} do seu catálogo?`)) {
      deleteResellerItem(itemId);
      loadItems();
    }
  };

  const handleSavePrice = (itemId: string) => {
    if (newPrice > 0) {
      updateResellerItem(itemId, { priceCash: newPrice });
      setEditingPriceId(null);
      loadItems();
    }
  };

  const filteredItems = items.filter((item) => {
    if (conditionFilter !== 'all' && item.condition !== conditionFilter) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        item.product.name.toLowerCase().includes(q) ||
        item.color.toLowerCase().includes(q) ||
        item.storage.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-[28px] font-semibold text-ink tracking-tight">
            Gerenciamento do Catálogo
          </h1>
          <p className="text-[14px] text-ink-muted48">
            Você possui {items.length} produtos cadastrados para a região de {currentReseller?.city} - {currentReseller?.state}.
          </p>
        </div>

        <Link
          href="/dashboard/catalogo/novo"
          className="btn-apple-primary text-[14px] py-2 px-5 flex items-center gap-1.5 self-start sm:self-auto"
        >
          <PackagePlus className="w-4 h-4" />
          <span>Cadastrar Novo Produto</span>
        </Link>
      </div>

      {/* Barra de Filtros e Busca */}
      <div className="bg-white p-4 rounded-apple-card border border-hairline flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm">
        {/* Toggle de Condição */}
        <div className="inline-flex p-1 bg-canvas-parchment rounded-full border border-hairline w-full sm:w-auto">
          <button
            onClick={() => setConditionFilter('all')}
            className={cn(
              'px-4 py-1 rounded-full text-[13px] font-medium transition-all',
              conditionFilter === 'all' ? 'bg-white text-ink shadow-sm' : 'text-ink-muted48'
            )}
          >
            Todos ({items.length})
          </button>
          <button
            onClick={() => setConditionFilter('new_sealed')}
            className={cn(
              'px-4 py-1 rounded-full text-[13px] font-medium transition-all',
              conditionFilter === 'new_sealed' ? 'bg-white text-ink shadow-sm' : 'text-ink-muted48'
            )}
          >
            Lacrados ({items.filter((i) => i.condition === 'new_sealed').length})
          </button>
          <button
            onClick={() => setConditionFilter('pre_owned')}
            className={cn(
              'px-4 py-1 rounded-full text-[13px] font-medium transition-all',
              conditionFilter === 'pre_owned' ? 'bg-white text-ink shadow-sm' : 'text-ink-muted48'
            )}
          >
            Seminovos ({items.filter((i) => i.condition === 'pre_owned').length})
          </button>
        </div>

        {/* Input de Busca */}
        <div className="relative w-full sm:w-72">
          <Search className="w-3.5 h-3.5 text-ink-muted48 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar por modelo, cor ou GB..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-9 pl-9 pr-3 text-[13px] bg-canvas-parchment border border-hairline rounded-full text-ink focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>

      {/* Lista de Produtos */}
      <div className="bg-white rounded-apple-card border border-hairline overflow-hidden shadow-sm">
        {filteredItems.length === 0 ? (
          <div className="p-12 text-center space-y-3">
            <Filter className="w-8 h-8 text-ink-muted48 mx-auto opacity-50" />
            <h3 className="text-[17px] font-semibold text-ink">Nenhum produto cadastrado</h3>
            <p className="text-[14px] text-ink-muted48 max-w-sm mx-auto">
              Nenhum item encontrado com os filtros atuais.
            </p>
            <Link href="/dashboard/catalogo/novo" className="btn-apple-primary text-[13px] inline-flex">
              Adicionar Primeiro Produto
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-[14px]">
              <thead className="bg-canvas-parchment/60 text-ink-muted48 text-[12px] uppercase font-semibold border-b border-hairline">
                <tr>
                  <th className="py-3 px-5">Produto & Imagem</th>
                  <th className="py-3 px-5">Condição</th>
                  <th className="py-3 px-5">Variação</th>
                  <th className="py-3 px-5">Preço à Vista</th>
                  <th className="py-3 px-5">Visibilidade</th>
                  <th className="py-3 px-5 text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-hairline">
                {filteredItems.map((item) => {
                  const hasCustomPhoto = Boolean(item.customPhotos && item.customPhotos.length > 0);
                  const displayImg = hasCustomPhoto
                    ? item.customPhotos![0]
                    : item.product.defaultImage;

                  const isEditingPrice = editingPriceId === item.id;

                  return (
                    <tr key={item.id} className="hover:bg-canvas-parchment/20 transition-colors">
                      {/* Imagem e Nome */}
                      <td className="py-4 px-5">
                        <div className="flex items-center gap-3">
                          <div className="w-14 h-14 rounded-xl bg-canvas-parchment p-1 border border-hairline flex-shrink-0 flex items-center justify-center relative">
                            <img
                              src={displayImg}
                              alt={item.product.name}
                              className="max-h-full max-w-full object-contain"
                            />
                            {hasCustomPhoto && (
                              <span
                                className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-amber-400 text-ink flex items-center justify-center"
                                title="Foto real"
                              >
                                <Sparkles className="w-2.5 h-2.5" />
                              </span>
                            )}
                          </div>
                          <div>
                            <div className="font-semibold text-ink text-[15px]">
                              {item.product.name}
                            </div>
                            <div className="text-[12px] text-ink-muted48">
                              {item.product.tagline}
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Condição & Bateria */}
                      <td className="py-4 px-5">
                        <div className="space-y-1">
                          <ConditionBadge condition={item.condition} grade={item.grade} />
                          {item.condition === 'pre_owned' && item.batteryHealth && (
                            <div>
                              <BatteryGauge percentage={item.batteryHealth} size="sm" />
                            </div>
                          )}
                        </div>
                      </td>

                      {/* Variação */}
                      <td className="py-4 px-5 text-[13px] text-ink">
                        <div className="font-medium">{item.storage}</div>
                        <div className="text-ink-muted48">{item.color}</div>
                      </td>

                      {/* Preço (com edição inline) */}
                      <td className="py-4 px-5">
                        {isEditingPrice ? (
                          <div className="flex items-center gap-1.5">
                            <input
                              type="number"
                              value={newPrice}
                              onChange={(e) => setNewPrice(Number(e.target.value))}
                              className="w-24 h-8 px-2 text-[13px] font-bold border border-primary rounded-lg focus:outline-none"
                              autoFocus
                            />
                            <button
                              onClick={() => handleSavePrice(item.id)}
                              className="p-1 rounded bg-primary text-white hover:bg-primary-focus"
                              title="Salvar preço"
                            >
                              <Check className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ) : (
                          <div className="group flex items-center gap-1.5">
                            <span className="font-bold text-ink tabular-nums text-[15px]">
                              {formatBRL(item.priceCash)}
                            </span>
                            <button
                              onClick={() => {
                                setEditingPriceId(item.id);
                                setNewPrice(item.priceCash);
                              }}
                              className="opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-slate-100 text-ink-muted48 transition-opacity"
                              title="Alterar preço"
                            >
                              <Edit2 className="w-3 h-3" />
                            </button>
                          </div>
                        )}
                        <div className="text-[11px] text-ink-muted48">
                          {item.priceInstallment &&
                            `12x de ${formatBRL(item.priceInstallment / 12)}`}
                        </div>
                      </td>

                      {/* Visibilidade Toggle */}
                      <td className="py-4 px-5">
                        <button
                          onClick={() => handleToggleStatus(item.id, item.isActive)}
                          className={cn(
                            'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-medium transition-all',
                            item.isActive
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                              : 'bg-slate-100 text-slate-500 border border-slate-200'
                          )}
                        >
                          <span
                            className={cn(
                              'w-2 h-2 rounded-full',
                              item.isActive ? 'bg-emerald-500' : 'bg-slate-400'
                            )}
                          />
                          <span>{item.isActive ? 'Ativo' : 'Pausado'}</span>
                        </button>
                      </td>

                      {/* Ações */}
                      <td className="py-4 px-5 text-right space-x-2">
                        <Link
                          href={`/${currentReseller?.slug}/produto/${item.id}`}
                          target="_blank"
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[12px] font-medium text-primary hover:bg-primary/5 transition-all"
                          title="Visualizar na loja"
                        >
                          <span>Ver</span>
                          <ExternalLink className="w-3 h-3" />
                        </Link>

                        <button
                          onClick={() => handleDeleteItem(item.id, item.product.name)}
                          className="p-1 text-ink-muted48 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                          title="Remover produto"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
