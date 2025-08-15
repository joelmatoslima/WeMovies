import * as C from "./styles";
import BagIcon from "@/assets/svg/bag-icon.svg";
import { useCartContext } from "~/context/CartContext";

export default function Header() {
  const { cartItems } = useCartContext();
  return (
    <C.Header>
      <C.Logo to="/">
        <span>WeMovies</span>
      </C.Logo>

      <C.CartLink to="/cart">
        <C.CartInfo>
          <C.CartInfoTitle>Meu Carrinho</C.CartInfoTitle>
          <C.CartInfoCount>
            {cartItems.length > 1
              ? `${cartItems.length} itens`
              : `${cartItems.length} item`}
          </C.CartInfoCount>
        </C.CartInfo>

        <img src={BagIcon} alt="Bag" width={24} height={24} />
      </C.CartLink>
    </C.Header>
  );
}
