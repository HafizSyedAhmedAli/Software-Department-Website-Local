import { defineType, defineField, defineArrayMember } from "sanity";

export const courseSchema = defineType({
  name: "course",
  title: "Courses (OBE)",
  type: "document",
  fields: [
    defineField({
      name: "code",
      title: "Course Code",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "name",
      title: "Course Name",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "creditHours",
      title: "Credit Hours",
      type: "number",
      validation: (R) => R.required().min(1).max(6),
    }),
    defineField({
      name: "semester",
      title: "Semester",
      type: "number",
      options: {
        list: [1, 2, 3, 4, 5, 6, 7, 8],
      },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "type",
      title: "Course Type",
      type: "string",
      options: {
        list: ["Core", "Elective", "Lab", "Project"],
      },
      initialValue: "Core",
    }),
    defineField({
      name: "clos",
      title: "Course Learning Outcomes (CLOs)",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "clo",
              title: "CLO ID",
              type: "string",
              description: "e.g. CLO-1, CLO-2",
            }),
            defineField({
              name: "description",
              title: "CLO Description",
              type: "text",
              rows: 3,
            }),
            defineField({
              name: "domain",
              title: "Learning Domain",
              type: "string",
              options: {
                list: ["Cognitive", "Psychomotor", "Affective"],
              },
            }),
            defineField({
              name: "taxonomy",
              title: "Bloom's Taxonomy Level",
              type: "string",
              description: "e.g. C1, C2, C3, P1, A2",
            }),
            defineField({
              name: "plo",
              title: "Mapped PLO",
              type: "string",
              description: "e.g. PLO-1, PLO-3",
            }),
          ],
          preview: {
            select: { title: "clo", subtitle: "description" },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "code",
    },
  },
  orderings: [
    {
      title: "By Semester",
      name: "semesterAsc",
      by: [
        { field: "semester", direction: "asc" },
        { field: "code", direction: "asc" },
      ],
    },
  ],
});
