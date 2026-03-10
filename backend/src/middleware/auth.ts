import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { env } from '../config/env';

export interface AuthRequest extends Request {
  user?: { id: string; role: 'USER' | 'ADMIN' | 'SUPER_ADMIN'; tier: 'BASIC' | 'INTERMEDIATE' | 'EXPERT' };
}

export const requireAuth = (req: AuthRequest, res: Response, next: NextFunction) => {
  const auth = req.headers.authorization;
  if (!auth?.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const token = auth.replace('Bearer ', '');
  try {
    req.user = jwt.verify(token, env.jwtSecret) as AuthRequest['user'];
    return next();
  } catch {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export const requireRole = (roles: Array<'ADMIN' | 'SUPER_ADMIN'>) => (req: AuthRequest, res: Response, next: NextFunction) => {
  if (!req.user || !roles.includes(req.user.role as 'ADMIN' | 'SUPER_ADMIN')) {
    return res.status(403).json({ message: 'Forbidden' });
  }
  return next();
};
