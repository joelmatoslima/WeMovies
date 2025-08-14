import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  min-height: 40px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textLight};
  border-radius: 4px;
  width: 100%;
  gap: 12px;
  padding: 8px;
  text-transform: uppercase;
  font-weight: 700;
  transition: background-color 0.35s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;
