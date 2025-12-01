import { styled } from "@linaria/react";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  > strong {
    position: relative;
    font-weight: 600;
    font-size: 20px;
    line-height: 20px;
    color: var(--text-heading);
    margin-right: auto;

    &::before {
      content: " ";
      bottom: -8px;
      position: absolute;
      min-width: 24px;
      min-height: 2px;
      background-color: rgb(var(--spotlight-primary));
      border-radius: 2px;
    }
  }
`;

export { Container };
