import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;

  .counter-area {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 62px;
    height: 26px;
    border: 1px solid #d9d9d9;
    border-radius: 4px;

    span {
      color: ${({ theme }) => theme.colors.textPrimaryDark};
      font-size: 14px;
    }
  }
`;
