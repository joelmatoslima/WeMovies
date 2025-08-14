import * as C from "./styles";

type Props = {
  children: React.ReactNode;
  maxWidth?: number;
  onClick?: VoidFunction;
};

export default function Button({ children, maxWidth, onClick }: Props) {
  return (
    <C.Button $maxWidth={maxWidth} onClick={onClick}>
      {children}
    </C.Button>
  );
}
