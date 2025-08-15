import * as C from "./styles";

type Props = {
  children: React.ReactNode;
  minHeight?: number;
  padding?: number;
  paddingMobile?: number;
};

export default function Card({
  children,
  minHeight,
  padding = 16,
  paddingMobile = 16,
}: Props) {
  return (
    <C.Card
      $minHeight={minHeight}
      $padding={padding}
      $paddingMobile={paddingMobile}
    >
      {children}
    </C.Card>
  );
}
