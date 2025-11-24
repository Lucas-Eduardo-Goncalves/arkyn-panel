import { Input, Select } from "@arkyn/components";
import { Search } from "lucide-react";
import { Container } from "./styles";

function Caption() {
  return (
    <Container>
      <Input name="value" leftIcon={Search} placeholder="Search by value" />

      <Select
        name="protocol"
        defaultValue="https"
        options={[
          { label: "https", value: "https" },
          { label: "http", value: "http" },
        ]}
      />
    </Container>
  );
}

export { Caption };
