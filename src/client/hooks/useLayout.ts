import type { Route } from "+/layout.mainLayout";
import { useMatches } from "react-router";

function useLayout() {
  const matches = useMatches();
  const match = matches.find((m) => m.id === "main/routes/layout.mainLayout");
  if (!match) throw new Error("useLayout must be used within MainLayout");

  const rootData = match?.loaderData as Route.ComponentProps["loaderData"];

  return { user: rootData };
}

export { useLayout };
