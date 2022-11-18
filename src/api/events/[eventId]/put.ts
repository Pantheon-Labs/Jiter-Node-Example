import { editEvent } from '@jiter/node';
import { Handler } from 'express';
import { ReturnGroceriesEvent } from '../../../types';

/**
 * Express handler for PUT /api/events/EVENT_ID
 * Used to update existing events by ID as a path param
 */
export const put: Handler = async (req, res) => {
  try {
    const payload: ReturnGroceriesEvent = {
      action: 'returnGroceries',
      returns: [
        { itemName: 'bacon', reason: 'Too addictive' },
        { itemName: 'eggs', reason: 'Too fragile' },
      ],
    };

    // See https://docs.jiter.dev/docs/rest-api/update-event
    const updatedEvent = await editEvent({
      id: req.params.id,
      payload: JSON.stringify(payload),
    });
    res.send(updatedEvent);
  } catch (error: any) {
    console.error(error);
    const { message } = error.response.data;
    res.status(error.status).json({ message, error });
  }
};
