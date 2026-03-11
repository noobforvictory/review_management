## ReviewFlow – Google Review Funnel SaaS

This repo contains **ReviewFlow**, a small SaaS for local businesses that:

- Automatically asks customers for Google reviews after a visit.
- Sends unhappy customers to a **private feedback form** instead of Google.
- Shows the owner a simple **dashboard** with review stats.

The product and build plan are defined in `doc.md`.

### Tech stack

- **Frontend / Backend**: Next.js App Router (in `web/`)
- **Styling**: Tailwind CSS (Next.js `app-tw` template)
- **Database & auth**: Supabase (to be wired up)
- **Payments**: Stripe (planned)
- **Email notifications**: Resend (planned)
- **Google Business Profile API**: Google Cloud (planned)

### App structure (v1 scaffold)

The Next.js app lives in `web/` and currently exposes:

- `/` – marketing landing page with clear positioning and CTA.
- `/auth/sign-up` – email/password sign-up form (not wired to Supabase yet).
- `/auth/sign-in` – login form (not wired yet).
- `/onboarding` – outlines the business + Google connection onboarding flow.
- `/dashboard` – sample dashboard with dummy stats and private feedback list.
- `/r/[slug]` – **review funnel page**:
  - 4–5 stars → redirects customer to a Google review URL.
  - 1–3 stars → shows a private feedback text area and posts to `/api/feedback`.
- `/api/feedback` – API route that accepts private feedback and currently just logs it on the server (placeholder for Supabase + Resend).

### Getting started locally

```bash
cd web
npm install
npm run dev
```

Then open `http://localhost:3000` in your browser.

### Running with Docker

Build and run the app via Docker:

```bash
cp web/.env.example web/.env   # then fill in values as needed
docker compose up --build
```

The app will be available at `http://localhost:3000`.

### Next implementation steps

- Wire `/auth/*` pages to Supabase auth.
- Define Supabase schema for businesses, locations, and private feedback.
- Implement email notifications via Resend in `/api/feedback`.
- Add Stripe billing page and subscription model.
- Apply for Google Business Profile API access and connect dashboard stats.

