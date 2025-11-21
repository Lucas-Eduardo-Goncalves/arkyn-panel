import { styled } from "@linaria/react";

const Container = styled.main`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 32px;
  padding: 32px;
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

export { Container, Header };
