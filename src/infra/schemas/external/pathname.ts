import { z } from "zod";
import { externalMetaSchema } from "./meta";

type ExternalPathname = z.infer<typeof externalPathnameSchema>;

const externalPathnameSchema = z.strictObject({
  id: z.uuidv7(),
  value: z.string(),
  domainId: z.uuidv7(),
  trafficSourceId: z.uuidv7(),
  createdAt: z.string(),
});

const externalPathnamesSchema = z.object({
  data: externalPathnameSchema.array(),
  meta: externalMetaSchema,
});

export { externalPathnamesSchema, type ExternalPathname };
