import { Outlet } from "react-router";
import { ContentContainer, HeroContainer, LayoutContainer } from "./styles";

function SignLayout() {
  return (
    <LayoutContainer>
      <ContentContainer>
        <Outlet />
      </ContentContainer>

      <HeroContainer>
        <p>Complete visibility of your services, in real time.</p>
      </HeroContainer>
    </LayoutContainer>
  );
}

export { SignLayout };
