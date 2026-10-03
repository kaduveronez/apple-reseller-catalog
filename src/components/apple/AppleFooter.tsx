import React from 'react';
import Link from 'next/link';

export function AppleFooter() {
  return (
    <footer className="w-full bg-canvas-parchment text-ink-muted80 border-t border-hairline py-12 px-4 mt-16">
      <div className="max-w-[1024px] mx-auto space-y-6 text-[12px] leading-relaxed text-ink-muted48">
        <p>
          * Preços, condições e disponibilidade de estoque dos produtos exibidos são de inteira
          responsabilidade de cada revendedor cadastrado na plataforma iCatalog. As marcas
          Apple, iPhone, iPad, Mac, Apple Watch e AirPods são marcas registradas da Apple Inc.
          Este software opera como uma plataforma SaaS independente para revendas autorizadas e
          especializadas.
        </p>

        <div className="h-px bg-hairline w-full" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-ink-muted80">
          <div>
            Copyright © {new Date().getFullYear()} iCatalog SaaS. Todos os direitos reservados.
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/" className="hover:text-ink transition-colors">
              Início
            </Link>
            <Link href="/iphones-brasil" className="hover:text-ink transition-colors">
              Catálogo Demo (Brasília)
            </Link>
            <Link href="/paulista-prime" className="hover:text-ink transition-colors">
              Catálogo Demo (São Paulo)
            </Link>
            <Link href="/dashboard" className="hover:text-ink transition-colors font-medium text-primary">
              Acesso Revendedor
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
