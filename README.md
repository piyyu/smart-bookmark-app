# Smart Bookmark App

A simple, secure, and real-time bookmark manager built with Next.js 14+, Supabase, and Tailwind CSS.

## Features
- **Authentication**: Google OAuth via Supabase.
- **Realtime**: Instant updates across devices.
- **Privacy**: Row Level Security (RLS) ensures data privacy.
- **Modern UI**: Clean, responsive interface with Tailwind CSS.

## Setup Instructions

### 1. Prerequisites
- Node.js 18+
- A Supabase project

### 2. Environment Variables
Copy `.env.example` to `.env.local` and fill in your Supabase credentials:
```bash
cp .env.example .env.local
```
Update `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.

### 3. Database Setup
Run the SQL script located in `supabase/schema.sql` in your Supabase SQL Editor. This will:
- Create the `bookmarks` table.
- Enable RLS.
- Set up security policies.

### 4. Install Dependencies
```bash
npm install
```

### 5. Run Locally
```bash
npm run dev
```

## Deployment on Vercel
1. Push code to GitHub.
2. Import project into Vercel.
3. Add Environment Variables (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`).
4. Deploy!

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Database**: Supabase (Postgres + Auth + Realtime)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
