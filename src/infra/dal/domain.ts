import type { DomainSearchParams } from "~/app/search/domainSearchParams";
import { SearchResult } from "~/app/shared/searchResult";
import type { DomainDalDTO } from "~/domain/dal/domain";
import type { Domain } from "~/domain/view/domain";
import { HttpAdapter } from "../adapters/httpAdapter";
import { SchemaValidatorAdapter } from "../adapters/schemaValidatorAdapter";
import { storeMicroservice } from "../http/store";
import { DomainMapper } from "../mappers/domain";
import { externalDomainsSchema } from "../schemas/external/domain";

class DomainDal implements DomainDalDTO {
  async listDomains(
    searchParams: DomainSearchParams,
    token: string
  ): Promise<SearchResult<Domain>> {
    let url = "/domains";
    url += `/${searchParams.filter?.trafficSourceId}`;
    url += searchParams.toExternal(["trafficSourceId"]);

    const apiResponse = await storeMicroservice.get(url, { token });
    if (!apiResponse.success) throw HttpAdapter.badRequest(apiResponse.message);

    const schemaValidator = new SchemaValidatorAdapter(externalDomainsSchema);
    const data = schemaValidator.validate(apiResponse.response);

    return new SearchResult({
      data: data.data.map(DomainMapper.toEntity),
      meta: {
        page: data.meta.page,
        pageLimit: data.meta.pageLimit,
        totalItems: data.meta.totalItems,
      },
    });
  }
}

export { DomainDal };
