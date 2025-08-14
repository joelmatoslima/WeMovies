import { useNavigate } from "react-router";
import EmptyScreen from "~/components/empty-screen/empty-screen";
import Card from "~/components/ui/card";
import * as C from "./styles";
import type { Route } from "./+types";
import TrashIcon from "@/assets/svg/trash-con.svg";
import { useCartContext } from "~/context/CartContext";
import Button from "~/components/ui/button";
import CartCounter from "~/components/cart-counter/cart-counter";

export default function CartPage() {
  const {
    cartItems,
    amount,
    incrementMovieQuantity,
    decrementMovieQuantity,
    removeMovie,
  } = useCartContext();
  const navigate = useNavigate();
  if (cartItems.length === 0)
    return (
      <EmptyScreen
        buttonText="Voltar para a loja"
        onButtonClick={() => navigate("/")}
      />
    );

  return (
    <Card padding={24}>
      <C.Table>
        <C.TableHeader>
          <tr>
            <th>Produto</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th></th>
          </tr>
        </C.TableHeader>
        <C.TableBody>
          {cartItems.map((item) => (
            <C.TableRow key={item.movie.id + item.quantity}>
              {/* same size row */}
              <C.TableProductCell>
                <img
                  src={item.movie.image}
                  alt={item.movie.title}
                  width={91}
                  height={114}
                />
                <div className="product-cell">
                  <span className="product_title">{item.movie.title}</span>
                  <span className="product_price">
                    {item.movie.price.toCurrency()}
                  </span>
                </div>
              </C.TableProductCell>
              <td>
                <CartCounter
                  quantity={item.quantity}
                  onIncrement={() => incrementMovieQuantity(item.movie)}
                  onDecrement={() => decrementMovieQuantity(item.movie)}
                />
              </td>
              <C.TablePriceCell>
                <span>{item.movie.price.toCurrency()}</span>
              </C.TablePriceCell>
              <C.TableRemoveCell>
                <button onClick={() => removeMovie(item.movie)}>
                  <img src={TrashIcon} alt="trash" width={24} height={24} />
                </button>
              </C.TableRemoveCell>
            </C.TableRow>
          ))}
        </C.TableBody>
      </C.Table>
      <C.Hr />
      <C.Footer>
        <Button maxWidth={157} onClick={() => navigate("/success")}>
          FINALIZAR PEDIDO
        </Button>

        <div className="total-area">
          <span>TOTAL</span>
          <strong>{amount.toCurrency()}</strong>
        </div>
      </C.Footer>
    </Card>
  );
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Carrinho de compras" },
    { name: "description", content: "Carrinho de compras" },
  ];
}
