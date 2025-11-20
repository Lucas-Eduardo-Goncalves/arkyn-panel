import { RedirectServerAdapter } from "~/infra/adapters/redirectServerAdapter";
import { AuthService } from "~/infra/services/authService";
import type { RouteDTO } from "../types/route";
import { User } from "~/domain/entities/user";

class AuthMiddleware {
  static async authenticate(route: RouteDTO) {
    const user = await AuthService.getAuthStorage(route);
    if (!user) throw RedirectServerAdapter.to("/sign-in");
    return User.restore(user);
  }

  static async getUser(route: RouteDTO) {
    const user = await AuthService.getAuthStorage(route);
    if (!user) return null;
    return User.restore(user);
  }

  static async logoutUser(route: RouteDTO) {
    return await AuthService.destroyAuthStorage(route);
  }
}

export { AuthMiddleware };
