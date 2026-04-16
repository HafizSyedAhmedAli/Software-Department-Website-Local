import { defineType, defineField } from "sanity";

export const siteSettingsSchema = defineType({
  name: "siteSettings",
  title: "Site Settings (Singleton)",
  type: "document",
  fields: [
    defineField({
      name: "email",
      title: "Department Email",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "phone",
      title: "Primary Phone",
      type: "string",
    }),
    defineField({
      name: "phone2",
      title: "Secondary Phone / Extension",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Full Address",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "facebook",
      title: "Facebook URL",
      type: "url",
    }),
    defineField({
      name: "twitter",
      title: "Twitter URL",
      type: "url",
    }),
    defineField({
      name: "linkedin",
      title: "LinkedIn URL",
      type: "url",
    }),
    defineField({
      name: "mapEmbed",
      title: "Google Maps Embed URL",
      type: "url",
    }),
  ],
});
