import { useEffect, useState } from "react";
import { Container } from "./styles";
import { Badge, ClientOnly, Tooltip } from "@arkyn/components";

type DomainStatusProps = {
  domain: string;
};

type Status = "idle" | "online" | "offline" | "not-found";

function CheckStatus({ domain }: DomainStatusProps) {
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    checkDomainStatus();
  }, [domain]);

  async function checkDomainStatus() {
    try {
      const response = await fetch(
        `/api/health-check?domain=${encodeURIComponent(domain)}`,
      );
      const data = await response.json();
      setStatus(data.status);
    } catch {
      setStatus("offline");
    }
  }

  const statusConfig = {
    idle: <Badge scheme="secondary">Checking</Badge>,
    online: <Badge scheme="success">Online</Badge>,
    offline: <Badge scheme="danger">Offline</Badge>,
    "not-found": <Badge scheme="warning">Not Found</Badge>,
  };

  return statusConfig[status];
}

function DomainStatus(props: DomainStatusProps) {
  const tooltipText = `Status of your traffic source in real time: <br/><br/>
  - Online: Your traffic source is active and responding. <br/>
  - Offline: Your traffic source is not responding. <br/>
  - Not Found: The domain could not be reached. <br/>
  - Checking: The system is currently checking the status of your traffic source.`;

  return (
    <Container>
      <Tooltip orientation="right" text={tooltipText}>
        <ClientOnly fallback={<Badge scheme="secondary">Checking</Badge>}>
          {() => <CheckStatus domain={props.domain} />}
        </ClientOnly>
      </Tooltip>
    </Container>
  );
}

export { CheckStatus, DomainStatus };
