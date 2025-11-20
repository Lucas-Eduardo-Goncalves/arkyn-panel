import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { useLocation, useParams } from "react-router";

import { Container } from "./styles";

type MenuLinkProps = {
  to: string;
  children: ReactNode;
  icon: LucideIcon;
};

function MenuLink(arg: MenuLinkProps) {
  const { children, to: rawTo, icon: Icon } = arg;
  const { pathname } = useLocation();

  const params = useParams();

  const trafficSourceId = params.trafficSourceId;
  if (!trafficSourceId) throw new Error("trafficSourceId is required");

  const baseUrl = `/traffic-sources/${params.trafficSourceId}`;
  const to = baseUrl + rawTo;

  const isActive = pathname === to ? "active" : "";

  return (
    <Container className={isActive} to={to} prefetch="intent">
      <p>
        <Icon /> {children}
      </p>
    </Container>
  );
}

export { MenuLink };
