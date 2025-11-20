import { useEffect, useState } from "react";
import { Container } from "./styles";
import { Badge, ClientOnly, Tooltip } from "@arkyn/components";

type DomainStatusProps = {
  domain: string;
};

type Status = "idle" | "online" | "offline";

function CheckStatus({ domain }: DomainStatusProps) {
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    checkDomainStatus();
  }, [domain]);

  async function checkDomainStatus() {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);

      await fetch(domain + "/health-check", {
        method: "HEAD",
        mode: "no-cors",
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      setStatus("online");
    } catch {
      setStatus("offline");
    }
  }

  const statusConfig = {
    idle: <Badge scheme="secondary">Checking</Badge>,
    online: <Badge scheme="success">Online</Badge>,
    offline: <Badge scheme="danger">Offline</Badge>,
  };

  return statusConfig[status];
}

function DomainStatus(props: DomainStatusProps) {
  return (
    <Tooltip
      orientation="right"
      text="Status of your traffic source in real time"
    >
      <Container>
        <ClientOnly fallback={<Badge scheme="secondary">Checking</Badge>}>
          {() => <CheckStatus domain={props.domain} />}
        </ClientOnly>
      </Container>
    </Tooltip>
  );
}

export { CheckStatus, DomainStatus };
