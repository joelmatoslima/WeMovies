import { useNavigate } from "react-router";
import EmptyScreen from "~/components/empty-screen/empty-screen";
import Card from "~/components/ui/card";
import * as C from "./styles";
import type { Route } from "./+types";
import TrashIcon from "@/assets/svg/trash-con.svg";
import { useCartContext } from "~/context/CartContext";
import Button from "~/components/ui/button";
import CartCounter from "~/components/cart-counter/cart-counter";
import useWindowSize from "~/hooks/useWindowSize";

export default function CartPage() {
  const {
    cartItems,
    amount,
    incrementMovieQuantity,
    decrementMovieQuantity,
    removeMovie,
  } = useCartContext();
  const navigate = useNavigate();
  const { width } = useWindowSize();
  if (cartItems.length === 0)
    return (
      <EmptyScreen
        buttonText="Voltar para a loja"
        onButtonClick={() => navigate("/")}
      />
    );

  return (
    <C.Container>
      <Card padding={24} paddingMobile={16}>
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
            {cartItems.map((item, index) =>
              width < 768 ? (
                // mobile
                <C.TableRow key={index}>
                  <C.TableProductCell>
                    <img
                      src={item.movie.image}
                      alt={item.movie.title}
                      width={91}
                      height={114}
                      className="product-image"
                    />
                    <div className="product-cell mobile-product-cell">
                      <span className="product_title">{item.movie.title}</span>
                      <CartCounter
                        quantity={item.quantity}
                        onIncrement={() => incrementMovieQuantity(item.movie)}
                        onDecrement={() => decrementMovieQuantity(item.movie)}
                      />
                    </div>
                  </C.TableProductCell>

                  <C.TablePriceCellMobile>
                    <div className="price-cell__container">
                      <div className="price-cell__top">
                        <span>{item.movie.price.toCurrency()}</span>

                        <button onClick={() => removeMovie(item.movie)}>
                          <img
                            src={TrashIcon}
                            alt="trash"
                            width={24}
                            height={24}
                          />
                        </button>
                      </div>
                      <div className="price-cell__bottom">
                        <span>Subtotal</span>
                        <strong>{item.movie.price * item.quantity}</strong>
                      </div>
                    </div>
                  </C.TablePriceCellMobile>
                </C.TableRow>
              ) : (
                // desktop
                <C.TableRow key={index}>
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
              )
            )}
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
    </C.Container>
  );
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Carrinho de compras" },
    { name: "description", content: "Carrinho de compras" },
  ];
}
