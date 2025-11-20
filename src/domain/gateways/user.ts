import type { User } from "../entities/user";

type AuthUserProps = {
  email: string;
  password: string;
};

type UserGatewayDTO = {
  signIn: (input: AuthUserProps) => Promise<[User, string]>;
  forgotPasswordToken: (email: string) => Promise<void>;
  changePasswordByToken: (token: string, newPassword: string) => Promise<void>;
  validateForgotPasswordToken: (token: string) => Promise<void>;
};

export type { UserGatewayDTO, AuthUserProps };
