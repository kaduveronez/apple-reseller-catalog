'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  getAllResellers,
  updateResellerProfile,
} from '@/lib/store-service';
import {
  Store,
  MapPin,
  MessageCircle,
  Instagram,
  ShieldCheck,
  Check,
  ExternalLink,
} from 'lucide-react';

export default function ResellerProfilePage() {
  const resellers = getAllResellers();
  const currentReseller = resellers[0];

  const [name, setName] = useState(currentReseller?.name || '');
  const [slug, setSlug] = useState(currentReseller?.slug || '');
  const [whatsapp, setWhatsapp] = useState(currentReseller?.whatsapp || '');
  const [instagram, setInstagram] = useState(currentReseller?.instagram || '');
  const [city, setCity] = useState(currentReseller?.city || '');
  const [state, setState] = useState(currentReseller?.state || '');
  const [pickupAddress, setPickupAddress] = useState(currentReseller?.pickupAddress || '');
  const [deliveryPolicy, setDeliveryPolicy] = useState(currentReseller?.deliveryPolicy || '');
  const [bio, setBio] = useState(currentReseller?.bio || '');
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentReseller) return;

    updateResellerProfile(currentReseller.id, {
      name,
      slug,
      whatsapp,
      instagram,
      city,
      state,
      pickupAddress,
      deliveryPolicy,
      bio,
    });

    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="max-w-[800px] mx-auto space-y-6">
      <div>
        <h1 className="text-[28px] font-semibold text-ink tracking-tight">
          Configurações da Loja & Região
        </h1>
        <p className="text-[14px] text-ink-muted48">
          Personalize as informações da sua loja, o link público e o local de atendimento e retirada.
        </p>
      </div>

      {savedSuccess && (
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-[14px] font-medium flex items-center gap-2 animate-fadeIn">
          <Check className="w-4 h-4 text-emerald-600" />
          <span>Dados da loja atualizados com sucesso!</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Identificação da Loja */}
        <div className="bg-white rounded-apple-card border border-hairline p-6 space-y-4 shadow-sm">
          <h2 className="text-[17px] font-semibold text-ink flex items-center gap-2">
            <Store className="w-4 h-4 text-primary" />
            <span>Identidade do Catálogo</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[13px] font-semibold text-ink mb-1">
                Nome da Loja / Revendedor:
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full h-10 px-3 text-[14px] bg-canvas-parchment border border-hairline rounded-xl text-ink focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-[13px] font-semibold text-ink mb-1">
                Link do Diretório (Slug):
              </label>
              <div className="flex items-center">
                <span className="h-10 px-3 bg-slate-100 border border-r-0 border-hairline rounded-l-xl text-[12px] text-ink-muted48 flex items-center font-mono">
                  apple.kadu.pro/
                </span>
                <input
                  type="text"
                  required
                  value={slug}
                  onChange={(e) => setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))}
                  className="flex-1 h-10 px-3 text-[13px] font-mono bg-canvas-parchment border border-hairline rounded-r-xl text-ink focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-[13px] font-semibold text-ink mb-1">
              Bio / Apresentação Institucional:
            </label>
            <textarea
              rows={3}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full p-3 text-[13px] bg-canvas-parchment border border-hairline rounded-xl text-ink focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>

        {/* Localização Regional e Retirada */}
        <div className="bg-white rounded-apple-card border border-hairline p-6 space-y-4 shadow-sm">
          <h2 className="text-[17px] font-semibold text-ink flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Região de Atuação & Retirada em Mãos</span>
          </h2>
          <p className="text-[13px] text-ink-muted48">
            Exibido com destaque nos cards e no cabeçalho para clientes da sua cidade.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-[13px] font-semibold text-ink mb-1">
                Cidade Principal:
              </label>
              <input
                type="text"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Ex: Brasília"
                className="w-full h-10 px-3 text-[14px] bg-canvas-parchment border border-hairline rounded-xl text-ink focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-[13px] font-semibold text-ink mb-1">
                Estado (UF):
              </label>
              <input
                type="text"
                required
                maxLength={2}
                value={state}
                onChange={(e) => setState(e.target.value.toUpperCase())}
                placeholder="DF"
                className="w-full h-10 px-3 text-[14px] bg-canvas-parchment border border-hairline rounded-xl text-ink focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>

          <div>
            <label className="block text-[13px] font-semibold text-ink mb-1">
              Endereço / Ponto Seguro de Retirada:
            </label>
            <input
              type="text"
              value={pickupAddress}
              onChange={(e) => setPickupAddress(e.target.value)}
              placeholder="Ex: ParkShopping Brasília (espaço seguro) ou Asa Sul"
              className="w-full h-10 px-3 text-[14px] bg-canvas-parchment border border-hairline rounded-xl text-ink focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-[13px] font-semibold text-ink mb-1">
              Política de Entrega & Envios:
            </label>
            <input
              type="text"
              value={deliveryPolicy}
              onChange={(e) => setDeliveryPolicy(e.target.value)}
              placeholder="Ex: Entregamos via motoboy próprio em todo o DF ou Sedex com seguro para todo o Brasil."
              className="w-full h-10 px-3 text-[14px] bg-canvas-parchment border border-hairline rounded-xl text-ink focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>

        {/* Canais de Atendimento */}
        <div className="bg-white rounded-apple-card border border-hairline p-6 space-y-4 shadow-sm">
          <h2 className="text-[17px] font-semibold text-ink flex items-center gap-2">
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>Canais de Negociação</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[13px] font-semibold text-ink mb-1">
                WhatsApp de Vendas (com DDI e DDD):
              </label>
              <input
                type="text"
                required
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                placeholder="5561999998888"
                className="w-full h-10 px-3 text-[14px] bg-canvas-parchment border border-hairline rounded-xl text-ink focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <span className="text-[11px] text-ink-muted48">
                Formato: 55 + DDD + Número sem espaços.
              </span>
            </div>

            <div>
              <label className="block text-[13px] font-semibold text-ink mb-1">
                Instagram (@da_loja):
              </label>
              <input
                type="text"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value.replace('@', ''))}
                placeholder="iphonesbrasil.bsb"
                className="w-full h-10 px-3 text-[14px] bg-canvas-parchment border border-hairline rounded-xl text-ink focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>
        </div>

        {/* Ações */}
        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            type="submit"
            className="btn-apple-primary px-8 py-2.5 text-[15px] font-semibold"
          >
            Salvar Alterações
          </button>
        </div>
      </form>
    </div>
  );
}
