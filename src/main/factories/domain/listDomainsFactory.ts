import { ListDomainsUseCase } from "~/app/useCases/domain/listDomainsUseCase";
import { ListDomainsController } from "~/infra/controllers/domain/listDomainsController";
import { DomainDal } from "~/infra/dal/domain";

const domainDal = new DomainDal();
const listDomainsUseCase = new ListDomainsUseCase(domainDal);
const listDomainsController = new ListDomainsController(listDomainsUseCase);

const listDomains = {
  handle: listDomainsController.handle.bind(listDomainsController),
};

export { listDomains };
