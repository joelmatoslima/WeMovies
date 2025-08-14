import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
`;

export const TableHeader = styled.thead`
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;

  th {
    padding: 24px 0;
  }
`;

export const TableBody = styled.tbody`
  margin-top: 16px;
  color: ${({ theme }) => theme.colors.textPrimaryDark};
`;
