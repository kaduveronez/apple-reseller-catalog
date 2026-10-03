import React from 'react';
import Link from 'next/link';
import { getResellerBySlug, getResellerItems, getAllResellers } from '@/lib/store-service';
import { StoreCatalogView } from '@/components/apple/StoreCatalogView';
import { Store } from 'lucide-react';

interface ResellerStorePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ResellerStorePage({ params }: ResellerStorePageProps) {
  const { slug } = await params;
  const reseller = getResellerBySlug(slug);

  if (!reseller) {
    const allResellers = getAllResellers();
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
        <div className="w-16 h-16 rounded-full bg-canvas-parchment flex items-center justify-center mb-4">
          <Store className="w-8 h-8 text-ink-muted48" />
        </div>
        <h1 className="text-[28px] font-semibold text-ink">Catálogo não encontrado</h1>
        <p className="text-ink-muted48 max-w-md mt-2 text-[15px]">
          O endereço <span className="font-mono text-ink">/{slug}</span> não corresponde a um revendedor ativo.
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
          Voltar para a Página Inicial
        </Link>
      </div>
    );
  }

  const items = getResellerItems(reseller.id);

  return <StoreCatalogView reseller={reseller} initialItems={items} />;
}
