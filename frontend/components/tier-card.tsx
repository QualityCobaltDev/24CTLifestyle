import { CheckCircle2 } from 'lucide-react';

interface TierCardProps {
  name: string;
  price: string;
  features: string[];
}

export function TierCard({ name, price, features }: TierCardProps) {
  return (
    <article className="glass rounded-2xl p-6 shadow-glow transition hover:-translate-y-1">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="mt-1 text-3xl font-bold">{price}</p>
      <ul className="mt-4 space-y-2 text-sm text-white/85">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-brand" />
            {feature}
          </li>
        ))}
      </ul>
      <button className="mt-6 w-full rounded-lg bg-brand px-4 py-2 text-sm font-medium text-white hover:opacity-90">Upgrade</button>
    </article>
  );
}
