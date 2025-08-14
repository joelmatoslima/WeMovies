import * as C from "./styles";

type Props = {
  children: React.ReactNode;
  maxWidth?: number;
  onClick?: VoidFunction;
  isSelected?: boolean;
};

export default function Button({
  children,
  maxWidth,
  onClick,
  isSelected,
}: Props) {
  return (
    <C.Button $maxWidth={maxWidth} onClick={onClick} $isSelected={isSelected}>
      {children}
    </C.Button>
  );
}
