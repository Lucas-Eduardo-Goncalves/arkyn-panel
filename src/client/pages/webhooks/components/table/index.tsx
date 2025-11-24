import {
  Badge,
  IconButton,
  TableBody,
  TableContainer,
  TableHeader,
  useModal,
} from "@arkyn/components";
import { PencilLine, Trash2 } from "lucide-react";
import { useLoaderData } from "react-router";

import type { WebhookLoader } from "~/client/types/webhookLoader";
import { Container } from "./styles";

function Table() {
  const { webhooks } = useLoaderData<WebhookLoader>();
  const modal = useModal();

  const typeBadge = {
    discord: <Badge scheme="primary">Discord</Badge>,
  };

  const levelBadge = {
    info: <Badge scheme="info">Info</Badge>,
    warning: <Badge scheme="warning">Warning</Badge>,
    fatal: <Badge scheme="danger">Fatal</Badge>,
  };

  return (
    <Container>
      <TableContainer>
        <TableHeader>
          <th>Value</th>
          <th>Level</th>
          <th>Type</th>
          <th>Created at</th>
          <th>Actions</th>
        </TableHeader>

        <TableBody emptyMessage="Empty table">
          {webhooks.map((webhook) => (
            <tr key={webhook.id}>
              <td>
                <p className="code">{webhook.value}</p>
              </td>
              <td>{levelBadge[webhook.level]}</td>
              <td>{typeBadge[webhook.type]}</td>
              <td>{webhook.createdAt}</td>
              <td>
                <IconButton
                  aria-label="Edit webhook"
                  icon={PencilLine}
                  variant="invisible"
                  scheme="warning"
                  onClick={() => modal.openModal("edit-webhook", webhook)}
                />
                <IconButton
                  aria-label="Delete webhook"
                  icon={Trash2}
                  variant="invisible"
                  scheme="danger"
                  onClick={() => modal.openModal("delete-webhook", webhook)}
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
