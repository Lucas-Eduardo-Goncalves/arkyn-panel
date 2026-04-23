import { Button, Tooltip, useModal } from "@arkyn/components";
import { Plus } from "lucide-react";
import { Container } from "./styles";

function Header() {
  const { openModal } = useModal("create-traffic-Source");

  return (
    <Container>
      <h1>Traffic sources</h1>

      <Tooltip
        text="Your plan does not allow you to add traffic sources. Please upgrade to add traffic sources."
        orientation="left"
      >
        <Button leftIcon={Plus} onClick={openModal} disabled>
          Add traffic source
        </Button>
      </Tooltip>
    </Container>
  );
}

export { Header };
