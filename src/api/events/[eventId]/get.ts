import { getEvent } from '@jiter/node';
import { Handler } from 'express';

/**
 * Express handler for GET /api/events/EVENT_ID
 * Used to get individual events by ID as a path param
 */
export const get: Handler = async (req, res) => {
  try {
    // See https://docs.jiter.dev/docs/rest-api/get-event-info
    const event = await getEvent({
      id: req.params.eventId,
    });
    res.send(event);
  } catch (error: any) {
    console.error(error);
    const { message } = error.response.data;
    res.status(error.status).json({ message, error });
  }
};
