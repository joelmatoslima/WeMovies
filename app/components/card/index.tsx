import * as C from "./styles";

type Props = {
  children: React.ReactNode;
};

export default function Card({ children }: Props) {
  return <C.Card>{children}</C.Card>;
}
