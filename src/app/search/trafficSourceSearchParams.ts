import { SearchParams } from "../shared/searchParams";

type Filter = {
  name?: string;
};

class TrafficSourceSearchParams extends SearchParams<Filter> {}

export { TrafficSourceSearchParams };
