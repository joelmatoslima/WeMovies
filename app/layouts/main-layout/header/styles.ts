import { Link } from "react-router";
import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.textLight};
  padding: 31.5px 0px;
  max-height: 88px;
`;

export const Logo = styled(Link)`
  font-family: Open Sans;
  font-weight: 700;
  font-size: 20px;
  text-decoration: none;
  color: inherit;
`;

export const CartLink = styled(Link)`
  display: flex;
  gap: 16px;
  text-decoration: none;
  color: inherit;
`;

export const CartInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const CartInfoTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
`;

export const CartInfoCount = styled.small`
  font-size: 12px;
  font-weight: 400;
  text-align: right;
  color: ${({ theme }) => theme.colors.textMuted};
`;
