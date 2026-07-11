import { defineType, defineField } from "sanity";

export const heroSlideSchema = defineType({
  name: "heroSlide",
  title: "Hero Slides",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Background Image",
      description:
        "Wide, high-quality photo (recommended 1920×1080 or larger). Text sits on the LEFT, so keep the important part of the photo to the right.",
      type: "image",
      options: { hotspot: true },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "eyebrow",
      title: "Eyebrow (small top label)",
      description: 'e.g. "Department of Software Engineering"',
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "headingLine1",
      title: "Heading — Line 1",
      description: 'e.g. "Shape the Future"',
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "headingLine2",
      title: "Heading — Line 2 (gold gradient)",
      description: 'e.g. "With QUEST SWE"',
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "body",
      title: "Description",
      description: "One or two short sentences under the heading.",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "ctaLabel",
      title: "Primary Button Text",
      type: "string",
      initialValue: "Explore Programs",
    }),
    defineField({
      name: "ctaHref",
      title: "Primary Button Link",
      description: 'e.g. "/courses" or "/events"',
      type: "string",
      initialValue: "/courses",
    }),
    defineField({
      name: "ctaSecondaryLabel",
      title: "Secondary Button Text",
      type: "string",
      initialValue: "Contact Us",
    }),
    defineField({
      name: "ctaSecondaryHref",
      title: "Secondary Button Link",
      type: "string",
      initialValue: "/contact",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      description: "1 shows first, 2 second, and so on.",
      type: "number",
      initialValue: 1,
      validation: (R) => R.required().min(1),
    }),
  ],
  preview: {
    select: { title: "headingLine1", subtitle: "headingLine2", media: "image" },
  },
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
