import type { TrafficSourceGatewayDTO } from "~/domain/gateways/trafficSource";

class ListTrafficSourceByIdUseCase {
  constructor(private trafficSourceGateway: TrafficSourceGatewayDTO) {}

  async execute(trafficSourceId: string, token: string) {
    const trafficSources = await this.trafficSourceGateway.listById(
      trafficSourceId,
      token
    );

    return trafficSources.toJson();
  }
}

export { ListTrafficSourceByIdUseCase };
