import { z } from "zod";
import { externalMetaSchema } from "./meta";

type ExternalPathname = z.infer<typeof externalPathnameSchema>;

const externalPathnameSchema = z.strictObject({
  id: z.string(),
  value: z.string(),
  domainId: z.string(),
  trafficSourceId: z.string(),
  createdAt: z.string(),
});

const externalPathnamesSchema = z.object({
  data: externalPathnameSchema.array(),
  meta: externalMetaSchema,
});

export { externalPathnamesSchema, type ExternalPathname };
