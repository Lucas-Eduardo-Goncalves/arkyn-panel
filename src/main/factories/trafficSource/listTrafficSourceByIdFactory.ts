import { ListTrafficSourceByIdUseCase } from "~/app/useCases/trafficSource/listTrafficSourceByIdUseCase";
import { ListTrafficSourceByIdController } from "~/infra/controllers/trafficSource/listTrafficSourceByIdController";
import { TrafficSourceGateway } from "~/infra/gateways/trafficSource";

const trafficSourceGateway = new TrafficSourceGateway();
const listTrafficSourceByIdUseCase = new ListTrafficSourceByIdUseCase(
  trafficSourceGateway
);
const listTrafficSourceByIdController = new ListTrafficSourceByIdController(
  listTrafficSourceByIdUseCase
);

const listTrafficSourceById = {
  handle: listTrafficSourceByIdController.handle.bind(
    listTrafficSourceByIdController
  ),
};

export { listTrafficSourceById };
