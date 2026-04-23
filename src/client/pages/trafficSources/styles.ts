import { styled } from "@linaria/react";

const Container = styled.main`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 32px;
  padding: 32px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;

  h2 {
    font-weight: 600;
    font-size: 20px;
    color: var(--text-heading);
    margin-bottom: -8px;
  }

  h2,
  .arkynDivider {
    grid-column: 1 / -1;
  }
`;

export { Container, GridContainer };
