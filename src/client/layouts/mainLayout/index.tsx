import { Outlet } from "react-router";
import { Header } from "./components/header";
import { Container, Content } from "./styles";
import { MainFooter } from "./components/mainFooter";

function MainLayout() {
  return (
    <Container>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <MainFooter />
    </Container>
  );
}

export { MainLayout };
