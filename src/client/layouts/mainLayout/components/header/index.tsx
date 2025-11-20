import { useLayout } from "~/client/hooks/useLayout";
import { Container } from "./styles";
import horizontalLogo from "~/client/assets/arkynFullLogo.png";

function Header() {
  const { user } = useLayout();

  return (
    <Container>
      <img src={horizontalLogo} alt="arkyn-panel" />

      {user && (
        <img className="userImage" src={user.avatarUrl} alt={user.name} />
      )}
    </Container>
  );
}

export { Header };
