import type { Route } from "../+types/home";
import getMoviesService from "~/services/movies/getMovies.service";
import Card from "~/components/card";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "~/constants/queryKey";
import * as C from "./styles";

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
        <Card key={movie.id}>
          <C.MovieCard>
            <img src={movie.image} alt={movie.title} width={147} height={188} />
            <C.MovieTitle>{movie.title}</C.MovieTitle>
            <C.MoviePrice>{movie.price}</C.MoviePrice>
          </C.MovieCard>
        </Card>
      ))}
    </C.Content>
  );
}
