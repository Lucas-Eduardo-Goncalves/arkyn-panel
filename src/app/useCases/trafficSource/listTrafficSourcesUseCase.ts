import { TrafficSourceSearchParams } from "~/app/search/trafficSourceSearchParams";
import type { TrafficSourceGatewayDTO } from "~/domain/gateways/trafficSource";

type InputProps = {
  page?: number;
  pageLimit?: number;
  sort?: string;
  sortDirection?: "asc" | "desc";
  filter: {
    name?: string;
  };
};

class ListTrafficSourcesUseCase {
  constructor(private trafficSourceGateway: TrafficSourceGatewayDTO) {}

  async execute(input: InputProps, token: string) {
    const searchParams = new TrafficSourceSearchParams(input);

    const trafficSources = await this.trafficSourceGateway.listTrafficSources(
      searchParams,
      token
    );

    return trafficSources.toJson();
  }
}

export { ListTrafficSourcesUseCase };
