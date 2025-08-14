import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 48px 0;
  min-height: 596px;

  h3 {
    font-weight: 700;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.textDark};
  }
`;
