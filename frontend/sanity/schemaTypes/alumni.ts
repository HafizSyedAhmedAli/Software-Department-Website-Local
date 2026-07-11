import { defineType, defineField } from "sanity";

export const alumniSchema = defineType({
  name: "alumnus",
  title: "Alumni",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Full Name",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "batch",
      title: "Batch / Graduation Year",
      description: 'e.g. "Batch 2020" or "Class of 2024"',
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "designation",
      title: "Current Designation",
      description: 'e.g. "Software Engineer"',
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "company",
      title: "Company / Organisation",
      description: 'e.g. "Systems Limited" or "10Pearls"',
      type: "string",
    }),
    defineField({
      name: "location",
      title: "Location",
      description: 'e.g. "Karachi, Pakistan" or "Dubai, UAE"',
      type: "string",
    }),
    defineField({
      name: "photo",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "quote",
      title: "Testimonial / Message",
      description: "A short message about their time at the department.",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "linkedin",
      title: "LinkedIn Profile URL",
      type: "url",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      description: "Lower numbers show first.",
      type: "number",
      initialValue: 100,
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "designation", media: "photo" },
  },
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
