import { Router } from 'express';
import { get } from './get';
import { put } from './put';

// mergeParams is set to true so req.params is accessible to child handlers
// Specifically, we use req.params.eventId to retrieve the event ID from the request
export const eventId = Router({ mergeParams: true });

eventId.get('', get);
eventId.put('', put);
