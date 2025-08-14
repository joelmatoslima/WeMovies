import getMoviesService from "~/services/movies/getMovies.service";
import Card from "~/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "~/constants/queryKey";
import * as C from "./styles";
import Button from "~/components/ui/button";
import CartIcon from "@/assets/svg/cart-icon.svg";
import Loading from "~/components/loading";
import EmptyScreen from "~/components/empty-screen/empty-screen";
import { useCartContext } from "~/context/CartContext";
import type { Route } from "../cart/+types";

export default function HomePage() {
  const {
    data: movies = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: [QUERY_KEY.MOVIES],
    queryFn: getMoviesService,
    select: (data) => (data.success ? data.data?.products : []),
  });

  const { addOrRemoveMovie, getQuantity } = useCartContext();

  if (isLoading)
    return (
      <C.LoadingArea>
        <Loading />
      </C.LoadingArea>
    );

  if (movies.length === 0)
    return (
      <EmptyScreen buttonText="Recarregar página" onButtonClick={refetch} />
    );

  return (
    <C.Content>
      {movies.map((movie) => (
        <Card key={movie.id} minHeight={324}>
          <C.MovieCard>
            <img src={movie.image} alt={movie.title} width={147} height={188} />
            <C.MovieTitle>{movie.title}</C.MovieTitle>
            <C.MoviePrice>{movie.price.toCurrency()}</C.MoviePrice>

            <Button
              onClick={() => addOrRemoveMovie(movie)}
              isSelected={getQuantity(movie) > 0}
            >
              <C.MovieButtonArea>
                <div className="icon-area">
                  <img src={CartIcon} alt="cart" width={13.6} height={13.6} />
                  <span>{getQuantity(movie)}</span>
                </div>
                <span>ADICIONAR AO CARRINHO</span>
              </C.MovieButtonArea>
            </Button>
          </C.MovieCard>
        </Card>
      ))}
    </C.Content>
  );
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Teste Front React WeMovies" },
    { name: "description", content: "Teste Front React WeMovies" },
  ];
}
