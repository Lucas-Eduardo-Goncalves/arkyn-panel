import { ListHttpTrafficRecordUseCase } from "~/app/useCases/httpTrafficRecord/listHttpTrafficRecordUseCase";
import { ListHttpTrafficRecordController } from "~/infra/controllers/httpTrafficRecord/listHttpTrafficRecordController";
import { HttpTrafficRecordDal } from "~/infra/dal/httpTrafficRecord";

const httpTrafficRecordDal = new HttpTrafficRecordDal();
const listHttpTrafficRecordUseCase = new ListHttpTrafficRecordUseCase(
  httpTrafficRecordDal
);
const listHttpTrafficRecordController = new ListHttpTrafficRecordController(
  listHttpTrafficRecordUseCase
);

const listHttpTrafficRecord = {
  handle: listHttpTrafficRecordController.handle.bind(
    listHttpTrafficRecordController
  ),
};

export { listHttpTrafficRecord };
