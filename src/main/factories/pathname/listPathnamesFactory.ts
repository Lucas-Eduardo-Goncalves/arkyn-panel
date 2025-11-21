import { ListPathnamesUseCase } from "~/app/useCases/pathname/listPathnamesUseCase";
import { ListPathnamesController } from "~/infra/controllers/pathname/listPathnamesController";
import { PathnameDal } from "~/infra/dal/pathname";

const pathnameDal = new PathnameDal();
const listPathnamesUseCase = new ListPathnamesUseCase(pathnameDal);
const listPathnamesController = new ListPathnamesController(
  listPathnamesUseCase
);

const listPathnames = {
  handle: listPathnamesController.handle.bind(listPathnamesController),
};

export { listPathnames };
