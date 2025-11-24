import { z } from "zod";
import { externalMetaSchema } from "./meta";

type ExternalTrafficSource = z.infer<typeof externalTrafficSourceSchema>;

const externalTrafficSourceSchema = z.strictObject({
  id: z.string(),
  name: z.string(),
  trafficDomain: z.string(),
  userId: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const externalTrafficSourcesSchema = z.object({
  data: externalTrafficSourceSchema.array(),
  meta: externalMetaSchema,
});

export {
  externalTrafficSourcesSchema,
  externalTrafficSourceSchema,
  type ExternalTrafficSource,
};
