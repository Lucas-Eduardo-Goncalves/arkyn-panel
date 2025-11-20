import type { ValidateForgotPasswordTokenUseCase } from "~/app/useCases/user/validateForgotPasswordTokenUseCase";
import { HttpAdapter } from "~/infra/adapters/httpAdapter";
import type { RouteDTO } from "~/main/types/route";

class ValidateForgotPasswordTokenController {
  constructor(
    private validateForgotPasswordTokenUseCase: ValidateForgotPasswordTokenUseCase
  ) {}

  async handle(route: RouteDTO) {
    const forgotPasswordToken = route.params?.forgotPasswordToken;

    if (!forgotPasswordToken) {
      throw HttpAdapter.notFound("Forgot password token is required");
    }

    await this.validateForgotPasswordTokenUseCase.execute({
      token: forgotPasswordToken,
    });
  }
}

export { ValidateForgotPasswordTokenController };
