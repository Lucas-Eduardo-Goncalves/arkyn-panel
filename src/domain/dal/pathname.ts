import type { PathnameSearchParams } from "~/app/search/pathnameSearchParams";
import type { SearchResult } from "~/app/shared/searchResult";
import type { Pathname } from "../view/pathname";

type PathnameDalDTO = {
  listPathnames: (
    searchParams: PathnameSearchParams,
    token: string
  ) => Promise<SearchResult<Pathname>>;
};

export type { PathnameDalDTO };
