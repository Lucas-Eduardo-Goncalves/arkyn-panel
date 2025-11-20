import { SignInUseCase } from "~/app/useCases/user/signInUseCase";
import { SignInController } from "~/infra/controllers/user/signInController";
import { UserGateway } from "~/infra/gateways/user";

const userGateway = new UserGateway();
const signInUseCase = new SignInUseCase(userGateway);
const signInController = new SignInController(signInUseCase);

const signIn = {
  handle: signInController.handle.bind(signInController),
};

export { signIn };
