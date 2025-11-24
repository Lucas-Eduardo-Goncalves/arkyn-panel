import { styled } from "@linaria/react";

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const Header = styled.header`
  display: flex;
  align-items: start;
  justify-content: space-between;

  h1 {
    font-weight: 600;
    font-size: 24px;
    line-height: 24px;
    color: var(--text-heading);
  }
`;

const Content = styled.main`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 60px);
  width: 100%;
`;

export { Container, Header, Content };
