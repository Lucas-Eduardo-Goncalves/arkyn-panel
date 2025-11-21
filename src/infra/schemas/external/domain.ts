import { z } from "zod";
import { externalMetaSchema } from "./meta";

type ExternalDomain = z.infer<typeof externalDomainSchema>;

const externalDomainSchema = z.strictObject({
  id: z.string(),
  value: z.string(),
  protocol: z.enum(["http", "https"]),
  trafficSourceId: z.string(),
  createdAt: z.string(),
});

const externalDomainsSchema = z.object({
  data: externalDomainSchema.array(),
  meta: externalMetaSchema,
});

export { externalDomainsSchema, type ExternalDomain };
