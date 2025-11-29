import type { Route } from "+/route.signIn";
import { SignInPage } from "~/client/pages/signIn";
import { ErrorHandlerAdapter } from "~/infra/adapters/errorHandlerAdapter";
import { RouteAdapter } from "~/infra/adapters/routeAdapter";
import { signIn } from "../factories/user/signInFactory";

export async function action(props: Route.ActionArgs) {
  try {
    const adaptedRoute = await RouteAdapter.adaptRoute(props);
    return await signIn.handle(adaptedRoute);
  } catch (error) {
    return ErrorHandlerAdapter.handle(error);
  }
}

export default function SignInRoute() {
  return <SignInPage />;
}
