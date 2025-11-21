import { loader } from "~/main/routes/route.domains";

type DomainLoader = Awaited<ReturnType<typeof loader>>;

export type { DomainLoader };
