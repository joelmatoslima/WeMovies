import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;

  td {
    vertical-align: middle;
    width: 280px;
  }
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

export const TableRow = styled.tr``;

export const TableProductCell = styled.td`
  display: flex;
  align-items: center;
  gap: 16px;
  padding-bottom: 24px;

  .product-cell {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .product_title {
    font-weight: 700;
    font-size: 14px;
  }

  .product_price {
    font-weight: 700;
    font-size: 16px;
  }
`;

export const Hr = styled.hr`
  border: 1px solid ${({ theme }) => theme.colors.border};
  margin-bottom: 24px;
`;

export const TablePriceCell = styled.td`
  span {
    font-weight: 700;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.textPrimaryDark};
  }
`;

export const TableRemoveCell = styled.td`
  text-align: right;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .total-area {
    display: flex;
    align-items: center;
    gap: 28px;
  }

  span {
    font-weight: 700;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.textMuted};
  }

  strong {
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.colors.textPrimaryDark};
  }
`;
