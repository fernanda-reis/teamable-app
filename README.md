# Teamable 

A small and friendly profile app for sharing teammates' info — their name, email, and interests. Update the details whenever they change; Teamable keeps the profile in MongoDB.

## ✨ What it does

- Shows a teammate's profile and photo
- Lets you edit and save their name, email, and interests
- Reads and updates profile data through a small Express API

## 🧰 Built with

- Vue 3
- Node.js and Express
- MongoDB

## 🚀 Get started

### Prerequisites

- Node.js and npm
- MongoDB running locally at `mongodb://localhost:27017`

### Install and run

```bash
npm install
npm run build
npm start
```

Then open [http://localhost:3000](http://localhost:3000).

The server creates or uses the `company_db` database and the `employees` collection. The profile is stored with `id: 1`, so the app currently supports one profile.

## 👩‍💻 Development

To start the Vue development server:

```bash
npm run serve
```

To serve the app through Express, build the frontend first with `npm run build`, then run `npm start`.

## 🧪 Tests

```bash
npm run tests
```

The API test writes to MongoDB, so make sure your local MongoDB server is running before running the full suite.

---
