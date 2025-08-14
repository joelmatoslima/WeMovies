import * as C from "./styles";

type Props = {
  children: React.ReactNode;
};

export default function Button({ children }: Props) {
  return <C.Button>{children}</C.Button>;
}
