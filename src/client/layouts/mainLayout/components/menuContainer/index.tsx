import { DrawerContainer, DrawerHeader, useDrawer } from "@arkyn/components";
import { Container, Content } from "./styles";

type MenuContainerProps = {
  children?: React.ReactNode;
};

function MenuContainer({ children }: MenuContainerProps) {
  const { drawerIsOpen, closeDrawer } = useDrawer("navigation-drawer");

  return (
    <Container>
      <Content>{children}</Content>

      <DrawerContainer isVisible={drawerIsOpen} makeInvisible={closeDrawer}>
        <DrawerHeader>Navegação:</DrawerHeader>
        <Content>{children}</Content>
      </DrawerContainer>
    </Container>
  );
}

export { MenuContainer };
