'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  PackagePlus,
  Boxes,
  Store,
  ExternalLink,
  Settings,
  ChevronDown,
} from 'lucide-react';
import { getAllResellers } from '@/lib/store-service';
import { cn } from '@/lib/utils';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const resellers = getAllResellers();
  const currentReseller = resellers[0]; // Padrão: iPhones Brasil (Brasília)

  const navLinks = [
    {
      href: '/dashboard',
      label: 'Visão Geral',
      icon: LayoutDashboard,
      exact: true,
    },
    {
      href: '/dashboard/catalogo',
      label: 'Meus Produtos',
      icon: Boxes,
      exact: true,
    },
    {
      href: '/dashboard/catalogo/novo',
      label: 'Cadastrar Produto',
      icon: PackagePlus,
      highlight: true,
    },
    {
      href: '/dashboard/perfil',
      label: 'Dados da Loja & Região',
      icon: Settings,
    },
  ];

  return (
    <div className="min-h-screen bg-canvas-parchment flex flex-col">
      {/* Sub Header do Painel */}
      <div className="bg-white border-b border-hairline sticky top-[44px] z-30">
        <div className="max-w-[1200px] mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
          {/* Informações da Loja Ativa */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-ink text-white flex items-center justify-center font-bold text-xs">
              {currentReseller?.name.substring(0, 2).toUpperCase() || 'SA'}
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-ink text-[15px]">
                  {currentReseller?.name || 'Painel do Revendedor'}
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200">
                  {currentReseller?.city} - {currentReseller?.state}
                </span>
              </div>
              <span className="text-[12px] text-ink-muted48">
                apple.kadu.pro/{currentReseller?.slug}
              </span>
            </div>
          </div>

          {/* Links e Atalho para Loja Pública */}
          <div className="flex items-center gap-2">
            <Link
              href={`/${currentReseller?.slug || 'iphones-brasil'}`}
              target="_blank"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-hairline bg-white hover:border-primary text-ink text-[13px] font-medium transition-all active:scale-[0.95]"
            >
              <span>Ver Minha Loja Pública</span>
              <ExternalLink className="w-3.5 h-3.5 text-primary" />
            </Link>
          </div>
        </div>

        {/* Abas de Navegação do Painel */}
        <div className="max-w-[1200px] mx-auto px-4 flex items-center space-x-1 border-t border-hairline/60 overflow-x-auto no-scrollbar">
          {navLinks.map((link) => {
            const isActive = link.exact
              ? pathname === link.href
              : pathname.startsWith(link.href);
            const Icon = link.icon;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'inline-flex items-center gap-2 py-3 px-4 text-[13px] font-medium border-b-2 whitespace-nowrap transition-all duration-150',
                  isActive
                    ? 'border-primary text-primary font-semibold'
                    : 'border-transparent text-ink-muted80 hover:text-ink hover:border-hairline',
                  link.highlight && !isActive && 'text-primary'
                )}
              >
                <Icon className="w-4 h-4" />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Conteúdo da Página do Painel */}
      <main className="max-w-[1200px] mx-auto px-4 py-8 w-full flex-1">
        {children}
      </main>
    </div>
  );
}
