import {
  IconButton,
  TableBody,
  TableContainer,
  TableHeader,
  useScopedParams,
} from "@arkyn/components";
import { useLoaderData, useLocation, useNavigate } from "react-router";

import { ArrowRight } from "lucide-react";
import type { HttpTrafficLoader } from "~/client/types/httpTrafficLoader";
import { convertMsToTime } from "../../utilities/convertMsToTime";
import { levelBadge } from "../../utilities/levelBadge";
import { methodBadge } from "../../utilities/methodBadge";
import { statusBadge } from "../../utilities/statusBadge";
import { Container } from "./styles";

function Table() {
  const { httpTraffics } = useLoaderData<HttpTrafficLoader>();

  const location = useLocation();
  const navigate = useNavigate();
  const scopedParams = useScopedParams(location.search);

  function handleOpenRecord(httpTrafficId: string) {
    navigate(scopedParams.getScopedSearch({ httpTrafficId }));
  }

  return (
    <Container>
      <TableContainer>
        <TableHeader>
          <th>Method</th>
          <th>Status</th>
          <th>Level</th>
          <th>Elapsed time</th>
          <th>Created at</th>
          <th>Actions</th>
        </TableHeader>

        <TableBody emptyMessage="Empty table">
          {httpTraffics.data.map((httpTraffic) => (
            <tr key={httpTraffic.id}>
              <td>{methodBadge[httpTraffic.method]}</td>
              <td>{statusBadge(httpTraffic.status)}</td>
              <td>{levelBadge[httpTraffic.level]}</td>
              <td>{convertMsToTime(httpTraffic.elapsedTime)}</td>
              <td>{httpTraffic.createdAt}</td>
              <td>
                <IconButton
                  icon={ArrowRight}
                  aria-label="Open record"
                  variant="invisible"
                  onClick={() => handleOpenRecord(httpTraffic.id)}
                />
              </td>
            </tr>
          ))}
        </TableBody>
      </TableContainer>
    </Container>
  );
}

export { Table };
