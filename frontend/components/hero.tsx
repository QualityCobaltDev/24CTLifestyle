'use client';

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 md:grid-cols-2 md:px-8">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <p className="mb-2 text-sm uppercase tracking-[0.22em] text-brand">Premium Membership Platform</p>
        <h1 className="text-4xl font-semibold leading-tight md:text-6xl">Grow faster with premium resources built for modern creators.</h1>
        <p className="mt-5 max-w-xl text-white/75">
          24CTLifestyle is a dark-themed, SaaS-grade membership platform with secure paywalls, subscription billing, and curated high-value business resources.
        </p>
      </motion.div>

      <motion.div className="glass rounded-3xl p-8" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
        <h2 className="text-xl font-medium">Membership at a glance</h2>
        <div className="mt-4 grid gap-3 text-sm text-white/80">
          <p>✅ Google + email authentication</p>
          <p>✅ Stripe, PayPal, and Payoneer-ready billing workflows</p>
          <p>✅ Tier-based paywall with blurred content previews</p>
          <p>✅ Admin-grade audit logging and analytics</p>
        </div>
      </motion.div>
    </section>
  );
}
