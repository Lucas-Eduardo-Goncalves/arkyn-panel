import { z } from "zod";

type ExternalUser = z.infer<typeof externalUserSchema>;

const externalUserSchema = z.object({
  id: z.uuidv7(),
  name: z.string(),
  avatarUrl: z.url(),
  email: z.email(),
  utc: z.number(),
  role: z.enum(["user"]),
  createdAt: z.string(),
  updatedAt: z.string(),
  token: z.string(),
});

export { externalUserSchema, type ExternalUser };
