import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import Link from 'next/link';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.getPageTree()}
      {...baseOptions()}
      sidebar={{
        banner: (
          <Link
            href="/docs"
            className="block rounded-lg border border-fd-border bg-gradient-to-br from-fd-primary/10 to-transparent p-3 transition-colors hover:border-fd-primary/40"
          >
            <span className="block font-semibold text-fd-foreground">ProVouchers</span>
            <span className="mt-1 block text-xs text-fd-muted-foreground">
              Voucher items and redeem codes for Paper, Folia, and Purpur.
            </span>
          </Link>
        ),
      }}
    >
      {children}
    </DocsLayout>
  );
}
