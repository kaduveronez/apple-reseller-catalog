import type { Metadata } from 'next';
import './globals.css';
import { GlobalNav } from '@/components/apple/GlobalNav';

export const metadata: Metadata = {
  title: 'iCatalog • Plataforma de Catálogo para Revendedores Apple',
  description:
    'Crie seu catálogo oficial com design Apple para novos e seminovos em minutos. Todos os produtos mapeados com fotos reais e especificações técnicas de fábrica.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-canvas text-ink antialiased min-h-screen flex flex-col justify-between">
        <GlobalNav />
        <main className="flex-1 w-full">{children}</main>
      </body>
    </html>
  );
}
