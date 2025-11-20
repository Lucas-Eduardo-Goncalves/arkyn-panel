import type { UserGatewayDTO } from "~/domain/gateways/user";

type InputProps = {
  token: string;
};

class ValidateForgotPasswordTokenUseCase {
  constructor(private userGateway: UserGatewayDTO) {}

  async execute(input: InputProps) {
    const { token } = input;
    await this.userGateway.validateForgotPasswordToken(token);
  }
}

export { ValidateForgotPasswordTokenUseCase };
