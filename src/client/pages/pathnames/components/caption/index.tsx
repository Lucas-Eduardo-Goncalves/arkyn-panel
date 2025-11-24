import { Input } from "@arkyn/components";
import { Search } from "lucide-react";
import { Container } from "./styles";

function Caption() {
  return (
    <Container>
      <Input name="value" leftIcon={Search} placeholder="Search by value" />
    </Container>
  );
}

export { Caption };
