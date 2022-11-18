import { Router } from 'express';
import { groceriesHandler } from './groceriesHandler';

export const webhooks = Router();

webhooks.use('/groceries', groceriesHandler);
