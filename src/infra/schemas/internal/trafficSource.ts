import { z } from "zod";
import { paginationSchema } from "./pagination";

const createTrafficSourceSchema = z.object({
  name: z.string().min(1, "Name is required"),
  trafficDomain: z.url("Invalid domain URL"),
});

const deleteTrafficSourceSchema = z.object({
  id: z.uuid("Traffic source ID is required"),
});

const listTrafficSourcesSchema = paginationSchema.extend({
  name: z.string().optional(),
  sort: z.enum(["name", "createdAt", "updatedAt"]).optional(),
});

const updateTrafficSourceSchema = z.object({
  id: z.uuid("Traffic source ID is required"),
  name: z.string().min(1, "Name is required"),
  trafficDomain: z.url("Invalid domain URL"),
});

export {
  createTrafficSourceSchema,
  deleteTrafficSourceSchema,
  listTrafficSourcesSchema,
  updateTrafficSourceSchema,
};
