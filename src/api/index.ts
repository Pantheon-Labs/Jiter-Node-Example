import Jiter from '@jiter/node';
import { Router } from 'express';
import { events } from './events';
import { jiterWebhookEvent } from './webhooks';

export const api = Router();

api.use('/events', events);
api.use('/webhooks/jiter', jiterWebhookEvent);
