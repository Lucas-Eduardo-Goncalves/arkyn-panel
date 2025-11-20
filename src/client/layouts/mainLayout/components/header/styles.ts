import { styled } from "@linaria/react";
import { screenBreakpoints } from "~/client/themes/screenBreakpoints";

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  background: var(--background-foreground);
  border-bottom: 1px solid var(--border);

  height: 60px;
  padding: 16px 24px;

  > img {
    height: 32px;
  }

  > .userImage {
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;

  ${screenBreakpoints.sm} {
    .createAccount {
      display: none;
    }
  }
`;

export { Container, ButtonGroup };
