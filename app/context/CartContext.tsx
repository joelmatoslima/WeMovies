import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import CartEntity, { type CartItem } from "~/domain/entity/CartEntity";
import type MovieModel from "~/domain/model/Movie.model";

const cartEntity = new CartEntity();
const CartContext = createContext<{
  cartItems: CartItem[];
  addOrRemoveMovie: (movie: MovieModel) => void;
  getQuantity: (movie: MovieModel) => number;
  incrementMovieQuantity: (movie: MovieModel) => void;
  decrementMovieQuantity: (movie: MovieModel) => void;
  amount: number;
  removeMovie: (movie: MovieModel) => void;
  clearCart: () => void;
}>({
  cartItems: [],
  addOrRemoveMovie: () => {},
  getQuantity: () => 0,
  incrementMovieQuantity: () => {},
  decrementMovieQuantity: () => {},
  amount: 0,
  removeMovie: () => {},
  clearCart: () => {},
});

interface Props {
  children: React.ReactNode;
}

export default function CartProvider({ children }: Props) {
  const [cartItems, setCartItems] = useState(() => cartEntity.getCartItems());

  function addOrRemoveMovie(movie: MovieModel) {
    cartEntity.addOrRemoveMovie({
      movie,
      quantity: 1,
    });
    setCartItems(cartEntity.getCartItems());
  }

  const getQuantity = useCallback(
    (movie: MovieModel) => {
      return (
        cartItems.find((item) => item.movie.id === movie.id)?.quantity || 0
      );
    },
    [cartItems]
  );

  const incrementMovieQuantity = useCallback((movie: MovieModel) => {
    cartEntity.incrementMovieQuantity({
      movie,
      quantity: 1,
    });
    const items = cartEntity.getCartItems();
    setCartItems([...items]);
  }, []);

  const decrementMovieQuantity = useCallback((movie: MovieModel) => {
    cartEntity.decrementMovieQuantity({
      movie,
      quantity: 1,
    });
    const items = cartEntity.getCartItems();
    setCartItems([...items]);
  }, []);

  const removeMovie = useCallback((movie: MovieModel) => {
    cartEntity.removeMovie({
      movie,
      quantity: 1,
    });
    const items = cartEntity.getCartItems();
    setCartItems([...items]);
  }, []);

  const clearCart = useCallback(() => {
    cartEntity.clearCart();
    const items = cartEntity.getCartItems();
    setCartItems([...items]);
  }, []);

  const amount = useMemo(() => {
    return cartItems.reduce(
      (acc, item) => acc + item.movie.price * item.quantity,
      0
    );
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addOrRemoveMovie,
        getQuantity,
        amount,
        incrementMovieQuantity,
        decrementMovieQuantity,
        removeMovie,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(CartContext);
}
