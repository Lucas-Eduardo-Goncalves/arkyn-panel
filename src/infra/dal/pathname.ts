import type { PathnameSearchParams } from "~/app/search/pathnameSearchParams";
import { SearchResult } from "~/app/shared/searchResult";
import type { PathnameDalDTO } from "~/domain/dal/pathname";
import type { Pathname } from "~/domain/view/pathname";
import { HttpAdapter } from "../adapters/httpAdapter";
import { SchemaValidatorAdapter } from "../adapters/schemaValidatorAdapter";
import { storeMicroservice } from "../http/store";
import { PathnameMapper } from "../mappers/pathname";
import { externalPathnamesSchema } from "../schemas/external/pathname";

class PathnameDal implements PathnameDalDTO {
  async listPathnames(
    searchParams: PathnameSearchParams,
    token: string
  ): Promise<SearchResult<Pathname>> {
    let url = "/pathnames";
    url += `/${searchParams.filter?.trafficSourceId}`;
    url += `/${searchParams.filter?.domainId}`;
    url += searchParams.toExternal(["trafficSourceId", "domainId"]);

    const apiResponse = await storeMicroservice.get(url, {
      token,
    });

    if (!apiResponse.success) throw HttpAdapter.badRequest(apiResponse.message);

    const schemaValidator = new SchemaValidatorAdapter(externalPathnamesSchema);

    const data = schemaValidator.validate(apiResponse.response);

    return new SearchResult({
      data: data.data.map(PathnameMapper.toEntity),
      meta: {
        page: data.meta.page,
        pageLimit: data.meta.pageLimit,
        totalItems: data.meta.totalItems,
      },
    });
  }
}

export { PathnameDal };
