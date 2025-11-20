import type { Route } from "+/layout.mainLayout";
import { useMatches } from "react-router";

function useLayout() {
  const matches = useMatches();
  const rootData = matches[0].loaderData as Route.ComponentProps["loaderData"];

  return { user: rootData };
}

export { useLayout };
