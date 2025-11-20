import { Activity, Globe, LayoutDashboard } from "lucide-react";
import { MenuContainer } from "./menuContainer";
import { MenuLink } from "./menuLink";

function Menu() {
  return (
    <MenuContainer>
      <MenuLink to="" icon={LayoutDashboard}>
        Dashboard
      </MenuLink>
      <MenuLink to="/domains" icon={Globe}>
        Domains
      </MenuLink>
      <MenuLink to="/http-traffics" icon={Activity}>
        Http traffics
      </MenuLink>
    </MenuContainer>
  );
}

export { Menu };
