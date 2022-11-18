import { Router } from 'express';
import { get } from './get';
import { post } from './post';
import { eventId } from './[eventId]';

export const events = Router();

// Mount handlers for the different methods for interacting with Events
events.post('', post);
events.get('', get);

// Mount another router for paths that specify an Event ID as part of the path
// e.g., GET /api/events/123 to retrieve the event with ID "123"
events.use('/:eventId', eventId);
