import type { UserGatewayDTO } from "~/domain/gateways/user";

type InputProps = {
  email: string;
  password: string;
};

class SignInUseCase {
  constructor(private userGateway: UserGatewayDTO) {}

  async execute(input: InputProps) {
    const { password, email } = input;
    const [user, token] = await this.userGateway.signIn({ password, email });

    return [user.toJson(), token] as const;
  }
}

export { SignInUseCase };
