'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  PackagePlus,
  Boxes,
  PackageCheck,
  Award,
  ExternalLink,
  Copy,
  Check,
  MapPin,
  TrendingUp,
  MessageCircle,
} from 'lucide-react';
import {
  getAllResellers,
  getAllResellerItemsAdmin,
  updateResellerItem,
} from '@/lib/store-service';
import { formatBRL } from '@/lib/utils';
import { ResellerItemWithProduct } from '@/types/catalog';

export default function DashboardOverviewPage() {
  const resellers = getAllResellers();
  const currentReseller = resellers[0]; // iPhones Brasil
  const [items, setItems] = useState<ResellerItemWithProduct[]>([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (currentReseller) {
      setItems(getAllResellerItemsAdmin(currentReseller.id));
    }
  }, [currentReseller]);

  const handleCopyLink = () => {
    const url = `${window.location.origin}/${currentReseller.slug}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleToggleActive = (itemId: string, currentStatus: boolean) => {
    updateResellerItem(itemId, { isActive: !currentStatus });
    setItems((prev) =>
      prev.map((i) => (i.id === itemId ? { ...i, isActive: !currentStatus } : i))
    );
  };

  const totalAtivos = items.filter((i) => i.isActive).length;
  const totalLacrados = items.filter((i) => i.condition === 'new_sealed').length;
  const totalSeminovos = items.filter((i) => i.condition === 'pre_owned').length;

  return (
    <div className="space-y-8">
      {/* Banner de Boas-vindas e Link da Loja */}
      <div className="bg-white rounded-apple-card border border-hairline p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h1 className="text-[26px] font-semibold text-ink tracking-tight">
              Olá, {currentReseller?.name}!
            </h1>
            <span className="text-[12px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200">
              Loja Ativa
            </span>
          </div>
          <p className="text-[14px] text-ink-muted48">
            Seu catálogo online com design Apple está disponível para clientes em todo o Brasil.
          </p>
          <div className="flex items-center gap-2 text-[13px] text-ink-muted80 pt-1">
            <MapPin className="w-3.5 h-3.5 text-primary" />
            <span>
              Região principal de atendimento: <strong>{currentReseller?.city} - {currentReseller?.state}</strong>
            </span>
          </div>
        </div>

        {/* Link Compartilhável da Loja */}
        <div className="flex items-center gap-2 bg-canvas-parchment p-2 rounded-full border border-hairline">
          <span className="text-[13px] font-mono text-ink px-3 truncate max-w-[200px] sm:max-w-none">
            apple.kadu.pro/{currentReseller?.slug}
          </span>
          <button
            onClick={handleCopyLink}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-slate-50 text-ink text-[12px] font-medium border border-hairline shadow-sm transition-all active:scale-[0.95]"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copiado!' : 'Copiar'}</span>
          </button>
          <Link
            href={`/${currentReseller?.slug}`}
            target="_blank"
            className="p-1.5 rounded-full hover:bg-white text-ink-muted80 hover:text-ink transition-all"
            title="Abrir vitrine em nova aba"
          >
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Cards de Métricas Principais */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="bg-white p-5 rounded-apple-card border border-hairline shadow-sm space-y-2">
          <div className="flex items-center justify-between text-ink-muted48">
            <span className="text-[12px] font-semibold uppercase tracking-wider">Itens Ativos</span>
            <Boxes className="w-4 h-4 text-primary" />
          </div>
          <div className="text-[32px] font-bold text-ink tabular-nums leading-none">
            {totalAtivos}
          </div>
          <div className="text-[12px] text-ink-muted48">
            Visíveis na sua vitrine pública
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-5 rounded-apple-card border border-hairline shadow-sm space-y-2">
          <div className="flex items-center justify-between text-ink-muted48">
            <span className="text-[12px] font-semibold uppercase tracking-wider">Novos Lacrados</span>
            <PackageCheck className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-[32px] font-bold text-emerald-600 tabular-nums leading-none">
            {totalLacrados}
          </div>
          <div className="text-[12px] text-ink-muted48">
            Garantia oficial de 1 ano Apple
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-5 rounded-apple-card border border-hairline shadow-sm space-y-2">
          <div className="flex items-center justify-between text-ink-muted48">
            <span className="text-[12px] font-semibold uppercase tracking-wider">Seminovos</span>
            <Award className="w-4 h-4 text-blue-600" />
          </div>
          <div className="text-[32px] font-bold text-blue-600 tabular-nums leading-none">
            {totalSeminovos}
          </div>
          <div className="text-[12px] text-ink-muted48">
            Com bateria e fotos reais mapeadas
          </div>
        </div>

        {/* Card 4 (Ação Rápida de Adição) */}
        <Link
          href="/dashboard/catalogo/novo"
          className="bg-primary text-white p-5 rounded-apple-card flex flex-col justify-between hover:bg-primary-focus transition-all duration-150 active:scale-[0.98] shadow-sm group"
        >
          <div className="flex items-center justify-between">
            <span className="text-[12px] font-semibold uppercase tracking-wider text-white/80">
              Cadastrar Produto
            </span>
            <PackagePlus className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
          </div>
          <div className="text-[20px] font-semibold leading-tight pt-3">
            + Adicionar ao Catálogo
          </div>
          <div className="text-[12px] text-white/80">
            Catálogo Apple já pronto para escolher
          </div>
        </Link>
      </div>

      {/* Tabela de Produtos Recentes com Ações Rápidas */}
      <div className="bg-white rounded-apple-card border border-hairline overflow-hidden shadow-sm">
        <div className="p-6 border-b border-hairline flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-[20px] font-semibold text-ink">Itens Recentes no Catálogo</h2>
            <p className="text-[13px] text-ink-muted48">
              Gerencie a visibilidade e o preço dos aparelhos da sua loja
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/dashboard/catalogo"
              className="text-[13px] font-medium text-primary hover:underline"
            >
              Ver todos ({items.length})
            </Link>
            <Link
              href="/dashboard/catalogo/novo"
              className="btn-apple-primary text-[13px] py-1.5 px-4"
            >
              + Novo Produto
            </Link>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-[14px]">
            <thead className="bg-canvas-parchment/60 text-ink-muted48 text-[12px] uppercase font-semibold border-b border-hairline">
              <tr>
                <th className="py-3 px-6">Produto</th>
                <th className="py-3 px-6">Condição</th>
                <th className="py-3 px-6">Variação</th>
                <th className="py-3 px-6">Preço à Vista</th>
                <th className="py-3 px-6">Status</th>
                <th className="py-3 px-6 text-right">Ação</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-hairline">
              {items.slice(0, 6).map((item) => (
                <tr key={item.id} className="hover:bg-canvas-parchment/30 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-canvas-parchment p-1 border border-hairline flex-shrink-0 flex items-center justify-center">
                        <img
                          src={
                            item.customPhotos && item.customPhotos.length > 0
                              ? item.customPhotos[0]
                              : item.product.defaultImage
                          }
                          alt={item.product.name}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-ink">{item.product.name}</div>
                        <div className="text-[12px] text-ink-muted48">{item.product.family}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    {item.condition === 'new_sealed' ? (
                      <span className="inline-flex items-center gap-1 text-[12px] font-medium text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                        Novo Lacrado
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[12px] font-medium text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                        Seminovo ({item.batteryHealth || 90}% bat)
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-[13px] text-ink">
                    <span className="font-medium">{item.storage}</span> • {item.color}
                  </td>
                  <td className="py-4 px-6 font-semibold text-ink tabular-nums">
                    {formatBRL(item.priceCash)}
                  </td>
                  <td className="py-4 px-6">
                    <button
                      onClick={() => handleToggleActive(item.id, item.isActive)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-medium transition-all ${
                        item.isActive
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : 'bg-slate-100 text-slate-500 border border-slate-200'
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${
                          item.isActive ? 'bg-emerald-500' : 'bg-slate-400'
                        }`}
                      />
                      <span>{item.isActive ? 'Ativo na Loja' : 'Pausado'}</span>
                    </button>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <Link
                      href={`/${currentReseller?.slug}/produto/${item.id}`}
                      target="_blank"
                      className="text-primary hover:underline text-[13px] font-medium"
                    >
                      Visualizar
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
