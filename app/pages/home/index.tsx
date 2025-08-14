import getMoviesService from "~/services/movies/getMovies.service";
import Card from "~/components/card";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "~/constants/queryKey";
import * as C from "./styles";
import Button from "~/components/button";
import type { Route } from "./+types";
import CartIcon from "@/assets/svg/cart-icon.svg";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Teste Front React WeMovies" },
    { name: "description", content: "Teste Front React WeMovies" },
  ];
}

export default function Home() {
  const { data: movies = [] } = useQuery({
    queryKey: [QUERY_KEY.MOVIES],
    queryFn: getMoviesService,
    select: (data) => (data.success ? data.data?.products : []),
  });

  return (
    <C.Content>
      {movies.map((movie) => (
        <Card key={movie.id} minHeight={324}>
          <C.MovieCard>
            <img src={movie.image} alt={movie.title} width={147} height={188} />
            <C.MovieTitle>{movie.title}</C.MovieTitle>
            <C.MoviePrice>{movie.price.toCurrency()}</C.MoviePrice>

            <Button>
              <C.MovieButtonArea>
                <div className="icon-area">
                  <img src={CartIcon} alt="cart" width={13.6} height={13.6} />
                  <span>0</span>
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
