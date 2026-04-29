import { Button, IconButton, Tooltip, useModal } from "@arkyn/components";
import { Check, Copy, Plus } from "lucide-react";
import { Container } from "./styles";
import { useLayout } from "~/client/hooks/useLayout";
import { useState } from "react";

function Header() {
  const { user } = useLayout();
  const { openModal } = useModal("create-traffic-Source");

  const [handleCopySuccess, setHandleCopySuccess] = useState(false);

  function copyToken() {
    navigator.clipboard.writeText(user?.token || "");
    setHandleCopySuccess(true);

    setTimeout(() => {
      setHandleCopySuccess(false);
    }, 2000);
  }

  return (
    <Container>
      <h1>Traffic sources</h1>

      <Tooltip text="Copy token to clipboard">
        <IconButton
          aria-label="Copy tokenButton"
          variant="outline"
          onClick={copyToken}
          icon={handleCopySuccess ? Check : Copy}
          scheme={handleCopySuccess ? "success" : "primary"}
          disabled={handleCopySuccess || !user?.token}
        />
      </Tooltip>

      {user.email === "lucasgoncalves@arkyn.dev" && (
        <Button leftIcon={Plus} onClick={openModal}>
          Add traffic source
        </Button>
      )}

      {user.email !== "lucasgoncalves@arkyn.dev" && (
        <Tooltip
          text="Your plan does not allow you to add traffic sources. Please upgrade to add traffic sources."
          orientation="left"
        >
          <Button leftIcon={Plus} onClick={openModal} disabled>
            Add traffic source
          </Button>
        </Tooltip>
      )}
    </Container>
  );
}

export { Header };
