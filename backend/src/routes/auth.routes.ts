import { Router } from 'express';
import { z } from 'zod';
import { login, signup } from '../controllers/auth.controller';
import { validateBody } from '../middleware/validate';

const router = Router();
const schema = z.object({ email: z.string().email(), password: z.string().min(8), name: z.string().min(2).optional() });

router.post('/signup', validateBody(schema), signup);
router.post('/login', validateBody(schema.omit({ name: true })), login);

export default router;
