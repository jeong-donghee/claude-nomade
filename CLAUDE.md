# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 application for a Korean digital nomad city guide platform. Users can browse cities in South Korea, view detailed information, and like their favorite cities. The app uses Supabase for authentication and database management.

## Tech Stack

- **Framework**: Next.js 16.1.6 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI primitives
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Font**: Noto Sans KR (Korean)

## Development Commands

```bash
# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Architecture

### Directory Structure

- **`/app`**: Next.js App Router pages and routes
  - `/auth/actions.ts`: Server actions for login, signup, logout
  - `/auth/confirm/route.ts`: Email confirmation callback route
  - `/cities/[id]/page.tsx`: Dynamic city detail page
  - `/cities/page.tsx`: City listing page
  - `/login`, `/register`: Authentication pages

- **`/components`**: React components
  - `/ui`: Reusable UI primitives (button, card, input, etc.)
  - `/layout`: Navbar, Footer
  - `/sections`: Page sections (CityCard, CityLikeButton, PopularCitiesSection, etc.)

- **`/lib`**: Core utilities and queries
  - `/queries/cities.ts`: City data queries (server-side)
  - `/queries/city-likes.ts`: Like functionality (client-side)
  - `database.types.ts`: Auto-generated Supabase types
  - `utils.ts`: Utility functions (cn for className merging)

- **`/utils/supabase`**: Supabase client initialization
  - `server.ts`: Server component client (uses cookies)
  - `client.ts`: Browser client
  - `middleware.ts`: Auth session management

- **`/data`**: Type definitions and constants
  - `cities.ts`: CityCard, CityDetail types, filter/sort options

- **`/supabase/migrations`**: Database schema migrations

### Key Architecture Patterns

#### Server vs Client Components

- **Server Components** (default): Used for data fetching from Supabase
  - City listings: `getCitiesWithLikes()` in `lib/queries/cities.ts`
  - City details: `getCityById(id)`
  - Auth actions: `login()`, `signup()`, `logout()` in `app/auth/actions.ts`

- **Client Components**: Used for interactivity
  - Like button: `CityLikeButton.tsx` (uses `'use client'`)
  - City filters: `CityFilterClient.tsx`
  - Navbar user menu: `NavbarClient.tsx`

#### Data Flow for Likes

1. **Initial Load** (Server):
   - `getCitiesWithLikes()` fetches cities with JOIN on `city_likes` table
   - Counts likes using `city.city_likes.length`

2. **Toggle Like** (Client):
   - `toggleCityLike(userId, cityId)` in `lib/queries/city-likes.ts`
   - Checks if like exists, then INSERT or DELETE
   - Client component updates local state immediately
   - Returns `{ success, action: 'added' | 'removed' }`

3. **Real-time Sync**:
   - Like counts are fetched fresh on page navigation
   - No client-side caching issues after server restart

#### Database Schema

- **`cities`** table: City information (name, rating, costs, etc.)
  - Uses JSONB for `pros`, `cons`, `recommended_places`
  - RLS enabled: SELECT allowed for anon + authenticated

- **`city_likes`** table: Many-to-many relationship
  - Composite unique constraint on `(user_id, city_id)`
  - RLS policies: SELECT for all, INSERT/DELETE only for own records
  - Cascading deletes on user or city removal

#### Type Safety

- Database types are auto-generated in `lib/database.types.ts`
- Frontend types in `data/cities.ts` mirror DB schema
- Helper function `mapDbCityToFrontend()` converts snake_case DB → camelCase frontend

## Important Conventions

### Path Alias
- Use `@/*` for absolute imports (maps to project root)
- Example: `import { createClient } from "@/utils/supabase/server"`

### Naming Conventions
- Database: `snake_case` (e.g., `city_likes`, `monthly_cost`)
- Frontend: `camelCase` (e.g., `monthlyCost`, `nameEn`)
- Server actions: Use `"use server"` directive
- Client components: Use `"use client"` directive

### Authentication Flow

1. **Sign Up**:
   - Creates user in Supabase Auth
   - Sends confirmation email
   - Redirects to `/auth/confirm-pending`
   - Email link goes to `/auth/confirm` route

2. **Login**:
   - Uses `signInWithPassword()`
   - Revalidates layout cache
   - Redirects to homepage

3. **Session Management**:
   - Middleware runs on all routes (except static files)
   - `updateSession()` refreshes auth token
   - Server components access user via `supabase.auth.getUser()`

## Environment Variables

Required in `.env.local`:
- `NEXT_PUBLIC_SUPABASE_URL`: Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Supabase anon/public key
- `NEXT_PUBLIC_SITE_URL`: Site URL for email redirects (e.g., `http://localhost:3000`)

## Common Tasks

### Adding a New City Property

1. Update database schema in `supabase/migrations/`
2. Run migration to update DB
3. Regenerate types: `npx supabase gen types typescript --project-id <id> > lib/database.types.ts`
4. Update `CityCard` or `CityDetail` type in `data/cities.ts`
5. Update `mapDbCityToFrontend()` in `lib/queries/cities.ts`

### Creating a New Database Query

- **Server-side** (for RSC): Add to `lib/queries/cities.ts`, use `createClient()` from `utils/supabase/server`
- **Client-side** (for interactions): Add to `lib/queries/city-likes.ts`, use `createClient()` from `utils/supabase/client`

### Adding a Server Action

1. Create in relevant `/app` directory (e.g., `app/auth/actions.ts`)
2. Add `"use server"` directive at top
3. Use `createClient()` from `@/utils/supabase/server`
4. Call `revalidatePath()` if data changes
5. Use `redirect()` for navigation (must be in try/catch or after validation)
