import { SearchParams } from "../shared/searchParams";

type Filter = {
  domainId: string;
  trafficSourceId: string;
};

class PathnameSearchParams extends SearchParams<Filter> {}

export { PathnameSearchParams };
