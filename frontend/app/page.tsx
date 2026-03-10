import { Hero } from '@/components/hero';
import { TierCard } from '@/components/tier-card';

const tiers = [
  { name: 'Basic', price: '$5/mo', features: ['5 downloads/month', 'Starter templates', 'Community posts'] },
  { name: 'Intermediate', price: '$20/mo', features: ['20 downloads/month', 'Exclusive guides', 'Forum access'] },
  { name: 'Expert', price: '$50/mo', features: ['Unlimited downloads', 'Masterclass vault', 'Premium reports'] }
];

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-8">
        <h2 className="text-2xl font-semibold">Membership Tiers</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {tiers.map((tier) => (
            <TierCard key={tier.name} {...tier} />
          ))}
        </div>
      </section>
    </main>
  );
}
