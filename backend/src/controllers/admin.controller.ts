import { Response } from 'express';
import { AuthRequest } from '../middleware/auth';

export const adminOverview = (req: AuthRequest, res: Response) => {
  return res.json({
    users: 1200,
    activeSubscriptions: 845,
    mrr: 14250,
    pendingRefunds: 3,
    latestAudit: [{ action: 'Updated resource visibility', at: new Date().toISOString() }]
  });
};
