import * as C from "./styles";
import CartIcon from "@/assets/svg/cart.svg";

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

        <img src={CartIcon} alt="Cart" width={24} height={24} />
      </C.Cart>
    </C.Header>
  );
}
