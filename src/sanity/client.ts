// Run: npm install next-sanity  then restore this import
// import { createClient } from "next-sanity";
// Placeholder until package is available:
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createClient = (_cfg: any) => ({ fetch: async (_q: string) => null });

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "REPLACE_ME",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2024-01-01",
  useCdn: process.env.NODE_ENV === "production",
});
