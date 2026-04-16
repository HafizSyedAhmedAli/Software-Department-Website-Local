import { facultySchema } from "./faculty";
import { staffSchema } from "./staff";
import { eventSchema } from "./event";
import { downloadSchema } from "./download";
import { galleryItemSchema } from "./gallery";
import { courseSchema } from "./course";
import { peoSchema, ploSchema, visionMissionSchema } from "./obe";
import { siteSettingsSchema } from "./siteSettings";

export const schemaTypes = [
  // People
  facultySchema,
  staffSchema,

  // Content
  eventSchema,
  downloadSchema,
  galleryItemSchema,

  // Academic
  courseSchema,
  peoSchema,
  ploSchema,

  // Singletons
  visionMissionSchema,
  siteSettingsSchema,
];
