import cookieParser from 'cookie-parser';
import cors from 'cors';
import csrf from 'csurf';
import express from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import morgan from 'morgan';
import { env } from './config/env';
import adminRoutes from './routes/admin.routes';
import authRoutes from './routes/auth.routes';
import paymentRoutes from './routes/payments.routes';
import resourceRoutes from './routes/resources.routes';

const app = express();

app.use(helmet());
app.use(cors({ origin: env.frontendUrl, credentials: true }));
app.use(express.json({ limit: '1mb' }));
app.use(cookieParser());
app.use(morgan('tiny'));
app.use(rateLimit({ windowMs: 15 * 60 * 1000, limit: 120 }));
app.use(csrf({ cookie: true }));

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/auth', authRoutes);
app.use('/api/resources', resourceRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/admin', adminRoutes);

app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  if (err.message.includes('invalid csrf token')) {
    return res.status(403).json({ message: 'Invalid CSRF token' });
  }
  return res.status(500).json({ message: 'Server error' });
});

app.listen(env.port, () => {
  console.log(`API listening on :${env.port}`);
});
