'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, ShoppingBag, Menu, X, Store, Sparkles } from 'lucide-react';

interface GlobalNavProps {
  currentStoreSlug?: string;
  currentStoreName?: string;
}

export function GlobalNav({ currentStoreSlug, currentStoreName }: GlobalNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-surface-black text-white text-[12px] font-normal tracking-apple-fine">
      <div className="max-w-[1024px] mx-auto h-[44px] px-4 flex items-center justify-between">
        {/* Apple Logo */}
        <Link
          href="/"
          className="hover:opacity-70 transition-opacity flex items-center gap-1.5 focus:outline-none"
          title="Início - Catálogo SaaS Apple"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 170 170">
            <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.58-7.7-11.64-13.99-6.3-9.77-11.1-20.98-14.4-33.64-3.3-12.65-4.96-24.37-4.96-35.16 0-14.99 3.7-27.42 11.1-37.3 7.4-9.87 16.7-14.88 27.9-15.02 5.09 0 10.74 1.34 16.96 4.02 6.22 2.68 10.05 4.07 11.49 4.17 1.83-.1 5.92-1.59 12.28-4.47 6.36-2.88 11.83-4.14 16.42-3.79 12.7.74 22.84 5.38 30.43 13.91-10.97 6.64-16.35 15.69-16.14 27.16.2 9.54 3.93 17.5 11.2 23.88 7.27 6.38 15.93 10.15 25.98 11.31-2.22 6.78-4.96 13.73-8.23 20.85zM119.22 31.84c0-7.39 2.66-14.4 7.97-21.03 5.32-6.63 12.02-10.63 20.1-12.01.21 1.25.32 2.45.32 3.6 0 7.33-2.77 14.44-8.31 21.32-5.55 6.89-12.23 10.72-20.08 11.51z" />
          </svg>
          <span className="font-semibold text-white/90 tracking-normal hidden sm:inline text-[13px]">
            iCatalog
          </span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center space-x-7 text-white/80">
          <Link href="/" className="hover:text-white transition-colors">
            Sobre o SaaS
          </Link>
          <Link href="/iphones-brasil" className="hover:text-white transition-colors flex items-center gap-1 text-[#2997ff]">
            <Store className="w-3 h-3" />
            Loja Demo (Brasília)
          </Link>
          <Link href="/paulista-prime" className="hover:text-white transition-colors">
            Loja Demo (São Paulo)
          </Link>
          <Link href="/#recursos" className="hover:text-white transition-colors">
            Recursos
          </Link>
          <Link href="/#catalogo-oficial" className="hover:text-white transition-colors">
            Catálogo Oficial
          </Link>
        </nav>

        {/* Right Action Cluster */}
        <div className="flex items-center space-x-4">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-apple-btn bg-white/10 hover:bg-white/20 text-white text-[12px] font-medium transition-all active:scale-[0.95]"
          >
            <Sparkles className="w-3 h-3 text-[#2997ff]" />
            <span className="hidden sm:inline">Painel do Revendedor</span>
            <span className="sm:hidden">Painel</span>
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white/80 hover:text-white p-1"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface-black border-t border-white/10 px-6 py-4 space-y-3 animate-fadeIn">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-white/90 hover:text-white py-1.5 text-[15px]"
          >
            Sobre a Plataforma
          </Link>
          <Link
            href="/iphones-brasil"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#2997ff] hover:underline py-1.5 text-[15px] flex items-center gap-2"
          >
            <Store className="w-4 h-4" />
            Ver Loja Demo: iPhones Brasil (Brasília)
          </Link>
          <Link
            href="/paulista-prime"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-white/90 hover:text-white py-1.5 text-[15px]"
          >
            Ver Loja Demo: Paulista Prime (São Paulo)
          </Link>
          <Link
            href="/dashboard"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-white/90 hover:text-white py-1.5 text-[15px] font-medium"
          >
            Acessar Painel / Montar Catálogo
          </Link>
        </div>
      )}
    </header>
  );
}
