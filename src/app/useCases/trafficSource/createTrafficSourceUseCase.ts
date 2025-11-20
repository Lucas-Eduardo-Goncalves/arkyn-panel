import type { TrafficSourceGatewayDTO } from "~/domain/gateways/trafficSource";

type InputProps = {
  name: string;
  trafficDomain: string;
};

class CreateTrafficSourceUseCase {
  constructor(private trafficSourceGateway: TrafficSourceGatewayDTO) {}

  async execute(input: InputProps, token: string) {
    const { name, trafficDomain } = input;

    await this.trafficSourceGateway.createTrafficSource(
      { name, trafficDomain },
      token
    );

    return {
      closeModal: true,
      message: "Traffic source created successfully",
      type: "success",
    };
  }
}

export { CreateTrafficSourceUseCase };
