# Jiter + Express + TypeScript example

A basic API for learning how to integrate your app with the Jiter API

## What does the app do?

This app exposes API routes which allow a user to create reminders to purchase groceries, edit reminders, and receive reminders all using Jiter events.

## Setup

1. Install dependencies via `yarn`
   - [Install `yarn`](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable) if you don't already have it installed
2. Run `yarn setup` to create your local environment file (or optionally run `cp .env.sample .env`)
3. Get your [API keys and signing secret](https://docs.jiter.dev/docs/getting-started) and add them to `.env`
4. Start your local reverse proxy with `yarn proxy` and then copy the `https` value for `Forwarding` (e.g., `http://123456789ABC.ngrok.io`) and add it as the `BASE_URL` in your `.env`
5. Start the app with `yarn dev` (or optionally build and start with `yarn build && yarn start`)
6. Use an API Client like [Insomnia](https://insomnia.rest) or make a CURL request to your API and watch the logs for responses

### Example Curl Request

To create a new event, copy the snippet below and execute it in a terminal after replacing the API token with your token:

```bash
curl --request POST \
  --url http://localhost:8000/api/events \
  --header 'x-api-token: YOUR_API_TOKEN'
```

## Using the App

Once the app is up and running, there are a variety of routes you can utilize to experiment with the Jiter API:

| Method | Route                 | Purpose                                                           |
| ------ | --------------------- | ----------------------------------------------------------------- |
| `POST` | `/event `             | Creates new event that will be delivered one minute in the future |
| `GET`  | `/api/events `        | Finds all events                                                  |
| `GET`  | `/events/:id `        | Finds event by id                                                 |
| `PUT`  | `/event/:id `         | Updates event by id                                               |
| `POST` | `/api/webhooks/jiter` | Handles your payload                                              |
