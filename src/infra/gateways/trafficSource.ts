import type { TrafficSourceSearchParams } from "~/app/search/trafficSourceSearchParams";
import { SearchResult } from "~/app/shared/searchResult";
import type { TrafficSource } from "~/domain/entities/trafficSource";
import type {
  CreateTrafficSourceProps,
  TrafficSourceGatewayDTO,
  UpdateTrafficSourceProps,
} from "~/domain/gateways/trafficSource";
import { HttpAdapter } from "../adapters/httpAdapter";
import { SchemaValidatorAdapter } from "../adapters/schemaValidatorAdapter";
import { storeMicroservice } from "../http/store";
import { TrafficSourceMapper } from "../mappers/trafficSource";
import { externalTrafficSourcesSchema } from "../schemas/external/trafficSource";

class TrafficSourceGateway implements TrafficSourceGatewayDTO {
  async listTrafficSources(
    searchParams: TrafficSourceSearchParams,
    token: string
  ): Promise<SearchResult<TrafficSource>> {
    let url = "/traffic-sources";
    url += searchParams.toExternal();

    const apiResponse = await storeMicroservice.get(url, {
      token,
    });

    if (!apiResponse.success) throw HttpAdapter.badRequest(apiResponse.message);

    const schemaValidator = new SchemaValidatorAdapter(
      externalTrafficSourcesSchema
    );

    const data = schemaValidator.validate(apiResponse.response);

    return new SearchResult({
      data: data.data.map(TrafficSourceMapper.toEntity),
      meta: {
        page: data.meta.page,
        pageLimit: data.meta.pageLimit,
        totalItems: data.meta.totalItems,
      },
    });
  }

  async createTrafficSource(
    body: CreateTrafficSourceProps,
    token: string
  ): Promise<void> {
    const apiResponse = await storeMicroservice.post("/traffic-sources", {
      body,
      token,
    });

    if (!apiResponse.success) throw HttpAdapter.badRequest(apiResponse.message);
  }

  async updateTrafficSource(
    { id, ...body }: UpdateTrafficSourceProps,
    token: string
  ): Promise<void> {
    const apiResponse = await storeMicroservice.put(`/traffic-sources/${id}`, {
      body,
      token,
    });

    if (!apiResponse.success) throw HttpAdapter.badRequest(apiResponse.message);
  }

  async deleteTrafficSource(id: string, token: string): Promise<void> {
    const apiResponse = await storeMicroservice.delete(
      `/traffic-sources/${id}`,
      { token }
    );

    if (!apiResponse.success) throw HttpAdapter.badRequest(apiResponse.message);
  }
}

export { TrafficSourceGateway };
