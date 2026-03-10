# Spaceship Deployment Guide

## 1) Build strategy
- Deploy `frontend` as the web app (Next.js build output).
- Deploy `backend` as API service on Node.js 20+.
- Provision PostgreSQL and set `DATABASE_URL`.

## 2) Environment variables
Use all values from `.env.example` in Spaceship environment settings.

## 3) Build commands
Frontend:
```bash
cd frontend && npm install && npm run build
```
Backend:
```bash
cd backend && npm install && npm run build
```

## 4) Start commands
Frontend:
```bash
cd frontend && npm run start
```
Backend:
```bash
cd backend && npm run start
```

## 5) Reverse proxy setup
- Route `24ctlifestyle.online` to frontend service.
- Route `24ctlifestyle.online/api/*` to backend service.
- Enforce HTTPS and HSTS.

## 6) Operational checklist
- Run Prisma migrations before release.
- Configure payment webhooks (Stripe, PayPal, Payoneer) to `/api/payments/webhooks/*`.
- Add monitoring (uptime + API error logging).
