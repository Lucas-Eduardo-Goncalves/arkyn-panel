import { MenuButton } from "../menuButton";
import { Container } from "./styles";
import horizontalLogo from "~/client/assets/arkynFullLogo.png";

function Header() {
  return (
    <Container>
      <MenuButton />
      <img src={horizontalLogo} alt="M2G2" />
    </Container>
  );
}

export { Header };
