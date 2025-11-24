import { CreateTrafficSourceUseCase } from "~/app/useCases/trafficSource/createTrafficSourceUseCase";
import { CreateTrafficSourceController } from "~/infra/controllers/trafficSource/createTrafficSourceController";
import { TrafficSourceGateway } from "~/infra/gateways/trafficSource";

const trafficSourceGateway = new TrafficSourceGateway();
const createTrafficSourceUseCase = new CreateTrafficSourceUseCase(
  trafficSourceGateway
);
const createTrafficSourceController = new CreateTrafficSourceController(
  createTrafficSourceUseCase
);

const createTrafficSource = {
  handle: createTrafficSourceController.handle.bind(
    createTrafficSourceController
  ),
};

export { createTrafficSource };
