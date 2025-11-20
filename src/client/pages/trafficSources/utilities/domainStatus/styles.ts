import { styled } from "@linaria/react";

const Container = styled.span`
  cursor: help;

  .arkynBadge {
    min-width: 70px;
    max-width: 70px;
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.3;
    }
  }
`;

export { Container };
