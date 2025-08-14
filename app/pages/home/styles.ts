import styled from "styled-components";

export const MovieCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px 16px;
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
