import { healthResponseSchema } from '@weddy/contracts';
import express from 'express';
import { pingDb } from './shared/db.js';

export function createApp(): express.Application {
  const app = express();

  app.use(express.json());

  app.get('/api/health', async (req, res) => {
    const mongoUp = await pingDb();
    const body = healthResponseSchema.parse({
      ok: true,
      mongo: mongoUp ? 'up' : 'down',
    });

    res.status(mongoUp ? 200 : 503).json(body);
  });

  return app;
}
