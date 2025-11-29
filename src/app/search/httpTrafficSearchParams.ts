import { SearchParams } from "../shared/searchParams";

type Filter = {
  id?: string;
  method?: "get" | "post" | "put" | "delete" | "patch";
  level?: "info" | "warning" | "fatal";
  status?: number;
  protocol?: "https" | "http";
  trafficSourceId: string;
};

class HttpTrafficSearchParams extends SearchParams<Filter> {}

export { HttpTrafficSearchParams };
