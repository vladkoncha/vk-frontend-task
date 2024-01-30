import '@/src/app/styles/globals.css';

import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import { CatsProvider } from '@/src/app/store/cats-provider';
import { Header } from '@/src/widgets/header';

const roboto = Roboto({
  subsets: ['cyrillic'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Котики',
  description: 'Бесконечные котики',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={roboto.className}>
        <Header />
        <CatsProvider initialCats={[]}>{children}</CatsProvider>
      </body>
    </html>
  );
}
