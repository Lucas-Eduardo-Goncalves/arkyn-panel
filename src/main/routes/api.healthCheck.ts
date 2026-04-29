import type { Route } from "+/api.healthCheck";

export async function loader(route: Route.LoaderArgs) {
  const url = new URL(route.request.url);
  const domain = url.searchParams.get("domain");

  if (!domain) return Response.json({ status: "offline" });

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    const response = await fetch(domain + "/health-check", {
      method: "HEAD",
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (response.status === 404) return Response.json({ status: "not-found" });
    if (response.status >= 500) return Response.json({ status: "offline" });
    if (response.status === 200) return Response.json({ status: "online" });

    return Response.json({ status: "offline" });
  } catch {
    return Response.json({ status: "offline" });
  }
}
