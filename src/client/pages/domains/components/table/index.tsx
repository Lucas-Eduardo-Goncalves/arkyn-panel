import {
  Divider,
  Input,
  Select,
  TableBody,
  TableContainer,
  TableHeader,
} from "@arkyn/components";
import { Search } from "lucide-react";
import { useLoaderData } from "react-router";

import type { DomainLoader } from "~/client/types/domainLoader";
import { CaptionContainer, Container, FooterContainer } from "./styles";

function Table() {
  const { domains } = useLoaderData<DomainLoader>();

  const page = domains.meta.page;
  const lastPage = Math.ceil(domains.meta.totalItems / domains.meta.pageLimit);

  return (
    <Container>
      <CaptionContainer>
        <Input
          name="value"
          label="Search"
          leftIcon={Search}
          placeholder="Search by value"
        />

        <Select
          name="protocol"
          label="Protocol:"
          defaultValue="https"
          options={[
            { label: "https", value: "https" },
            { label: "http", value: "http" },
          ]}
        />
      </CaptionContainer>

      <TableContainer>
        <TableHeader>
          <th>Value</th>
          <th>Protocol</th>
          <th>Created at</th>
          <th>Actions</th>
        </TableHeader>

        <TableBody emptyMessage="Empty table">
          {domains.data.map((domain) => (
            <tr key={domain.id}>
              <td>{domain.value}</td>
              <td>{domain.protocol}</td>
              <td>{domain.createdAt}</td>
              <td></td>
            </tr>
          ))}
        </TableBody>
      </TableContainer>

      <Divider />

      <FooterContainer>
        <p>
          Showing {page} of {lastPage} pages
        </p>
      </FooterContainer>
    </Container>
  );
}

export { Table };
