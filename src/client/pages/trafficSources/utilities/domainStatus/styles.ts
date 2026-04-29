import { styled } from "@linaria/react";

const Container = styled.span`
  cursor: help;

  .arkynBadge {
    min-width: 80px;
    max-width: 80px;
  }

  .arkynTooltipText {
    line-height: 130% !important;
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
