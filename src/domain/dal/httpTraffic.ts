import type { HttpTrafficSearchParams } from "~/app/search/httpTrafficSearchParams";
import type { SearchResult } from "~/app/shared/searchResult";
import type { HttpTraffic } from "../view/httpTraffic";

type HttpTrafficDalDTO = {
  listHttpTraffics: (
    searchParams: HttpTrafficSearchParams,
    token: string
  ) => Promise<SearchResult<HttpTraffic>>;
};

export type { HttpTrafficDalDTO };
