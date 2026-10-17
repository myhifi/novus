# Novus

A production-grade Next.js 16 e-commerce platform (the rewrite of a legacy MERN storefront, kept in `../front`, `../admin`, `../back` as reference).

**Status:** Phase 1 complete — scaffold + audit.

> **Note on the folder name:** The repository and local folder are named `e-shop` for consistency with other portfolio modules, but the official user-facing brand is **Novus**.

## Stack

Next.js 16 (App Router) · TypeScript · Prisma 6 · Neon PostgreSQL ·
Tailwind CSS 4 · Vercel

## Getting started

```bash
cp .env.example .env      # fill in Neon DATABASE_URL + DIRECT_URL
npm install
npm run dev