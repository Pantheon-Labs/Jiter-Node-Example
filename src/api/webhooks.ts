import Jiter from '@jiter/node';
import { PurchaseEvent } from '../types';

export const jiterWebhookEvent = Jiter.Middleware.webhookHandler<PurchaseEvent>(
  ({ payload }) => {
    console.log('Signed, valid Jiter event received');
    // Now that the event was verified and a response was sent, you can continue with the payload:
    if (payload.action === 'buyGroceries') {
      console.log('Purchased the following groceries:', payload.items);
    } else if (payload.action === 'returnGroceries') {
      const returns = payload.returns.map((item) => `${item.itemName} - ${item.reason}`);
      console.log('Returned the following groceries:', returns);
    }
  },
  { parse: true },
);
