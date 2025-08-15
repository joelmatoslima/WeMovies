import styled from "styled-components";
import { sizesMediaQueries } from "~/constants/sizesMediaQueries";

export const MovieCard = styled.div`
  width: 100%;
  height: 100%;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px 16px;
  margin: auto;
  padding-bottom: 16px;
  @media ${sizesMediaQueries.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${sizesMediaQueries.mobileL} {
    grid-template-columns: repeat(1, 1fr);
    width: 328px;
  }
`;

export const MovieTitle = styled.h2`
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textDark};
`;

export const MoviePrice = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimaryDark};
`;

export const MovieButtonArea = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;

  .icon-area {
    display: flex;
    gap: 3.4px;

    font-weight: 400;
  }
`;

export const LoadingArea = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;
