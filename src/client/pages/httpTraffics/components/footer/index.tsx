import { useLoaderData } from "react-router";
import type { HttpTrafficLoader } from "~/client/types/httpTrafficLoader";
import { Container } from "./styles";

function Footer() {
  const {
    httpTraffics: { meta },
  } = useLoaderData<HttpTrafficLoader>();

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
