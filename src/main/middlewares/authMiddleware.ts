import { RedirectServerAdapter } from "~/infra/adapters/redirectServerAdapter";
import { AuthService } from "~/infra/services/authService";
import type { RouteDTO } from "../types/route";

class AuthMiddleware {
  static async authenticate(route: RouteDTO) {
    const user = await AuthService.getAuthStorage(route);
    const refundTo = route.request.url;

    if (user) return user;

    const url = `/sign-in?refundTo=${encodeURIComponent(refundTo)}`;
    throw RedirectServerAdapter.to(url);
  }

  static async getUser(route: RouteDTO) {
    const user = await AuthService.getAuthStorage(route);
    if (!user) return null;
    return user;
  }

  static async logoutUser(route: RouteDTO) {
    return await AuthService.destroyAuthStorage(route);
  }
}

export { AuthMiddleware };
