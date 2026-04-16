import { defineType, defineField } from "sanity";

export const downloadSchema = defineType({
  name: "download",
  title: "Downloads",
  type: "document",
  fields: [
    defineField({
      name: "description",
      title: "File Description",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "date",
      title: "Upload Date",
      type: "date",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "fileType",
      title: "File Type",
      type: "string",
      options: {
        list: ["PDF", "DOCX", "DOC", "XLSX", "XLS", "PPT", "PPTX"],
      },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "file",
      title: "File Upload",
      type: "file",
      validation: (R) => R.required(),
    }),
  ],
  preview: {
    select: {
      title: "description",
      subtitle: "fileType",
    },
  },
});
