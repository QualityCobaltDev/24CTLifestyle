'use client';

export default function ResourcesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-14 md:px-8">
      <section className="glass rounded-2xl p-8">
        <h1 className="text-3xl font-semibold">Resources</h1>
        <p className="mt-3 text-white/75">Preview mode shows first 3 pages. Upgrade membership to unlock complete files.</p>
        <div className="relative mt-6 rounded-xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl">Business Growth Framework.pdf</h2>
          <p className="mt-3 text-sm text-white/80">Page 1-3 preview content is visible. Remaining pages are blurred below.</p>
          <div className="mt-4 rounded-lg bg-white/10 p-4 text-sm">Preview content sample...</div>
          <div className="absolute inset-x-6 bottom-6 top-24 rounded-lg bg-black/70 backdrop-blur-sm" />
          <div className="absolute inset-0 flex items-end justify-center pb-10">
            <button className="rounded-lg bg-brand px-4 py-2 text-sm font-semibold">Unlock full access with a membership plan</button>
          </div>
        </div>
      </section>
    </main>
  );
}
