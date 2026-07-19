import { createClient } from "@sanity/client";
import { ENV } from "./env";

export const sanityClient = createClient({
  projectId: ENV.SANITY_PROJECT_ID,
  dataset: ENV.SANITY_DATASET,
  apiVersion: ENV.SANITY_API_VERSION,
  useCdn: ENV.NODE_ENV === "production",
  token: ENV.SANITY_API_TOKEN,
  // Only ever return PUBLISHED documents.
  // Without this, a document that has unsaved draft edits is returned twice
  // (draft + published), causing duplicate entries on the website.
  perspective: "published",
});