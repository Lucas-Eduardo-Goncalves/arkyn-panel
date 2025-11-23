import {
  Divider,
  Input,
  TableBody,
  TableContainer,
  TableHeader,
  Tooltip,
} from "@arkyn/components";
import { Search } from "lucide-react";
import { useLoaderData } from "react-router";

import type { PathnameLoader } from "~/client/types/pathnameLoader";
import { CaptionContainer, Container, FooterContainer } from "./styles";

function Table() {
  const { pathnames } = useLoaderData<PathnameLoader>();

  const page = pathnames.meta.page;
  const lastPage = Math.ceil(
    pathnames.meta.totalItems / pathnames.meta.pageLimit
  );

  return (
    <Container>
      <CaptionContainer>
        <Input name="value" leftIcon={Search} placeholder="Search by value" />
      </CaptionContainer>

      <TableContainer>
        <TableHeader>
          <th>Value</th>
          <th>Created at</th>
        </TableHeader>

        <TableBody emptyMessage="Empty table">
          {pathnames.data.map((pathname) => (
            <tr key={pathname.id}>
              <td>
                <p className="code">{pathname.value}</p>
              </td>
              <td>{pathname.createdAt}</td>
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
