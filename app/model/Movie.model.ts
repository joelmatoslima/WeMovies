export default interface MovieModel {
  products: Array<{
    id: number;
    title: string;
    price: number;
    image: string;
  }>;
}
