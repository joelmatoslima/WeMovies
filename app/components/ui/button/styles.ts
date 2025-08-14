import styled from "styled-components";

type Props = {
  $maxWidth?: number;
  $isSelected?: boolean;
};

export const Button = styled.button<Props>`
  width: 100%;
  max-width: ${({ $maxWidth: $maxwidth }) => $maxwidth && `${$maxwidth}px`};
  min-height: 40px;
  background-color: ${({ $isSelected: isSelected, theme }) =>
    isSelected ? theme.colors.primarySelected : theme.colors.primary};
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 12px;
  border-radius: 4px;
  gap: 12px;
  padding: 8px;
  text-transform: uppercase;
  font-weight: 700;
  transition: background-color 0.35s ease;

  &:hover {
    background-color: ${({ $isSelected: isSelected, theme }) =>
      isSelected ? theme.colors.primarySelected : theme.colors.primaryHover};
  }
`;
