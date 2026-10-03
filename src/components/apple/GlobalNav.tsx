'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, ShoppingBag, Menu, X, ArrowRight, Store, Settings, PackagePlus } from 'lucide-react';
import { cn } from '@/lib/utils';

export function GlobalNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-surface-black/90 backdrop-blur-md text-white text-[12px] font-normal tracking-apple-fine border-b border-white/10 select-none">
      <div className="max-w-[1024px] mx-auto h-[44px] px-4 flex items-center justify-between">
        {/* Apple Logo */}
        <Link
          href="/"
          className="hover:opacity-70 transition-opacity flex items-center py-2 focus:outline-none"
          title="Apple Revendas • Início"
        >
          <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 170 170">
            <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.58-7.7-11.64-13.99-6.3-9.77-11.1-20.98-14.4-33.64-3.3-12.65-4.96-24.37-4.96-35.16 0-14.99 3.7-27.42 11.1-37.3 7.4-9.87 16.7-14.88 27.9-15.02 5.09 0 10.74 1.34 16.96 4.02 6.22 2.68 10.05 4.07 11.49 4.17 1.83-.1 5.92-1.59 12.28-4.47 6.36-2.88 11.83-4.14 16.42-3.79 12.7.74 22.84 5.38 30.43 13.91-10.97 6.64-16.35 15.69-16.14 27.16.2 9.54 3.93 17.5 11.2 23.88 7.27 6.38 15.93 10.15 25.98 11.31-2.22 6.78-4.96 13.73-8.23 20.85zM119.22 31.84c0-7.39 2.66-14.4 7.97-21.03 5.32-6.63 12.02-10.63 20.1-12.01.21 1.25.32 2.45.32 3.6 0 7.33-2.77 14.44-8.31 21.32-5.55 6.89-12.23 10.72-20.08 11.51z" />
          </svg>
        </Link>

        {/* Desktop Canonical Apple Links */}
        <nav className="hidden md:flex items-center space-x-8 text-white/80">
          <Link href="/iphones-brasil" className="hover:text-white transition-colors">
            Loja
          </Link>
          <Link href="/iphones-brasil?cat=mac" className="hover:text-white transition-colors">
            Mac
          </Link>
          <Link href="/iphones-brasil?cat=ipad" className="hover:text-white transition-colors">
            iPad
          </Link>
          <Link href="/iphones-brasil?cat=iphone" className="hover:text-white transition-colors">
            iPhone
          </Link>
          <Link href="/iphones-brasil?cat=watch" className="hover:text-white transition-colors">
            Watch
          </Link>
          <Link href="/iphones-brasil?cat=airpods" className="hover:text-white transition-colors">
            AirPods
          </Link>
          <Link href="/iphones-brasil?cat=accessories" className="hover:text-white transition-colors">
            Acessórios
          </Link>
          <Link href="/dashboard" className="hover:text-white transition-colors text-primary-on-dark font-medium">
            Painel SaaS
          </Link>
        </nav>

        {/* Right Action Icons: Search & Bag / Reseller Menu */}
        <div className="flex items-center space-x-5 text-white/80">
          <Link
            href="/iphones-brasil"
            className="hover:text-white transition-colors focus:outline-none"
            title="Buscar produtos"
          >
            <Search className="w-3.5 h-3.5" />
          </Link>

          {/* Bag Icon / Account Dropdown */}
          <div className="relative">
            <button
              onClick={() => setAccountMenuOpen(!accountMenuOpen)}
              className="hover:text-white transition-colors flex items-center focus:outline-none"
              title="Área do Revendedor"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
            </button>

            {accountMenuOpen && (
              <div
                className="absolute right-0 top-8 w-64 bg-[#1d1d1f] border border-white/15 rounded-2xl p-4 shadow-2xl space-y-3 z-50 text-[13px] animate-fadeIn"
                onClick={() => setAccountMenuOpen(false)}
              >
                <div className="text-[11px] font-semibold uppercase tracking-wider text-white/50 border-b border-white/10 pb-2">
                  Ambiente do Revendedor
                </div>

                <Link
                  href="/dashboard"
                  className="flex items-center gap-2.5 text-white/90 hover:text-white py-1"
                >
                  <Settings className="w-4 h-4 text-primary-on-dark" />
                  <span>Painel de Controle</span>
                </Link>

                <Link
                  href="/dashboard/catalogo/novo"
                  className="flex items-center gap-2.5 text-white/90 hover:text-white py-1"
                >
                  <PackagePlus className="w-4 h-4 text-emerald-400" />
                  <span>+ Cadastrar Produto</span>
                </Link>

                <Link
                  href="/iphones-brasil"
                  className="flex items-center gap-2.5 text-white/90 hover:text-white py-1"
                >
                  <Store className="w-4 h-4 text-amber-400" />
                  <span>Ver Catálogo (Brasília)</span>
                </Link>

                <Link
                  href="/paulista-prime"
                  className="flex items-center gap-2.5 text-white/90 hover:text-white py-1"
                >
                  <Store className="w-4 h-4 text-purple-400" />
                  <span>Ver Catálogo (São Paulo)</span>
                </Link>

                <div className="pt-2 border-t border-white/10 text-[11px] text-white/50">
                  Subdomínio ativo: <strong className="text-white">apple.kadu.pro</strong>
                </div>
              </div>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white/80 hover:text-white focus:outline-none"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface-black border-t border-white/10 px-6 py-6 space-y-4 animate-fadeIn text-[16px]">
          <Link
            href="/iphones-brasil"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-white/90 hover:text-white py-1"
          >
            Loja Completa
          </Link>
          <Link
            href="/iphones-brasil?cat=iphone"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-white/90 hover:text-white py-1"
          >
            iPhone
          </Link>
          <Link
            href="/iphones-brasil?cat=mac"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-white/90 hover:text-white py-1"
          >
            Mac
          </Link>
          <Link
            href="/iphones-brasil?cat=ipad"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-white/90 hover:text-white py-1"
          >
            iPad
          </Link>
          <Link
            href="/iphones-brasil?cat=watch"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-white/90 hover:text-white py-1"
          >
            Apple Watch
          </Link>
          <Link
            href="/iphones-brasil?cat=airpods"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-white/90 hover:text-white py-1"
          >
            AirPods
          </Link>

          <div className="pt-4 border-t border-white/15 space-y-3 text-[14px]">
            <Link
              href="/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-primary-on-dark font-medium py-1"
            >
              Painel do Revendedor
            </Link>
            <Link
              href="/dashboard/catalogo/novo"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-white/70 hover:text-white py-1"
            >
              Cadastrar Novo Produto
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
