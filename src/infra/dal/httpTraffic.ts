import type { HttpTrafficSearchParams } from "~/app/search/httpTrafficSearchParams";
import { SearchResult } from "~/app/shared/searchResult";
import type { HttpTrafficDalDTO } from "~/domain/dal/httpTraffic";
import type { HttpTraffic } from "~/domain/view/httpTraffic";
import { HttpAdapter } from "../adapters/httpAdapter";
import { SchemaValidatorAdapter } from "../adapters/schemaValidatorAdapter";
import { storeMicroservice } from "../http/store";
import { HttpTrafficMapper } from "../mappers/httpTraffic";
import { externalHttpTrafficsSchema } from "../schemas/external/httpTraffic";

class HttpTrafficDal implements HttpTrafficDalDTO {
  async listHttpTraffics(
    searchParams: HttpTrafficSearchParams,
    token: string
  ): Promise<SearchResult<HttpTraffic>> {
    let url = "/http-traffics";
    url += `/${searchParams.filter?.trafficSourceId}`;
    url += searchParams.toExternal(["trafficSourceId"]);

    const apiResponse = await storeMicroservice.get(url, { token });
    if (!apiResponse.success) throw HttpAdapter.badRequest(apiResponse.message);

    const schemaValidator = new SchemaValidatorAdapter(
      externalHttpTrafficsSchema
    );

    const data = schemaValidator.validate(apiResponse.response);

    return new SearchResult({
      data: data.data.map(HttpTrafficMapper.toEntity),
      meta: {
        page: data.meta.page,
        pageLimit: data.meta.pageLimit,
        totalItems: data.meta.totalItems,
      },
    });
  }
}

export { HttpTrafficDal };
