import { DomainSearchParams } from "~/app/search/domainSearchParams";
import type { DomainDalDTO } from "~/domain/dal/domain";

type InputProps = {
  page?: number;
  pageLimit?: number;
  sort?: string;
  sortDirection?: "asc" | "desc";
};

class ListDomainsUseCase {
  constructor(private domainGateway: DomainDalDTO) {}

  async execute(input: InputProps, token: string) {
    const searchParams = new DomainSearchParams(input);
    const domains = await this.domainGateway.listDomains(searchParams, token);
    return domains.toJson();
  }
}

export { ListDomainsUseCase };
