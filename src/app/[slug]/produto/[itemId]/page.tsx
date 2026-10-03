import React from 'react';
import Link from 'next/link';
import { getResellerBySlug, getResellerItemById } from '@/lib/store-service';
import { ProductDetailView } from '@/components/apple/ProductDetailView';

interface ProductDetailPageProps {
  params: Promise<{
    slug: string;
    itemId: string;
  }>;
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug, itemId } = await params;

  const reseller = getResellerBySlug(slug);
  const item = getResellerItemById(itemId);

  if (!reseller || !item) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-[28px] font-semibold text-ink">Produto não encontrado</h1>
        <p className="text-ink-muted48 mt-2 text-[15px]">
          Este item pode ter sido vendido ou removido do catálogo.
        </p>
        <Link href={`/${slug}`} className="btn-apple-primary mt-6">
          Voltar ao Catálogo da Loja
        </Link>
      </div>
    );
  }

  return <ProductDetailView reseller={reseller} item={item} />;
}
