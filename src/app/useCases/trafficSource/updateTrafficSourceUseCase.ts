import type { TrafficSourceGatewayDTO } from "~/domain/gateways/trafficSource";

type InputProps = {
  id: string;
  name: string;
  trafficDomain: string;
};

class UpdateTrafficSourceUseCase {
  constructor(private trafficSourceGateway: TrafficSourceGatewayDTO) {}

  async execute(input: InputProps, token: string) {
    await this.trafficSourceGateway.updateTrafficSource(input, token);

    return {
      closeModal: true,
      message: "Traffic source updated successfully",
      type: "success",
    };
  }
}

export { UpdateTrafficSourceUseCase };
