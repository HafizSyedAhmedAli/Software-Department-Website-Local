import { defineType, defineField } from "sanity";

export const eventSchema = defineType({
  name: "event",
  title: "News & Events",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Event Title",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "summary",
      title: "Summary",
      description: "Short text shown on the event card (2–3 lines).",
      type: "text",
      rows: 4,
      validation: (R) => R.required(),
    }),
    defineField({
      name: "description",
      title: "Full Description",
      description:
        "Optional long description shown when the event is opened. If empty, the summary is shown instead.",
      type: "text",
      rows: 10,
    }),
    defineField({
      name: "date",
      title: "Event Date",
      type: "date",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "image",
      title: "Cover Image",
      description: "Main image shown on the event card.",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "images",
      title: "Gallery Images",
      description:
        "Optional extra photos. When an event has multiple images, visitors can swipe through them.",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "date",
      media: "image",
    },
  },
  orderings: [
    {
      title: "Newest First",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
  ],
});