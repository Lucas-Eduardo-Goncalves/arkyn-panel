import type { SignInUseCase } from "~/app/useCases/user/signInUseCase";
import { DecodeRequestBodyAdapter } from "~/infra/adapters/decodeRequestBodyAdapter";
import { SchemaValidatorAdapter } from "~/infra/adapters/schemaValidatorAdapter";
import { signInSchema } from "~/infra/schemas/internal/user";
import { AuthService } from "~/infra/services/authService";
import type { RouteDTO } from "~/main/types/route";

class SignInController {
  constructor(private signInUseCase: SignInUseCase) {}

  async handle(route: RouteDTO) {
    const body = await DecodeRequestBodyAdapter.decode(route.request);

    const schemaValidator = new SchemaValidatorAdapter(signInSchema);
    const data = schemaValidator.validate(body);
    const [user, token] = await this.signInUseCase.execute(data);

    return await AuthService.setAuthStorage(route, { ...user, token }, "/home");
  }
}

export { SignInController };
