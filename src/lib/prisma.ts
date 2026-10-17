// ═══════════════════════════════════════════════════
// 🗄️ Prisma Client singleton
// ═══════════════════════════════════════════════════
// Prevents connection-pool exhaustion during `next dev` HMR.
// In production, the module graph is only evaluated once,
// so the cached instance is a no-op.

import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["error", "warn"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
