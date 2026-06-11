import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter, Space_Grotesk } from 'next/font/google';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  metadataBase: new URL('https://alaz.so/provouchers'),
  title: {
    template: '%s | ProVouchers',
    default: 'ProVouchers',
  },
  description: 'Voucher items and redeem codes for Paper, Folia, and Purpur.',
};

const inter = Inter({ subsets: ['latin'] });
const display = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-display',
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.className} ${display.variable}`}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen">
        <RootProvider
          theme={{ attribute: 'class', defaultTheme: 'system', enableSystem: true }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
