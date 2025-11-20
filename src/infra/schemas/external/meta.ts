import z from "zod";

const externalMetaSchema = z.strictObject({
  page: z.number(),
  pageLimit: z.number(),
  totalItems: z.number(),
});

export { externalMetaSchema };
