import { defineType, defineField } from "sanity";

export const galleryItemSchema = defineType({
  name: "galleryItem",
  title: "Gallery",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Image Title",
      type: "string",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Lab", value: "lab" },
          { title: "Classroom", value: "classroom" },
          { title: "Welcome Events", value: "welcome" },
          { title: "QSES Events", value: "qses" },
          { title: "Others", value: "others" },
        ],
        layout: "radio",
      },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "image",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
      validation: (R) => R.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "image",
    },
  },
});
