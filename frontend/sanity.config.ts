import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemaTypes";

const SINGLETONS = new Set(["visionMission", "siteSettings"]);

export default defineConfig({
  name: "swe-quest-studio",
  title: "SWE QUEST — Content Studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  basePath: "/studio",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            // ── People ──
            S.listItem()
              .title("People")
              .child(
                S.list()
                  .title("People")
                  .items([
                    S.documentTypeListItem("faculty").title("Faculty Members"),
                    S.documentTypeListItem("staff").title(
                      "Administrative Staff",
                    ),
                  ]),
              ),
            S.divider(),
            // ── Content ──
            S.documentTypeListItem("event").title("News & Events"),
            S.documentTypeListItem("download").title("Downloads"),
            S.documentTypeListItem("galleryItem").title("Gallery"),
            S.divider(),
            // ── Academic / OBE ──
            S.listItem()
              .title("Academic (OBE)")
              .child(
                S.list()
                  .title("Academic")
                  .items([
                    S.documentTypeListItem("course").title("Courses & CLOs"),
                    S.documentTypeListItem("peo").title("PEOs"),
                    S.documentTypeListItem("plo").title("PLOs"),
                  ]),
              ),
            S.divider(),
            // ── Singletons ──
            S.listItem()
              .title("Vision & Mission")
              .child(
                S.document()
                  .schemaType("visionMission")
                  .documentId("visionMission"),
              ),
            S.listItem()
              .title("Site Settings")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings"),
              ),
          ]),
    }),
    visionTool(),
  ],
  schema: { types: schemaTypes },
  document: {
    // Hide singletons from "new document" menu
    newDocumentOptions: (prev) =>
      prev.filter((opt) => !SINGLETONS.has(opt.templateId)),
    actions: (prev, { schemaType }) =>
      SINGLETONS.has(schemaType)
        ? prev.filter(({ action }) => action !== "duplicate")
        : prev,
  },
});
