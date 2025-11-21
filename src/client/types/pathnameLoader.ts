import { loader } from "~/main/routes/route.pathnames";

type PathnameLoader = Awaited<ReturnType<typeof loader>>;

export type { PathnameLoader };
