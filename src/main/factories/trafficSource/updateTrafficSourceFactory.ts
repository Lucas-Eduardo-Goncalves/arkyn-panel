import { UpdateTrafficSourceUseCase } from "~/app/useCases/trafficSource/updateTrafficSourceUseCase";
import { UpdateTrafficSourceController } from "~/infra/controllers/trafficSource/updateTrafficSourceController";
import { TrafficSourceGateway } from "~/infra/gateways/trafficSource";

const trafficSourceGateway = new TrafficSourceGateway();
const updateTrafficSourceUseCase = new UpdateTrafficSourceUseCase(
  trafficSourceGateway
);
const updateTrafficSourceController = new UpdateTrafficSourceController(
  updateTrafficSourceUseCase
);

const updateTrafficSource = {
  handle: updateTrafficSourceController.handle.bind(
    updateTrafficSourceController
  ),
};

export { updateTrafficSource };
