import Jiter from '@jiter/node';
import { Router } from 'express';
import { events } from './events';
import { webhooks } from './webhooks';

export const api = Router();

// Mount two additional routers
// Each router handles different methods and may incorporate more nested path routers
api.use('/events', events);
api.use('/webhooks', webhooks);
