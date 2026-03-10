import { Router } from 'express';
import { adminOverview } from '../controllers/admin.controller';
import { requireAuth, requireRole } from '../middleware/auth';

const router = Router();
router.get('/overview', requireAuth, requireRole(['ADMIN', 'SUPER_ADMIN']), adminOverview);

export default router;
