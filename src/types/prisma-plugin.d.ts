// ═══════════════════════════════════════════════════
// 📦 Type shim for @prisma/nextjs-monorepo-workaround-plugin
// ═══════════════════════════════════════════════════
// The package ships no .d.ts. Declaring the module silences
// TS7016 without weakening type safety elsewhere.

declare module "@prisma/nextjs-monorepo-workaround-plugin" {
  import type { NextConfig } from "next";

  export class PrismaPlugin {
    constructor();
    apply(compiler: unknown): void;
  }

  // Type-only re-export so consumers can reference the webpack
  // config shape without importing from "next" directly.
  export type { NextConfig };
}
