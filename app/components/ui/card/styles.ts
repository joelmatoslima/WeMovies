import styled from "styled-components";

type Props = {
  minHeight?: number;
};

export const Card = styled.div<Props>`
  width: 100%;
  min-height: ${({ minHeight }) => minHeight && `${minHeight}px`};
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: 4px;
  padding: 16px;
`;
