import type { ReactNode } from 'react';

import '@/cms/config';
import '@/cms/registry';
import './globals.css';

import Header from '@/components/cms/components/LayoutSettingsBlock/Header';
import Footer from '@/components/cms/components/LayoutSettingsBlock/Footer';

import { getLayoutSettings } from '@/lib/optimizely/layout/get-layout-settings';

type RootLayoutProps = {
  children: ReactNode;
};

export default async function RootLayout({
  children,
}: RootLayoutProps) {
  const layoutSettings =
    await getLayoutSettings();

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header settings={layoutSettings} />

        <main className="flex-1">
          {children}
        </main>

        <Footer settings={layoutSettings} />
      </body>
    </html>
  );
}