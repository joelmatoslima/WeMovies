import LocalStorage from "~/utils/LocalStorage";
import type MovieModel from "../model/Movie.model";

export interface CartItem {
  movie: MovieModel;
  quantity: number;
}

export default class CartEntity {
  private items: CartItem[] = [];

  constructor() {
    this.initCart();
  }

  // public methods
  public addMovie(movie: CartItem) {
    const cartItems = LocalStorage.getItem<CartItem[]>("cart");
    // Se não tiver nada no carrinho, adiciona o item
    if (!cartItems) {
      this.add(movie);
      return;
    }

    // Adiciona o item no carrinho
    this.add(movie);
  }
  public removeMovie(movie: CartItem) {
    const filteredItems = this.items.filter(
      (item: CartItem) => item.movie.id !== movie.movie.id
    );
    this.items = filteredItems;
    LocalStorage.setItem("cart", this.items);
  }

  public getCartItems() {
    return this.items;
  }

  public addOrRemoveMovie(movie: CartItem) {
    const itemIndex = this.items.findIndex(
      (item: CartItem) => item.movie.id === movie.movie.id
    );
    if (itemIndex !== -1) {
      this.removeMovie(movie);
      return;
    }
    this.add(movie);
  }

  public incrementMovieQuantity(movie: CartItem) {
    const itemIndex = this.items.findIndex(
      (item: CartItem) => item.movie.id === movie.movie.id
    );
    if (itemIndex !== -1) {
      this.items[itemIndex].quantity++;
      LocalStorage.setItem("cart", this.items);
    }
  }

  public decrementMovieQuantity(movie: CartItem) {
    const itemIndex = this.items.findIndex(
      (item: CartItem) => item.movie.id === movie.movie.id
    );
    if (itemIndex !== -1) {
      if (this.items[itemIndex].quantity <= 1) {
        this.removeMovie(movie);
        return;
      }
      this.items[itemIndex].quantity--;
      LocalStorage.setItem("cart", this.items);
    }
  }

  public clearCart() {
    this.items = [];
    LocalStorage.setItem("cart", this.items);
  }

  // private methods

  private add(item: CartItem) {
    const items = [...this.items];
    items.push(item);
    LocalStorage.setItem("cart", items);
    this.items = items;
  }

  private initCart() {
    const cartItems = LocalStorage.getItem<CartItem[]>("cart");
    if (!cartItems) {
      this.items = [];
      return;
    }
    this.items = cartItems;
  }
}
