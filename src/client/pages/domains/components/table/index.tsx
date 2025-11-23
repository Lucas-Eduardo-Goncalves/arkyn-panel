import {
  Badge,
  Divider,
  IconButton,
  Input,
  Select,
  TableBody,
  TableContainer,
  TableHeader,
} from "@arkyn/components";
import { ArrowRight, Search } from "lucide-react";
import { useLoaderData, useNavigate, useParams } from "react-router";

import type { DomainLoader } from "~/client/types/domainLoader";
import { CaptionContainer, Container, FooterContainer } from "./styles";

function Table() {
  const { domains } = useLoaderData<DomainLoader>();

  const page = domains.meta.page;
  const lastPage = Math.ceil(domains.meta.totalItems / domains.meta.pageLimit);

  const params = useParams();
  const navigate = useNavigate();

  function goToPathnames(domainId: string) {
    const url = `/traffic-sources/${params.trafficSourceId}/domains/${domainId}/pathnames`;
    navigate(url);
  }

  const protocolsBadge = {
    http: <Badge scheme="warning">HTTP</Badge>,
    https: <Badge scheme="success">HTTPS</Badge>,
  };

  return (
    <Container>
      <CaptionContainer>
        <Input name="value" leftIcon={Search} placeholder="Search by value" />

        <Select
          name="protocol"
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
              <td>
                <p className="code">{domain.value}</p>
              </td>
              <td>{protocolsBadge[domain.protocol]}</td>
              <td>{domain.createdAt}</td>
              <td>
                <IconButton
                  aria-label="Open pathnames"
                  icon={ArrowRight}
                  variant="invisible"
                  onClick={() => goToPathnames(domain.id)}
                />
              </td>
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
