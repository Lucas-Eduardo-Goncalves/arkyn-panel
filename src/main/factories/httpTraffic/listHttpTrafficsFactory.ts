import { ListHttpTrafficsUseCase } from "~/app/useCases/httpTraffic/listHttpTrafficsUseCase";
import { ListHttpTrafficsController } from "~/infra/controllers/httpTraffic/listHttpTrafficsController";
import { HttpTrafficDal } from "~/infra/dal/httpTraffic";

const httpTrafficDal = new HttpTrafficDal();
const listHttpTrafficsUseCase = new ListHttpTrafficsUseCase(httpTrafficDal);
const listHttpTrafficsController = new ListHttpTrafficsController(
  listHttpTrafficsUseCase
);

const listHttpTraffics = {
  handle: listHttpTrafficsController.handle.bind(listHttpTrafficsController),
};

export { listHttpTraffics };
