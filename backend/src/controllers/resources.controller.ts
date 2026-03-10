import { Response } from 'express';
import { AuthRequest } from '../middleware/auth';

const resources = [
  { id: '1', title: 'Starter Templates', tierRequired: 'BASIC' },
  { id: '2', title: 'Strategy Reports', tierRequired: 'INTERMEDIATE' },
  { id: '3', title: 'Masterclass Vault', tierRequired: 'EXPERT' }
];

const tierRank = { BASIC: 1, INTERMEDIATE: 2, EXPERT: 3 };

export const listResources = (req: AuthRequest, res: Response) => {
  const userTier = req.user?.tier ?? 'BASIC';
  const unlocked = resources.filter((r) => tierRank[userTier] >= tierRank[r.tierRequired as keyof typeof tierRank]);
  return res.json({ resources: unlocked, previewAvailable: true, previewPages: 3 });
};
