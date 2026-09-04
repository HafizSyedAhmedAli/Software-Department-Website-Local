# Software Department Website — Local

A full-stack website for a university Software Engineering department, built as a decoupled system: a **Next.js** frontend and a **Node.js/Express** backend, both driven by **Sanity CMS** as the content source.

**Live:** [https://swe-website-backend.vercel.app](https://sw.quest.edu.pk/)

## Architecture

.
├── backend/     # Express API layer (routes → controllers → services → repositories)
└── frontend/    # Next.js 15 app (App Router)

The backend follows a layered architecture:
- Routes define endpoints
- Controllers handle request/response
- Services contain business logic
- Repositories talk to Sanity

This keeps Sanity access isolated from the API surface and makes each layer independently testable.

## Features

Content-driven sections for:
- Hero / landing content
- Faculty & staff profiles
- Courses
- Events
- Alumni
- Research
- Gallery
- Downloads
- OBE (Outcome-Based Education): Vision, PEOs, PLOs, CLOs
- Contact
- On-demand revalidation via a webhook, so content updates in Sanity reflect on the site without a full redeploy

## Tech Stack

Backend:
- Node.js, Express, TypeScript
- Sanity Client (@sanity/client)
- helmet, cors, express-rate-limit for security/hardening
- node-cache for in-memory response caching
- Groq SDK

Frontend:
- Next.js 15 (App Router), React 18, TypeScript
- Sanity Studio embedded at /admin
- Tailwind CSS, Framer Motion, styled-components
- next-sanity, @sanity/image-url

## Prerequisites

- Node.js 18+
- npm
- A Sanity project (Project ID + dataset)

## Setup

### 1. Clone

git clone https://github.com/HafizSyedAhmedAli/Software-Department-Website-Local.git
cd Software-Department-Website-Local

### 2. Backend

cd backend
npm install

Create a .env file:

PORT=5000
NODE_ENV=development
SANITY_PROJECT_ID=your_project_id
SANITY_DATASET=production
SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your_sanity_token
FRONTEND_URL=http://localhost:3000
REVALIDATION_SECRET=your_secret
CACHE_TTL=3600

Run it:

npm run dev      # development (ts-node-dev, hot reload)
npm run build    # compile TypeScript
npm start        # run compiled build

### 3. Frontend

cd frontend
npm install
npm run dev      # http://localhost:3000

Other frontend scripts:

npm run build    # production build
npm start        # start production server
npm run lint     # lint
npm run prod     # build + start

Sanity Studio is available at /admin within the frontend app.

## Project Structure (backend)

backend/src/
├── app.ts
├── server.ts
├── config/          # env, sanity client, cache config
├── routes/          # one router per resource
├── controllers/      # request handling
├── services/         # business logic
├── repositories/     # Sanity data access
├── middleware/        # caching, error handling, 404
└── types/

## Project Structure (frontend)

frontend/
├── app/              # Next.js App Router pages (alumni, courses, events,
│                     # faculty, gallery, research, staff, downloads,
│                     # obe/{vision,peos,plos,clos}, contact, admin)
├── components/
├── lib/
├── animations/
├── sanity/           # Sanity schema/config
└── public/

## Deployment

Configured for Vercel (see backend/vercel.json). Each app (frontend/backend) can be deployed as a separate Vercel project, with the frontend pointed at the backend's deployed URL and the backend's FRONTEND_URL env var pointed back at the frontend for CORS.

## License

No license specified — all rights reserved by the author unless stated otherwise.
