import * as C from "./styles";

type Props = {
  children: React.ReactNode;
  minHeight?: number;
  padding?: number;
};

export default function Card({ children, minHeight, padding = 16 }: Props) {
  return (
    <C.Card $minHeight={minHeight} $padding={padding}>
      {children}
    </C.Card>
  );
}
