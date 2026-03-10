import { randomUUID } from 'crypto';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { env } from '../config/env';

export const signup = async (req: Request, res: Response) => {
  const { email, name } = req.body;
  const token = jwt.sign({ id: randomUUID(), role: 'USER', tier: 'BASIC' }, env.jwtSecret, { expiresIn: '7d' });
  return res.status(201).json({ user: { email, name, membershipTier: 'BASIC' }, token });
};

export const login = async (req: Request, res: Response) => {
  const { email } = req.body;
  const token = jwt.sign({ id: randomUUID(), role: 'USER', tier: 'BASIC' }, env.jwtSecret, { expiresIn: '7d' });
  return res.json({ user: { email, membershipTier: 'BASIC' }, token });
};
