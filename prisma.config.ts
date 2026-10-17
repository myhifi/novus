// ═══════════════════════════════════════════════════
// ⚙️ Prisma 6 configuration
// ═══════════════════════════════════════════════════
// dotenv/config is required: Prisma 6 no longer auto-loads
// .env when using prisma.config.ts.
//
// The fallback URL prevents `prisma generate` from failing
// in CI where no real DATABASE_URL is provided.

import "dotenv/config";
import { defineConfig } from "prisma/config";

const FALLBACK_URL =
  "postgresql://placeholder:placeholder@localhost:5432/placeholder";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: process.env.DATABASE_URL ?? FALLBACK_URL,
  },
});
