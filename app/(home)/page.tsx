import Link from 'next/link';
import { appName, gitConfig } from '@/lib/shared';
import { LatestVersion } from '@/components/latest-version';

const features: { title: string; body: string }[] = [
  {
    title: 'Items and codes',
    body: 'Physical item vouchers and typeable redemption codes share one reward, condition, and effect pipeline.',
  },
  {
    title: 'Rewards that scale',
    body: 'Weighted random reward sets, always-run rewards, parametric arguments, and a {random:min-max} token, all from config.',
  },
  {
    title: 'Anti-dupe that holds',
    body: 'Lazy PDC stamping with a per-item nonce, checked against indexed persistent storage on every redeem.',
  },
  {
    title: 'Conditions, config-driven',
    body: 'Permission, world, region, rank, economy, experience, expiry, gamemode, and owner gates, composed per voucher.',
  },
  {
    title: 'Preview and give',
    body: 'A paginated preview GUI, bulk give, and a persisted offline-give queue that delivers on next join.',
  },
  {
    title: 'Built on Strata',
    body: 'Scheduling, storage, text, hooks, GUIs, and metrics come from the shared Strata library, so the plugin stays lean.',
  },
];

const snippet = `id: example
display-name: "<gradient:#FFD700:#8B0000>Example Voucher</gradient>"
item:
  material: PAPER
  glow: true
lore:
  - "<gray>Right-click to redeem"
conditions:
  - type: permission
    permission: "provouchers.use.example"
rewards:
  - "command: give %player% diamond 1"
  - "message: <gold>You redeemed the example voucher!"`;

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      {/* Hero */}
      <section className="mx-auto flex max-w-4xl flex-col items-center px-4 py-20 text-center">
        <div className="mb-5 flex flex-wrap items-center justify-center gap-2 text-xs font-medium text-fd-muted-foreground">
          <LatestVersion />
          <span className="rounded-full border border-fd-border px-3 py-1">Paper / Folia</span>
          <span className="rounded-full border border-fd-border px-3 py-1">Java 25</span>
        </div>

        <h1 className="text-gradient text-5xl font-bold tracking-tight sm:text-6xl">{appName}</h1>
        <p className="mt-4 text-lg font-medium text-fd-foreground sm:text-xl">
          Vouchers and codes for Paper and Folia, done properly.
        </p>
        <p className="mt-3 max-w-2xl text-fd-muted-foreground">
          A config-driven reward and condition system, persistent anti-dupe protection, and a
          first-class migration path off CrazyVouchers. Built on the Strata shared library.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/docs"
            className="rounded-lg bg-fd-primary px-5 py-2.5 text-sm font-semibold text-fd-primary-foreground transition-opacity hover:opacity-90"
          >
            Get Started
          </Link>
          <a
            href={`https://github.com/${gitConfig.user}/${gitConfig.repo}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-fd-border px-5 py-2.5 text-sm font-semibold text-fd-foreground transition-colors hover:bg-fd-accent"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Code snippet */}
      <section className="mx-auto w-full max-w-3xl px-4">
        <div className="overflow-hidden rounded-xl border border-fd-border bg-fd-card shadow-sm">
          <div className="flex items-center gap-1.5 border-b border-fd-border px-4 py-2.5">
            <span className="size-3 rounded-full bg-red-400/80" />
            <span className="size-3 rounded-full bg-yellow-400/80" />
            <span className="size-3 rounded-full bg-green-400/80" />
            <span className="ml-2 text-xs text-fd-muted-foreground">vouchers/example.yml</span>
          </div>
          <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
            <code className="text-fd-foreground">{snippet}</code>
          </pre>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto w-full max-w-5xl px-4 py-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-fd-border bg-fd-card p-5 transition-colors hover:border-fd-foreground/20"
            >
              <h3 className="font-semibold text-fd-foreground">{f.title}</h3>
              <p className="mt-2 text-sm text-fd-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
