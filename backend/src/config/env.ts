import dotenv from "dotenv";
dotenv.config();

function requireEnv(key: string): string {
  const val = process.env[key];
  if (!val) throw new Error(`Missing required env variable: ${key}`);
  return val;
}

export const ENV = {
  PORT: process.env.PORT ?? "5000",
  NODE_ENV: process.env.NODE_ENV ?? "development",
  SANITY_PROJECT_ID: requireEnv("SANITY_PROJECT_ID"),
  SANITY_DATASET: process.env.SANITY_DATASET ?? "production",
  SANITY_API_VERSION: process.env.SANITY_API_VERSION ?? "2024-01-01",
  SANITY_API_TOKEN: process.env.SANITY_API_TOKEN,
  FRONTEND_URL: process.env.FRONTEND_URL ?? "http://localhost:3000",
  REVALIDATION_SECRET: process.env.REVALIDATION_SECRET ?? "",
  CACHE_TTL: parseInt(process.env.CACHE_TTL ?? "3600"),
} as const;
