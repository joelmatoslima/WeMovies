import LocalStorage from "~/utils/LocalStorage";
import type MovieModel from "../model/Movie.model";

interface CartItem {
  movie: MovieModel;
  quantity: number;
}

export default class CartEntity {
  private items: MovieModel[] = [];

  constructor() {
    this.initCart();
  }

  // public methods
  public addMovie(movie: MovieModel) {
    const cartItems = LocalStorage.getItem<MovieModel[]>("cart");
    // Se não tiver nada no carrinho, adiciona o item
    if (!cartItems) {
      this.add(movie);
      return;
    }

    // Adiciona o item no carrinho
    this.add(movie);
  }
  public removeMovie(movie: MovieModel) {
    const filteredItems = this.items.filter(
      (item: MovieModel) => item.id !== movie.id
    );
    this.items = filteredItems;
    LocalStorage.setItem("cart", this.items);
  }

  public addOrRemoveMovie(movie: MovieModel) {
    const itemIndex = this.items.findIndex(
      (item: MovieModel) => item.id === movie.id
    );
    if (itemIndex !== -1) {
      this.removeMovie(movie);
      return;
    }
    this.add(movie);
  }

  // private methods

  private add(movie: MovieModel) {
    this.items.push(movie);
    LocalStorage.setItem("cart", this.items);
  }

  private initCart() {
    const cartItems = LocalStorage.getItem<MovieModel[]>("cart");
    console.log("cartItems: INIT ", cartItems);
    if (!cartItems) {
      this.items = [];
      return;
    }
    this.items = cartItems;
  }
}
