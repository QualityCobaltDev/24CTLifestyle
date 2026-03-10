# 24CTLifestyle Platform

Production-ready full-stack scaffold for **24ctlifestyle.online**, built as a dark-themed SaaS membership platform.

## Stack
- **Frontend:** Next.js 14, TypeScript, TailwindCSS, Framer Motion
- **Backend:** Node.js, Express, JWT auth, Zod validation
- **Database:** PostgreSQL with Prisma schema
- **Security:** Helmet, rate limiting, CSRF, CORS, RBAC middleware
- **Payments:** Provider-ready routes for Stripe, PayPal, Payoneer

## Monorepo structure

```text
/frontend
  /app
  /components
  /styles
/backend
  /src
/database
  /prisma
/deployment
```

## Product coverage
- Dark SaaS UI with centered-logo navigation
- Home/About/Products/Services/Resources/Membership/Login pages
- Membership tiers: Basic ($5), Intermediate ($20), Expert ($50)
- Paywall preview UX for resource content (first 3 pages)
- API routing for auth, resources, payments, and admin overview
- Super admin endpoint with financial + audit summary payload

## Local setup

1. Copy env file:
   ```bash
   cp .env.example .env
   ```
2. Start backend:
   ```bash
   cd backend && npm install && npm run dev
   ```
3. Start frontend:
   ```bash
   cd frontend && npm install && npm run dev
   ```

## Security baseline implemented
- JWT authentication middleware
- Role-based route guards (Admin/Super Admin)
- CSRF protection
- Input validation via Zod
- Express rate limiter

## Next implementation steps
- Add real OAuth flow (Google)
- Wire payment SDKs + webhooks
- Persist auth/users/payments with Prisma client
- Add invoices and complete audit dashboard UI
- Add end-to-end tests and CI/CD
