import { defineType, defineField } from "sanity";

export const staffSchema = defineType({
  name: "staff",
  title: "Administrative Staff",
  type: "document",
  fields: [
    defineField({
      name: "sn",
      title: "Serial Number",
      type: "number",
      validation: (R) => R.required().min(1),
    }),
    defineField({
      name: "name",
      title: "Full Name",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "designation",
      title: "Designation",
      type: "string",
      validation: (R) => R.required(),
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "designation",
    },
  },
});
