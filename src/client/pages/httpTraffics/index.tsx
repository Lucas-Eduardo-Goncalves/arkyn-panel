import { LineTitle } from "~/client/components/lineTitle";
import { Caption } from "./components/caption";
import { Footer } from "./components/footer";
import { Table } from "./components/table";
import { Container } from "./styles";

function HttpTrafficsPage() {
  return (
    <Container>
      <LineTitle title="Http traffics" />
      <Caption />
      <Table />
      <Footer />
    </Container>
  );
}

export { HttpTrafficsPage };
