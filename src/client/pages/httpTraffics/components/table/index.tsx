import { TableBody, TableContainer, TableHeader } from "@arkyn/components";
import { useLoaderData } from "react-router";

import type { HttpTrafficLoader } from "~/client/types/httpTrafficLoader";
import { convertMsToTime } from "../../utilities/convertMsToTime";
import { levelBadge } from "../../utilities/levelBadge";
import { methodBadge } from "../../utilities/methodBadge";
import { statusBadge } from "../../utilities/statusBadge";
import { Container } from "./styles";

function Table() {
  const { httpTraffics } = useLoaderData<HttpTrafficLoader>();

  return (
    <Container>
      <TableContainer>
        <TableHeader>
          <th>Method</th>
          <th>Status</th>
          <th>Level</th>
          <th>Elapsed time</th>
          <th>Created at</th>
        </TableHeader>

        <TableBody emptyMessage="Empty table">
          {httpTraffics.data.map((httpTraffic) => (
            <tr key={httpTraffic.id}>
              <td>{methodBadge[httpTraffic.method]}</td>
              <td>{statusBadge(httpTraffic.status)}</td>
              <td>{levelBadge[httpTraffic.level]}</td>
              <td>{convertMsToTime(httpTraffic.elapsedTime)}</td>
              <td>{httpTraffic.createdAt}</td>
            </tr>
          ))}
        </TableBody>
      </TableContainer>
    </Container>
  );
}

export { Table };
