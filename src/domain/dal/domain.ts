import type { DomainSearchParams } from "~/app/search/domainSearchParams";
import type { SearchResult } from "~/app/shared/searchResult";
import type { Domain } from "../view/domain";

type DomainDalDTO = {
  listDomains: (
    searchParams: DomainSearchParams,
    token: string
  ) => Promise<SearchResult<Domain>>;
};

export type { DomainDalDTO };
