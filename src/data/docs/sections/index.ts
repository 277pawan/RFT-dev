import type { DocSection } from "@/data/docs";
import { introduction } from "./introduction";
import { quickStart } from "./quick-start";
import { formSchema } from "./form-schema";
import { fields } from "./fields";
import { formboxProps } from "./formbox-props";
import { apiReference } from "./api-reference";
import { validation } from "./validation";
import { submission } from "./submission";
import { conditionalFields } from "./conditional-fields";
import { styling } from "./styling";

export const docsSections: DocSection[] = [
  introduction,
  quickStart,
  formSchema,
  fields,
  formboxProps,
  apiReference,
  validation,
  submission,
  conditionalFields,
  styling,
];

