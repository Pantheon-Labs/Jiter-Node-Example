import { createEvent } from '@jiter/node';
import { Handler } from 'express';
import { BuyGroceriesEvent } from '../../types';

/**
 * Express handler for POST /api/events
 * Used to create new events
 */
export const post: Handler = async (req, res) => {
  const oneMinuteFromNow = new Date(Date.now() + 1000 * 60 * 1);
  try {
    const payload: BuyGroceriesEvent = {
      action: 'buyGroceries',
      items: ['eggs', 'bacon', 'pasta', 'bread'],
    };

    // See https://docs.jiter.dev/docs/rest-api/create-event
    const createdEvent = await createEvent({
      destination: `${process.env.BASE_URL}/api/webhooks/groceries`,
      payload: JSON.stringify(payload),
      scheduledTime: oneMinuteFromNow.toISOString(),
    });

    res.send(createdEvent);
  } catch (error: any) {
    console.error(error);
    const { message } = error.response.data;
    res.status(500).json({ message });
  }
};
