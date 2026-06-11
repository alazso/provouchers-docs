import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 px-4 py-24 text-center">
      <p className="text-sm font-medium text-fd-muted-foreground">404</p>
      <h1 className="text-gradient text-4xl font-bold tracking-tight">Page not found</h1>
      <p className="max-w-md text-fd-muted-foreground">
        This page does not exist or has moved. The documentation index is the best
        place to find what you were looking for.
      </p>
      <div className="mt-2 flex gap-3">
        <Link
          href="/docs"
          className="rounded-lg bg-fd-primary px-4 py-2 text-sm font-medium text-fd-primary-foreground transition-opacity hover:opacity-90"
        >
          Open the docs
        </Link>
        <Link
          href="/"
          className="rounded-lg border border-fd-border px-4 py-2 text-sm font-medium transition-colors hover:bg-fd-accent"
        >
          Home
        </Link>
      </div>
    </main>
  );
}
