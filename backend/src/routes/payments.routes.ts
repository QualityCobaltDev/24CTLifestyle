import { Router } from 'express';
import { z } from 'zod';
import { createCheckout, paymentHistory } from '../controllers/payments.controller';
import { requireAuth } from '../middleware/auth';
import { validateBody } from '../middleware/validate';

const router = Router();

router.post('/checkout', requireAuth, validateBody(z.object({ provider: z.enum(['STRIPE', 'PAYPAL', 'PAYONEER']), tier: z.enum(['BASIC', 'INTERMEDIATE', 'EXPERT']) })), createCheckout);
router.get('/history', requireAuth, paymentHistory);

export default router;
