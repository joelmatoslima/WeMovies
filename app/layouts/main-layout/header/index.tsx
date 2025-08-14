import * as C from "./styles";
import BagIcon from "@/assets/svg/bag-icon.svg";

export default function Header() {
  return (
    <C.Header>
      <C.Logo>
        <span>WeMovies</span>
      </C.Logo>

      <C.Cart>
        <C.CartInfo>
          <C.CartInfoTitle>Meu Carrinho</C.CartInfoTitle>
          <C.CartInfoCount>0 itens</C.CartInfoCount>
        </C.CartInfo>

        <img src={BagIcon} alt="Bag" width={24} height={24} />
      </C.Cart>
    </C.Header>
  );
}
