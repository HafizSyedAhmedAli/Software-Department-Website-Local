import { defineType, defineField, defineArrayMember } from "sanity";

export const peoSchema = defineType({
  name: "peo",
  title: "PEOs — Program Educational Objectives",
  type: "document",
  fields: [
    defineField({
      name: "id",
      title: "PEO ID",
      type: "string",
      description: "e.g. PEO-1",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "title",
      title: "PEO Title",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (R) => R.required(),
    }),
  ],
  preview: {
    select: { title: "id", subtitle: "title" },
  },
});

export const ploSchema = defineType({
  name: "plo",
  title: "PLOs — Program Learning Outcomes",
  type: "document",
  fields: [
    defineField({
      name: "id",
      title: "PLO ID",
      type: "string",
      description: "e.g. PLO-1",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "attribute",
      title: "Graduate Attribute",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (R) => R.required(),
    }),
  ],
  preview: {
    select: { title: "id", subtitle: "attribute" },
  },
});

export const visionMissionSchema = defineType({
  name: "visionMission",
  title: "Vision & Mission (Singleton)",
  type: "document",
  fields: [
    defineField({
      name: "vision",
      title: "Department Vision",
      type: "text",
      rows: 4,
      validation: (R) => R.required(),
    }),
    defineField({
      name: "mission",
      title: "Mission Statements",
      type: "array",
      of: [defineArrayMember({ type: "text" })],
      validation: (R) => R.required().min(1),
    }),
    defineField({
      name: "values",
      title: "Core Values",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Value Title",
              type: "string",
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 2,
            }),
          ],
          preview: { select: { title: "title" } },
        }),
      ],
    }),
  ],
});
