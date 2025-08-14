import * as C from "./styles";

type Props = {
  children: React.ReactNode;
  minHeight?: number;
};

export default function Card({ children, minHeight }: Props) {
  return <C.Card minHeight={minHeight}>{children}</C.Card>;
}
