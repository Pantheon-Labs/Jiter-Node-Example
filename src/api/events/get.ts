import { getManyEvents } from '@jiter/node';
import { Handler } from 'express';

/**
 * Express handler for GET /api/events
 * Used for retrieving events
 */
export const get: Handler = async (req, res) => {
  try {
    // See https://docs.jiter.dev/docs/rest-api/get-many-events
    const allEvents = await getManyEvents();
    res.send(allEvents);
  } catch (error: any) {
    console.error(error);
    const { message } = error.response.data;
    res.status(error.status).json({ message, error });
  }
};
