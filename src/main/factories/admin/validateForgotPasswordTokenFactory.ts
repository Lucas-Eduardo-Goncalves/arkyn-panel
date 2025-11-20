import { ValidateForgotPasswordTokenUseCase } from "~/app/useCases/user/validateForgotPasswordTokenUseCase";
import { ValidateForgotPasswordTokenController } from "~/infra/controllers/user/validateForgotPasswordTokenController";
import { UserGateway } from "~/infra/gateways/user";

const userGateway = new UserGateway();

const validateForgotPasswordTokenUseCase =
  new ValidateForgotPasswordTokenUseCase(userGateway);

const validateForgotPasswordTokenController =
  new ValidateForgotPasswordTokenController(validateForgotPasswordTokenUseCase);

const validateForgotPasswordToken = {
  handle: validateForgotPasswordTokenController.handle.bind(
    validateForgotPasswordTokenController
  ),
};

export { validateForgotPasswordToken };
