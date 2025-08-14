import { isAxiosError } from "axios";
import api from "../api";
import type MovieModel from "~/domain/model/Movie.model";
import type { Result } from "~/interfaces/Result.interface";
interface MovieModelResponse {
  products: Array<MovieModel>;
}

export default async function getMoviesService(): Promise<
  Result<MovieModelResponse>
> {
  try {
    const response = await api.get("/movies");
    return { success: true, data: response.data };
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      return {
        success: false,
        error: error.response?.data.error || error.response?.data.message,
      };
    }

    return {
      success: false,
      error: "Erro ao criar ou atualizar informações de faturamento",
    };
  }
}
