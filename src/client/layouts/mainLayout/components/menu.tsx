import { Home } from "lucide-react";
import { MenuContainer } from "./menuContainer";
import { MenuLink } from "./menuLink";

function Menu() {
  return (
    <MenuContainer>
      <MenuLink to="/home" icon={Home}>
        Home
      </MenuLink>
    </MenuContainer>
  );
}

export { Menu };
