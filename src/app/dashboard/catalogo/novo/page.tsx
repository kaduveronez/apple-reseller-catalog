'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  APPLE_MASTER_CATALOG,
  getAppleProductById,
} from '@/data/apple-master-catalog';
import { addResellerItem, getAllResellers } from '@/lib/store-service';
import { AppleProduct, ItemCondition, CosmeticGrade } from '@/types/catalog';
import {
  ChevronLeft,
  Search,
  CheckCircle2,
  PackageCheck,
  Award,
  Sparkles,
  Camera,
  Plus,
  Trash2,
  Check,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import { cn, formatBRL } from '@/lib/utils';
import { BatteryGauge } from '@/components/apple/BatteryGauge';

export default function NewCatalogItemPage() {
  const router = useRouter();
  const resellers = getAllResellers();
  const currentReseller = resellers[0];

  // Wizard state
  const [selectedProductId, setSelectedProductId] = useState<string>('iphone-16-pro-max');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [productSearch, setProductSearch] = useState<string>('');

  const selectedProduct = getAppleProductById(selectedProductId) || APPLE_MASTER_CATALOG[0];

  // Variations
  const [selectedColor, setSelectedColor] = useState<string>(selectedProduct.colors[0]?.name || '');
  const [selectedStorage, setSelectedStorage] = useState<string>(selectedProduct.storageOptions[0] || '');

  // Condition
  const [condition, setCondition] = useState<ItemCondition>('new_sealed');
  const [grade, setGrade] = useState<CosmeticGrade>('sealed');
  const [batteryHealth, setBatteryHealth] = useState<number>(94);
  const [customPhotos, setCustomPhotos] = useState<string[]>([]);
  const [newPhotoUrl, setNewPhotoUrl] = useState<string>('');
  const [customDescription, setCustomDescription] = useState<string>('');
  const [includedItems, setIncludedItems] = useState<string[]>([
    'Caixa Original',
    'Cabo USB-C Original',
  ]);
  const [warranty, setWarranty] = useState<string>('1 Ano de Garantia Oficial Apple');
  const [priceCash, setPriceCash] = useState<number>(7490);
  const [priceInstallment, setPriceInstallment] = useState<number>(8190);
  const [maxInstallments, setMaxInstallments] = useState<number>(12);

  // Quick photo suggestions for realistic testing
  const sampleRealPhotos = [
    'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=1000&h=1000&fit=crop&q=80',
    'https://images.unsplash.com/photo-1695048133021-3e4b7863bc75?w=1000&h=1000&fit=crop&q=80',
    'https://images.unsplash.com/photo-1695048132938-1647895e79ef?w=1000&h=1000&fit=crop&q=80',
    'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=1000&h=1000&fit=crop&q=80',
    'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1000&h=1000&fit=crop&q=80',
  ];

  // Atualiza cores e armazenamentos quando muda o produto
  const handleSelectProduct = (product: AppleProduct) => {
    setSelectedProductId(product.id);
    setSelectedColor(product.colors[0]?.name || '');
    setSelectedStorage(product.storageOptions[0] || '');
  };

  // Alterna itens inclusos
  const toggleIncludedItem = (itemText: string) => {
    if (includedItems.includes(itemText)) {
      setIncludedItems(includedItems.filter((i) => i !== itemText));
    } else {
      setIncludedItems([...includedItems, itemText]);
    }
  };

  const handleAddPhoto = () => {
    if (newPhotoUrl.trim()) {
      setCustomPhotos([...customPhotos, newPhotoUrl.trim()]);
      setNewPhotoUrl('');
    }
  };

  const handleAddSamplePhoto = (url: string) => {
    if (!customPhotos.includes(url)) {
      setCustomPhotos([...customPhotos, url]);
    }
  };

  const handleRemovePhoto = (index: number) => {
    setCustomPhotos(customPhotos.filter((_, i) => i !== index));
  };

  // Salvar no Catálogo
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isSealed = condition === 'new_sealed';

    addResellerItem({
      resellerId: currentReseller.id,
      appleProductId: selectedProduct.id,
      condition,
      grade: isSealed ? 'sealed' : grade,
      batteryHealth: isSealed ? undefined : batteryHealth,
      color: selectedColor,
      storage: selectedStorage,
      priceCash,
      priceInstallment,
      maxInstallments,
      customPhotos: isSealed ? undefined : customPhotos,
      customDescription: isSealed ? undefined : customDescription,
      includedItems: isSealed ? ['Caixa Lacrada de Fábrica', 'Cabo Original'] : includedItems,
      warranty: isSealed ? '1 Ano de Garantia Mundial Apple' : warranty,
      isActive: true,
      featured: false,
    });

    router.push(`/${currentReseller.slug}`);
  };

  // Filtragem dos produtos do catálogo mestre
  const filteredProducts = APPLE_MASTER_CATALOG.filter((p) => {
    if (categoryFilter !== 'all' && p.category !== categoryFilter) return false;
    if (productSearch.trim()) {
      return p.name.toLowerCase().includes(productSearch.toLowerCase());
    }
    return true;
  });

  return (
    <div className="max-w-[1024px] mx-auto pb-16 space-y-8">
      {/* Header com Navegação */}
      <div className="flex items-center justify-between">
        <div>
          <Link
            href="/dashboard/catalogo"
            className="inline-flex items-center gap-1 text-[13px] text-primary hover:underline mb-1 font-medium"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Voltar para Meus Produtos</span>
          </Link>
          <h1 className="text-[28px] font-semibold text-ink tracking-tight">
            Adicionar Produto ao Meu Catálogo
          </h1>
          <p className="text-[14px] text-ink-muted48">
            Escolha um produto oficial da Apple e selecione se é um item novo lacrado ou seminovo personalizado.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* PASSO 1: Selecionar o Produto do Catálogo Oficial Apple */}
        <div className="bg-white rounded-apple-card border border-hairline p-6 space-y-4 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                Passo 1 de 3
              </span>
              <h2 className="text-[18px] font-semibold text-ink">
                Escolha o Produto no Catálogo Mestre Apple
              </h2>
            </div>

            {/* Busca rápida */}
            <div className="relative w-full sm:w-64">
              <Search className="w-3.5 h-3.5 text-ink-muted48 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Filtrar modelo Apple..."
                value={productSearch}
                onChange={(e) => setProductSearch(e.target.value)}
                className="w-full h-8 pl-8 pr-3 text-[13px] bg-canvas-parchment border border-hairline rounded-full text-ink focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>

          {/* Categorias Pills */}
          <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 no-scrollbar text-[12px]">
            {['all', 'iphone', 'mac', 'ipad', 'watch', 'airpods', 'accessories'].map((cat) => (
              <button
                type="button"
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={cn(
                  'px-3 py-1 rounded-full whitespace-nowrap transition-all',
                  categoryFilter === cat
                    ? 'bg-ink text-white font-medium shadow-sm'
                    : 'bg-canvas-parchment text-ink-muted80 hover:bg-slate-200'
                )}
              >
                {cat === 'all' ? 'Todos' : cat.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Grid de Seleção de Produtos Apple */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-h-[360px] overflow-y-auto p-1 border border-hairline/60 rounded-xl bg-canvas-parchment/40">
            {filteredProducts.map((product) => {
              const isSelected = selectedProductId === product.id;
              return (
                <div
                  key={product.id}
                  onClick={() => handleSelectProduct(product)}
                  className={cn(
                    'p-3 rounded-xl border bg-white cursor-pointer transition-all duration-150 flex flex-col items-center text-center justify-between group hover:border-primary',
                    isSelected
                      ? 'border-primary ring-2 ring-primary/20 shadow-sm'
                      : 'border-hairline hover:shadow-xs'
                  )}
                >
                  <div className="w-full h-24 flex items-center justify-center p-2 mb-1">
                    <img
                      src={product.defaultImage}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain apple-product-shadow group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="w-full">
                    <div className="text-[13px] font-semibold text-ink truncate">
                      {product.name}
                    </div>
                    <div className="text-[11px] text-ink-muted48">
                      {product.family} • {product.releaseYear}
                    </div>
                  </div>
                  {isSelected && (
                    <div className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-primary">
                      <Check className="w-3.5 h-3.5" />
                      <span>Selecionado</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* PASSO 2: Configuração de Cores e Armazenamento Oficiais */}
        <div className="bg-white rounded-apple-card border border-hairline p-6 space-y-5 shadow-sm">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-primary">
              Passo 2 de 3
            </span>
            <h2 className="text-[18px] font-semibold text-ink">
              Variações de Fábrica para {selectedProduct.name}
            </h2>
            <p className="text-[13px] text-ink-muted48">
              Selecione a cor oficial e a capacidade deste aparelho.
            </p>
          </div>

          {/* Seletor de Cores */}
          <div>
            <label className="block text-[13px] font-semibold text-ink mb-2">
              Cor Oficial: <span className="font-normal text-primary">{selectedColor}</span>
            </label>
            <div className="flex flex-wrap gap-2.5">
              {selectedProduct.colors.map((color) => {
                const isSelected = selectedColor === color.name;
                return (
                  <button
                    type="button"
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={cn(
                      'inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[13px] font-medium transition-all active:scale-[0.95]',
                      isSelected
                        ? 'border-primary ring-2 ring-primary/20 bg-primary/5 text-ink'
                        : 'border-hairline bg-white hover:border-ink/30 text-ink-muted80'
                    )}
                  >
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-black/15 flex-shrink-0"
                      style={{ backgroundColor: color.hex }}
                    />
                    <span>{color.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Seletor de Armazenamento */}
          <div>
            <label className="block text-[13px] font-semibold text-ink mb-2">
              Capacidade de Armazenamento: <span className="font-normal text-primary">{selectedStorage}</span>
            </label>
            <div className="flex flex-wrap gap-2.5">
              {selectedProduct.storageOptions.map((storage) => {
                const isSelected = selectedStorage === storage;
                return (
                  <button
                    type="button"
                    key={storage}
                    onClick={() => setSelectedStorage(storage)}
                    className={cn(
                      'px-4 py-1.5 rounded-full border text-[13px] font-medium transition-all active:scale-[0.95]',
                      isSelected
                        ? 'border-primary bg-primary text-white font-semibold shadow-sm'
                        : 'border-hairline bg-white hover:border-ink/30 text-ink-muted80'
                    )}
                  >
                    {storage}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* PASSO 3: Condição (Novo Lacrado vs Seminovo Usado) */}
        <div className="bg-white rounded-apple-card border border-hairline p-6 space-y-6 shadow-sm">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-primary">
              Passo 3 de 3
            </span>
            <h2 className="text-[18px] font-semibold text-ink">
              Condição do Produto & Personalização
            </h2>
            <p className="text-[13px] text-ink-muted48">
              Selecione se o item está lacrado na caixa ou se é um seminovo com especificações e fotos reais.
            </p>
          </div>

          {/* Toggle Segmentado Grande */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Opção Novo / Lacrado */}
            <div
              onClick={() => {
                setCondition('new_sealed');
                setWarranty('1 Ano de Garantia Mundial Apple');
              }}
              className={cn(
                'p-5 rounded-apple-card border-2 cursor-pointer transition-all duration-150 relative space-y-2',
                condition === 'new_sealed'
                  ? 'border-emerald-600 bg-emerald-50/40 ring-2 ring-emerald-500/20'
                  : 'border-hairline hover:border-ink/20 bg-white'
              )}
            >
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold text-[15px]">
                  <PackageCheck className="w-5 h-5" />
                  <span>Novo • Lacrado de Fábrica</span>
                </div>
                {condition === 'new_sealed' && (
                  <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs">
                    ✓
                  </span>
                )}
              </div>
              <p className="text-[13px] text-ink-muted80 leading-relaxed">
                Herda automaticamente as fotos oficiais de estúdio e ficha técnica da Apple. Sem necessidade de cadastrar bateria ou fotos reais.
              </p>
              <div className="text-[12px] font-medium text-emerald-800 pt-1">
                ✓ Garantia oficial mundial de 1 ano Apple
              </div>
            </div>

            {/* Opção Seminovo / Usado */}
            <div
              onClick={() => {
                setCondition('pre_owned');
                setWarranty('90 dias de garantia pela loja');
              }}
              className={cn(
                'p-5 rounded-apple-card border-2 cursor-pointer transition-all duration-150 relative space-y-2',
                condition === 'pre_owned'
                  ? 'border-primary bg-blue-50/40 ring-2 ring-primary/20'
                  : 'border-hairline hover:border-ink/20 bg-white'
              )}
            >
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 text-primary font-semibold text-[15px]">
                  <Award className="w-5 h-5" />
                  <span>Seminovo / Usado</span>
                </div>
                {condition === 'pre_owned' && (
                  <span className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center text-xs">
                    ✓
                  </span>
                )}
              </div>
              <p className="text-[13px] text-ink-muted80 leading-relaxed">
                Permite informar a saúde da bateria, condição estética, observações do lojista e adicionar fotos reais da unidade física.
              </p>
              <div className="text-[12px] font-medium text-primary pt-1">
                ✓ Aparece com destaque e badge de foto real no catálogo
              </div>
            </div>
          </div>

          {/* CAMPOS ESPECÍFICOS PARA SEMINOVOS */}
          {condition === 'pre_owned' && (
            <div className="pt-4 border-t border-hairline space-y-6 animate-fadeIn">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-semibold bg-amber-50 text-amber-900 border border-amber-200">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Personalização do Seminovo</span>
              </div>

              {/* Saúde da Bateria & Grau Estético */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[13px] font-semibold text-ink mb-1.5">
                    Saúde da Bateria: <span className="text-primary font-bold">{batteryHealth}%</span>
                  </label>
                  <input
                    type="range"
                    min="70"
                    max="100"
                    value={batteryHealth}
                    onChange={(e) => setBatteryHealth(Number(e.target.value))}
                    className="w-full accent-primary cursor-pointer"
                  />
                  <div className="flex items-center justify-between text-[11px] text-ink-muted48 mt-1">
                    <span>70% (moderada)</span>
                    <BatteryGauge percentage={batteryHealth} size="sm" />
                    <span>100% (nova)</span>
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] font-semibold text-ink mb-1.5">
                    Classificação Estética:
                  </label>
                  <select
                    value={grade}
                    onChange={(e) => setGrade(e.target.value as CosmeticGrade)}
                    className="w-full h-10 px-3 text-[14px] bg-canvas-parchment border border-hairline rounded-xl text-ink focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="excellent">Grade A+ (Impecável, sem marcas)</option>
                    <option value="very_good">Muito Bom (Micro-marcas imperceptíveis)</option>
                    <option value="good">Bom (Marcas leves de uso, excelente custo)</option>
                  </select>
                </div>
              </div>

              {/* Upload e Adição de Fotos Reais */}
              <div className="space-y-3">
                <label className="block text-[13px] font-semibold text-ink">
                  Fotos Reais do Aparelho (Upload ou Link Direto):
                </label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    placeholder="Cole a URL da foto real ou escolha as amostras abaixo..."
                    value={newPhotoUrl}
                    onChange={(e) => setNewPhotoUrl(e.target.value)}
                    className="flex-1 h-10 px-3 text-[13px] bg-canvas-parchment border border-hairline rounded-xl text-ink focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                  <button
                    type="button"
                    onClick={handleAddPhoto}
                    className="px-4 py-2 rounded-xl bg-ink text-white text-[13px] font-medium hover:bg-black transition-all active:scale-[0.95] flex items-center gap-1"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Adicionar</span>
                  </button>
                </div>

                {/* Sugestões de Fotos Reais para Teste Rápido */}
                <div className="space-y-1">
                  <span className="text-[11px] text-ink-muted48">
                    Fotos de alta resolução prontas para teste rápido:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {sampleRealPhotos.map((url, i) => (
                      <button
                        type="button"
                        key={i}
                        onClick={() => handleAddSamplePhoto(url)}
                        className="w-12 h-12 rounded-lg overflow-hidden border border-hairline hover:border-primary relative group"
                        title="Adicionar esta foto de demonstração"
                      >
                        <img src={url} alt="sample" className="w-full h-full object-cover" />
                        <span className="absolute inset-0 bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 text-xs font-bold">
                          +
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Lista de Fotos Adicionadas */}
                {customPhotos.length > 0 && (
                  <div className="flex flex-wrap gap-3 pt-2">
                    {customPhotos.map((photo, index) => (
                      <div
                        key={index}
                        className="relative w-24 h-24 rounded-xl overflow-hidden border-2 border-primary group"
                      >
                        <img
                          src={photo}
                          alt={`Foto ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => handleRemovePhoto(index)}
                          className="absolute top-1 right-1 bg-black/70 hover:bg-red-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                        {index === 0 && (
                          <span className="absolute bottom-0 inset-x-0 bg-primary text-white text-[9px] text-center font-bold py-0.5">
                            Capa
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Itens Inclusos */}
              <div>
                <label className="block text-[13px] font-semibold text-ink mb-2">
                  Itens Inclusos na Venda:
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Caixa Original',
                    'Cabo USB-C Original',
                    'Cabo Lightning Original',
                    'Carregador 20W Original',
                    'Película HPrime Aplicada',
                    'Capa Protetora Transparente',
                  ].map((itemText) => {
                    const isChecked = includedItems.includes(itemText);
                    return (
                      <button
                        type="button"
                        key={itemText}
                        onClick={() => toggleIncludedItem(itemText)}
                        className={cn(
                          'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-medium border transition-all',
                          isChecked
                            ? 'bg-emerald-50 text-emerald-800 border-emerald-300 font-semibold'
                            : 'bg-white text-ink-muted80 border-hairline hover:border-ink/30'
                        )}
                      >
                        <CheckCircle2
                          className={cn('w-3.5 h-3.5', isChecked ? 'text-emerald-600' : 'text-slate-300')}
                        />
                        <span>{itemText}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Observações do Aparelho */}
              <div>
                <label className="block text-[13px] font-semibold text-ink mb-1.5">
                  Observações Personalizadas do Aparelho:
                </label>
                <textarea
                  rows={3}
                  placeholder="Ex: Aparelho impecável de único dono. Nunca sofreu quedas ou reparos. Película de privacidade já instalada..."
                  value={customDescription}
                  onChange={(e) => setCustomDescription(e.target.value)}
                  className="w-full p-3 text-[13px] bg-canvas-parchment border border-hairline rounded-xl text-ink focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              {/* Garantia da Loja */}
              <div>
                <label className="block text-[13px] font-semibold text-ink mb-1.5">
                  Garantia Concedida:
                </label>
                <input
                  type="text"
                  value={warranty}
                  onChange={(e) => setWarranty(e.target.value)}
                  placeholder="Ex: 90 dias de garantia pela loja com termo assinado"
                  className="w-full h-10 px-3 text-[13px] bg-canvas-parchment border border-hairline rounded-xl text-ink focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>
          )}

          {/* DEFINIÇÃO DE PREÇOS */}
          <div className="pt-4 border-t border-hairline space-y-4">
            <h3 className="text-[15px] font-semibold text-ink">
              Precificação no Catálogo
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[13px] font-semibold text-ink mb-1">
                  Preço à Vista (R$):
                </label>
                <input
                  type="number"
                  step="10"
                  required
                  value={priceCash}
                  onChange={(e) => setPriceCash(Number(e.target.value))}
                  className="w-full h-11 px-3 text-[16px] font-bold bg-canvas-parchment border border-hairline rounded-xl text-ink focus:outline-none focus:ring-1 focus:ring-primary tabular-nums"
                />
                <span className="text-[11px] text-ink-muted48">
                  Formatado: {formatBRL(priceCash)}
                </span>
              </div>

              <div>
                <label className="block text-[13px] font-semibold text-ink mb-1">
                  Preço Parcelado no Cartão (R$):
                </label>
                <input
                  type="number"
                  step="10"
                  value={priceInstallment}
                  onChange={(e) => setPriceInstallment(Number(e.target.value))}
                  className="w-full h-11 px-3 text-[16px] font-bold bg-canvas-parchment border border-hairline rounded-xl text-ink focus:outline-none focus:ring-1 focus:ring-primary tabular-nums"
                />
                <span className="text-[11px] text-ink-muted48">
                  12x de {formatBRL(priceInstallment / 12)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Botão de Envio / Publicação */}
        <div className="flex items-center justify-end gap-3 pt-4">
          <Link href="/dashboard/catalogo" className="btn-apple-secondary text-[14px]">
            Cancelar
          </Link>

          <button
            type="submit"
            className="btn-apple-primary px-8 py-3 text-[16px] font-semibold flex items-center gap-2"
          >
            <span>Publicar no Meu Catálogo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
}
