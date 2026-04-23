import {
  Button,
  Divider,
  IconButton,
  Tooltip,
  useModal,
} from "@arkyn/components";
import { AlertCircle, PenLine, Trash2 } from "lucide-react";
import { Link, useNavigate } from "react-router";

import { DomainStatus } from "../../utilities/domainStatus";
import { Container } from "./styles";
import { useLayout } from "~/client/hooks/useLayout";

type CardProps = {
  id: string;
  name: string;
  fullName: string;
  userOwnerId: string;
  trafficDomain: string;
  createdAt: string;
};

function Card(props: CardProps) {
  const { openModal } = useModal();
  const navigate = useNavigate();
  const { user } = useLayout();

  function handleViewDetails(trafficSourceId: string) {
    navigate(`/traffic-sources/${trafficSourceId}`);
  }

  return (
    <Container>
      <strong>{props.name}</strong>

      <div className="domain">
        <small>Domain:</small>
        <a href={props.trafficDomain} target="_blank">
          {props.trafficDomain}
        </a>
      </div>

      <div className="stats">
        <div>
          <strong className="success">--</strong>
          <p>Http traffics</p>
        </div>

        <Divider orientation="vertical" />

        <div>
          <strong className="danger">--</strong>
          <p>Fatal errors</p>
        </div>
      </div>

      <Divider />

      <div className="buttons">
        <DomainStatus domain={props.trafficDomain} />

        {user.id === props.userOwnerId && (
          <>
            <IconButton
              aria-label="Delete traffic source"
              variant="outline"
              scheme="danger"
              icon={Trash2}
              size="sm"
              onClick={() =>
                openModal("delete-traffic-source", { id: props.id })
              }
            />

            <IconButton
              aria-label="Edit traffic source"
              variant="outline"
              scheme="warning"
              icon={PenLine}
              size="sm"
              onClick={() => openModal("edit-traffic-source", props)}
            />
          </>
        )}

        {user.id !== props.userOwnerId && (
          <Tooltip
            orientation="right"
            text="This traffic source belongs to another user, you can't edit or delete it."
          >
            <IconButton
              aria-label="Information about permissions"
              variant="invisible"
              scheme="info"
              icon={AlertCircle}
              size="sm"
            />
          </Tooltip>
        )}

        <Button
          variant="outline"
          size="sm"
          onClick={() => handleViewDetails(props.id)}
        >
          Manage
        </Button>
      </div>
    </Container>
  );
}

export { Card };
