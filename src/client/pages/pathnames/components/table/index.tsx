import { TableBody, TableContainer, TableHeader } from "@arkyn/components";
import { useLoaderData } from "react-router";

import type { PathnameLoader } from "~/client/types/pathnameLoader";
import { Container } from "./styles";

function Table() {
  const { pathnames } = useLoaderData<PathnameLoader>();

  const page = pathnames.meta.page;
  const lastPage = Math.ceil(
    pathnames.meta.totalItems / pathnames.meta.pageLimit
  );

  return (
    <Container>
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
    </Container>
  );
}

export { Table };
