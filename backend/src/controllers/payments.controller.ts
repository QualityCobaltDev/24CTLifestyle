import { Response } from 'express';
import { AuthRequest } from '../middleware/auth';

export const createCheckout = (req: AuthRequest, res: Response) => {
  const { provider, tier } = req.body;
  return res.json({
    checkoutUrl: `https://payments.example.com/${provider.toLowerCase()}/checkout?tier=${tier}`,
    provider,
    tier
  });
};

export const paymentHistory = (req: AuthRequest, res: Response) => {
  return res.json({ history: [{ amount: 20, method: 'Stripe', status: 'PAID', timestamp: new Date().toISOString() }] });
};
