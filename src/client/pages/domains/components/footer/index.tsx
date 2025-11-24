import { useLoaderData } from "react-router";
import type { DomainLoader } from "~/client/types/domainLoader";
import { Container } from "./styles";

function Footer() {
  const {
    domains: { meta },
  } = useLoaderData<DomainLoader>();

  const page = meta.page;
  const lastPage = Math.ceil(meta.totalItems / meta.pageLimit);

  return (
    <Container>
      <p>
        Showing {page} of {lastPage} pages
      </p>
    </Container>
  );
}

export { Footer };
