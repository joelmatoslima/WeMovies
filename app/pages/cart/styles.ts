import styled from "styled-components";
import { sizesMediaQueries } from "~/constants/sizesMediaQueries";

export const Container = styled.div``;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;

  td {
    vertical-align: middle;
    width: 280px;
  }

  @media ${sizesMediaQueries.tablet} {
    td {
      width: auto;
    }
  }
`;

export const TableHeader = styled.thead`
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;

  @media ${sizesMediaQueries.tablet} {
    display: none;
  }

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

  .mobile-product-cell {
    height: -webkit-fill-available;
    display: flex;
    justify-content: space-around;
  }

  @media ${sizesMediaQueries.tablet} {
    align-items: flex-start;

    .product-image {
      width: 64px;
      height: 82px;
    }
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

export const TablePriceCellMobile = styled(TablePriceCell)`
  text-align: right;
  padding-bottom: 24px;

  .price-cell__top {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 16px;
  }

  .price-cell__bottom {
    display: flex;
    flex-direction: column;
    gap: 2px;

    span {
      text-transform: uppercase;
      font-weight: 700;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.textMuted};
    }

    strong {
      font-weight: 700;
      font-size: 16px;
      color: ${({ theme }) => theme.colors.textPrimaryDark};
    }
  }

  .price-cell__container {
    display: flex;
    flex-direction: column;
    gap: 16px;
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

  @media ${sizesMediaQueries.tablet} {
    flex-direction: column-reverse;
    gap: 16px;

    .total-area {
      width: 100%;
      justify-content: space-between;
    }

    button {
      width: 100%;
      max-width: 100%;
    }
  }
`;
