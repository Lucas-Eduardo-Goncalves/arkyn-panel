import { ListTrafficSourcesUseCase } from "~/app/useCases/trafficSource/listTrafficSourcesUseCase";
import { ListTrafficSourcesController } from "~/infra/controllers/trafficSource/listTrafficSourcesController";
import { TrafficSourceGateway } from "~/infra/gateways/trafficSource";

const trafficSourceGateway = new TrafficSourceGateway();
const listTrafficSourcesUseCase = new ListTrafficSourcesUseCase(
  trafficSourceGateway
);
const listTrafficSourcesController = new ListTrafficSourcesController(
  listTrafficSourcesUseCase
);

const listTrafficSources = {
  handle: listTrafficSourcesController.handle.bind(
    listTrafficSourcesController
  ),
};

export { listTrafficSources };
