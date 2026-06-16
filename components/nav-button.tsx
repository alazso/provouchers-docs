'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

const base =
  'inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors';

/**
 * A rounded pill nav link. Internal links highlight when active; `brand` renders the
 * Discord-coloured call to action, and `external` opens in a new tab.
 */
export function NavButton({
  href,
  children,
  external = false,
  brand = false,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
  brand?: boolean;
}) {
  const pathname = usePathname();
  const active =
    !external &&
    !brand &&
    (href === '/docs' ? pathname === href : pathname.startsWith(href));

  const variant = brand
    ? 'bg-[#5865F2] text-white shadow-sm hover:bg-[#4752c4]'
    : active
      ? 'bg-fd-primary/15 text-fd-primary'
      : 'bg-fd-secondary text-fd-secondary-foreground hover:bg-fd-accent hover:text-fd-accent-foreground';

  const externalProps = external
    ? { target: '_blank', rel: 'noreferrer noopener' }
    : {};

  return (
    <Link href={href} className={`${base} ${variant}`} {...externalProps}>
      {children}
    </Link>
  );
}

/** The Discord wordmark glyph, sized for the nav button. */
export function DiscordIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.317 4.369A19.79 19.79 0 0 0 15.885 3c-.21.375-.45.88-.617 1.283a18.27 18.27 0 0 0-5.537 0A12.6 12.6 0 0 0 9.106 3 19.74 19.74 0 0 0 4.67 4.37C1.864 8.557 1.102 12.64 1.48 16.665a19.93 19.93 0 0 0 6.04 3.04c.487-.66.92-1.36 1.293-2.097-.71-.266-1.39-.595-2.03-.98.17-.124.337-.254.497-.388a14.2 14.2 0 0 0 12.18 0c.163.137.33.267.5.388-.642.385-1.323.715-2.033.98.375.737.807 1.438 1.293 2.097a19.9 19.9 0 0 0 6.043-3.04c.443-4.67-.756-8.72-3.166-12.296ZM8.02 14.18c-1.183 0-2.156-1.085-2.156-2.42 0-1.333.95-2.42 2.156-2.42 1.215 0 2.18 1.096 2.157 2.42 0 1.335-.95 2.42-2.157 2.42Zm7.96 0c-1.182 0-2.155-1.085-2.155-2.42 0-1.333.95-2.42 2.156-2.42 1.215 0 2.18 1.096 2.156 2.42 0 1.335-.94 2.42-2.156 2.42Z" />
    </svg>
  );
}
