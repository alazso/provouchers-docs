import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: <span className="text-gradient font-bold tracking-tight">{appName}</span>,
      transparentMode: 'top',
    },
    links: [
      { text: 'Docs', url: '/docs' },
      { text: 'Getting Started', url: '/docs/getting-started' },
      { text: 'Download', url: 'https://modrinth.com/plugin/provouchers' },
    ],
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
