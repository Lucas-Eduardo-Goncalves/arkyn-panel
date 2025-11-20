import type { TrafficSourceGatewayDTO } from "~/domain/gateways/trafficSource";

class DeleteTrafficSourceUseCase {
  constructor(private trafficSourceGateway: TrafficSourceGatewayDTO) {}

  async execute(trafficSourceId: string, token: string) {
    await this.trafficSourceGateway.deleteTrafficSource(trafficSourceId, token);

    return {
      closeModal: true,
      message: "Traffic source deleted successfully",
      type: "success",
    };
  }
}

export { DeleteTrafficSourceUseCase };
