# LearnX Student Dashboard

A futuristic student learning dashboard built using Next.js, Supabase, Tailwind CSS, and Framer Motion for the Frontend Intern Challenge.

## Features

- Dark mode Bento Grid dashboard
- Responsive sidebar and mobile navigation
- Dynamic course data from Supabase
- Hero greeting section
- Activity tracking tile
- Animated course cards
- Framer Motion interactions
- Loading and error states
- Server-side data fetching

## Tech Stack

- Next.js 16 (App Router)
- React
- Tailwind CSS
- Supabase
- Framer Motion
- Lucide React

## Architecture

### Server Components

Course data is fetched from Supabase using Next.js Server Components to keep database access secure and improve performance.

### Client Components

Interactive UI elements such as:

- Sidebar navigation
- Animations
- Hover effects
- Progress indicators

are implemented as Client Components.

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

A sample file is provided in:

```text
.env.example
```

## Installation

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

## Project Structure

```text
src/
├── app/
├── components/
├── lib/
```

## Deployment

The application is designed to be deployed on Vercel.

## Author

Erumalla Sathvika