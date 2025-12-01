import { Pagination, useScopedParams } from "@arkyn/components";
import { useLoaderData, useLocation, useNavigate } from "react-router";

import type { DomainLoader } from "~/client/types/domainLoader";
import { Container } from "./styles";

function Footer() {
  const {
    domains: { meta },
  } = useLoaderData<DomainLoader>();

  const { page, pageLimit, totalItems } = meta;
  const lastPage = Math.ceil(totalItems / pageLimit);

  const navigate = useNavigate();
  const location = useLocation();
  const scopedParams = useScopedParams(location.search);

  function handlePageChange(page: number) {
    navigate(scopedParams.getScopedSearch({ page }));
  }

  return (
    <Container>
      <p>
        Showing {page} of {lastPage} pages
      </p>

      <Pagination
        currentPage={page}
        registerPerPage={pageLimit}
        totalCountRegisters={totalItems}
        onChange={handlePageChange}
      />
    </Container>
  );
}

export { Footer };
