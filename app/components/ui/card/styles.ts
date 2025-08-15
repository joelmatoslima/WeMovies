import styled from "styled-components";
import { sizesMediaQueries } from "~/constants/sizesMediaQueries";

type Props = {
  $minHeight?: number;
  $padding?: number;
  $paddingMobile?: number;
};

export const Card = styled.div<Props>`
  width: 100%;
  min-height: ${({ $minHeight: minHeight }) => minHeight && `${minHeight}px`};
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: 4px;
  padding: ${({ $padding: padding }) => padding && `${padding}px`};

  @media ${sizesMediaQueries.tablet} {
    padding: ${({ $paddingMobile: paddingMobile }) =>
      paddingMobile && `${paddingMobile}px`};
  }
`;
