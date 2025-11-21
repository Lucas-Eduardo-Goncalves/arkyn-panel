import { DomainSearchParams } from "~/app/search/domainSearchParams";
import type { DomainDalDTO } from "~/domain/dal/domain";

type InputProps = {
  page?: number;
  pageLimit?: number;
  sort?: string;
  sortDirection?: "asc" | "desc";
  filter: {
    trafficSourceId: string;
  };
};

class ListDomainsUseCase {
  constructor(private domainDal: DomainDalDTO) {}

  async execute(input: InputProps, token: string) {
    const searchParams = new DomainSearchParams(input);
    const domains = await this.domainDal.listDomains(searchParams, token);
    return domains.toJson();
  }
}

export { ListDomainsUseCase };
