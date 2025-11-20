import { DeleteTrafficSourceUseCase } from "~/app/useCases/trafficSource/deleteTrafficSourceUseCase";
import { DeleteTrafficSourceController } from "~/infra/controllers/trafficSource/deleteTrafficSourceController";
import { TrafficSourceGateway } from "~/infra/gateways/trafficSource";

const trafficSourceGateway = new TrafficSourceGateway();
const deleteTrafficSourceUseCase = new DeleteTrafficSourceUseCase(
  trafficSourceGateway
);
const deleteTrafficSourceController = new DeleteTrafficSourceController(
  deleteTrafficSourceUseCase
);

const deleteTrafficSource = {
  handle: deleteTrafficSourceController.handle.bind(
    deleteTrafficSourceController
  ),
};

export { deleteTrafficSource };
