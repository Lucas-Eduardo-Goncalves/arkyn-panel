import { Button, useModal } from "@arkyn/components";
import { Plus } from "lucide-react";
import { Container } from "./styles";

function Header() {
  const { openModal } = useModal("create-traffic-Source");

  return (
    <Container>
      <h1>Traffic sources</h1>
      <Button leftIcon={Plus} onClick={openModal}>
        Add traffic source
      </Button>
    </Container>
  );
}

export { Header };
