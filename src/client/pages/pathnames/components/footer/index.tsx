import { useLoaderData } from "react-router";
import type { PathnameLoader } from "~/client/types/pathnameLoader";
import { Container } from "./styles";

function Footer() {
  const {
    pathnames: { meta },
  } = useLoaderData<PathnameLoader>();

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
