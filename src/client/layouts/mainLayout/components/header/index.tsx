import horizontalLogo from "~/client/assets/arkynFullLogo.png";
import { IconMenu } from "../iconMenu";
import { Container } from "./styles";

function Header() {
  return (
    <Container>
      <img src={horizontalLogo} alt="arkyn-panel" />
      <IconMenu />
    </Container>
  );
}

export { Header };
