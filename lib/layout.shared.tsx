import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';
import { appName, gitConfig } from './shared';
import { NavButton, DiscordIcon } from '@/components/nav-button';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="inline-flex items-center gap-2">
          <Image
            src="/icon.png"
            alt=""
            width={30}
            height={30}
            className="rounded-md"
            priority
          />
          <span className="text-gradient text-lg font-bold tracking-tight">
            {appName}
          </span>
        </span>
      ),
      transparentMode: 'top',
    },
    links: [
      { type: 'custom', children: <NavButton href="/docs">Docs</NavButton> },
      {
        type: 'custom',
        children: (
          <NavButton href="/docs/getting-started">Getting Started</NavButton>
        ),
      },
      {
        type: 'custom',
        children: (
          <NavButton href="https://modrinth.com/plugin/provouchers" external>
            Download
          </NavButton>
        ),
      },
      {
        type: 'custom',
        secondary: true,
        children: (
          <NavButton href="https://discord.gg/m3AKQfrMS5" external brand>
            <DiscordIcon />
            Discord
          </NavButton>
        ),
      },
    ],
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
