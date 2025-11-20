import type { User } from "~/domain/entities/user";
import type { AuthUserProps, UserGatewayDTO } from "~/domain/gateways/user";
import { HttpAdapter } from "../adapters/httpAdapter";
import { SchemaValidatorAdapter } from "../adapters/schemaValidatorAdapter";
import { authMicroservice } from "../http/auth";
import { UserMapper } from "../mappers/user";
import { externalUserSchema } from "../schemas/external/user";

class UserGateway implements UserGatewayDTO {
  async signIn(body: AuthUserProps): Promise<[User, string]> {
    const apiResponse = await authMicroservice.post("/auth", { body });
    if (!apiResponse.success) throw HttpAdapter.badRequest(apiResponse.message);

    const schemaValidator = new SchemaValidatorAdapter(externalUserSchema);
    const data = schemaValidator.validate(apiResponse.response);

    return [UserMapper.toEntity(data), data.token];
  }

  async forgotPasswordToken(email: string): Promise<void> {
    const url = `/forgot-password-token/email/${email}`;
    const apiResponse = await authMicroservice.post(url);
    if (!apiResponse.success) throw HttpAdapter.badRequest(apiResponse.message);
  }

  async changePasswordByToken(token: string, password: string): Promise<void> {
    const url = `/change-password-by-token/token/${token}`;
    const apiResponse = await authMicroservice.post(url, {
      body: { password },
    });
    if (!apiResponse.success) throw HttpAdapter.badRequest(apiResponse.message);
  }

  async validateForgotPasswordToken(token: string): Promise<void> {
    const url = `/validate-forgot-password-token/token/${token}`;
    const apiResponse = await authMicroservice.post(url);
    if (!apiResponse.success) throw HttpAdapter.badRequest(apiResponse.message);
  }
}

export { UserGateway };
