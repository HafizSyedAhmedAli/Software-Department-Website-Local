import { defineType, defineField } from "sanity";

export const researchItemSchema = defineType({
  name: "researchItem",
  title: "Research & Publications",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "Title of the publication, project, or research work.",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "kind",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Journal Publication", value: "journal" },
          { title: "Conference Paper", value: "conference" },
          { title: "Research Project", value: "project" },
          { title: "Book / Chapter", value: "book" },
        ],
        layout: "radio",
      },
      initialValue: "journal",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "authors",
      title: "Authors",
      description: 'e.g. "P. Kumar, R. N. Memon, F. A. Memon"',
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "venue",
      title: "Journal / Conference / Funding Body",
      description: 'e.g. "IEEE Access" or "HEC NRPU Project"',
      type: "string",
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "number",
      validation: (R) => R.required().min(2000).max(2100),
    }),
    defineField({
      name: "area",
      title: "Research Area",
      description: 'e.g. "Artificial Intelligence", "Cybersecurity"',
      type: "string",
    }),
    defineField({
      name: "link",
      title: "Link (DOI / URL)",
      type: "url",
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "authors" },
  },
  orderings: [
    {
      title: "Newest First",
      name: "yearDesc",
      by: [{ field: "year", direction: "desc" }],
    },
  ],
});
