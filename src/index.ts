/* eslint-disable no-console */
import * as dotenv from 'dotenv';
import express from 'express';
import axios from 'axios';
import Jiter from '@jiter/node';
import { api } from './api';

dotenv.config();

const app = express();
app.use(express.json());

const port = 8000;
const baseUrl = process.env.BASE_URL;

// Jiter Initialization
try {
  // See https://docs.jiter.dev/docs/getting-started
  Jiter.init({
    apiKey: process.env.JITER_API_KEY ?? '',
    signingSecret: process.env.JITER_SIGNING_SECRET ?? '',
  });
} catch (err) {
  console.error(
    '\n\n🚨 Looks like Jiter failed to initialize; have you followed the setup steps in the README?\n\n',
  );
  process.exit();
}

// Helper method to guide users who hit the app from a browser
app.get('/', (req, res) =>
  res.json({
    message:
      'Welcome to the Jiter & Express TS example, checkout the /events and /webhooks endpoints!',
  }),
);

// All API handlers are defined in their own files and are mounted into the app
app.use('/api', api);

app.listen(port, async () => {
  console.log(`\n\n🚀 Server started at http://localhost:${port}`);

  if (baseUrl?.includes('your-app.com') || !baseUrl) {
    console.warn(
      '\n🚨 BASE_URL was not configured in .env; your events will not be handled. See the README for more info.\n\n',
    );
  } else {
    console.log(`🪝 Webhook events will be sent to: ${baseUrl}/api/webhooks`);
    try {
      await axios.get(baseUrl);
    } catch (err) {
      console.log(
        '🚨 Your BASE_URL appears to be offline; did you start your ngrok server? See the README for more info.',
      );
    }
  }
});
