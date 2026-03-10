import { Router } from 'express';
import { listResources } from '../controllers/resources.controller';
import { requireAuth } from '../middleware/auth';

const router = Router();
router.get('/', requireAuth, listResources);

export default router;
