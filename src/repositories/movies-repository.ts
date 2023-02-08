import { Movie, MovieInput } from "../entities/movie";

// Contrato do nosso repository
interface MoviesRepository {
  findAll(): Promise<Movie[]>;
  create(movie: MovieInput): Promise<void>
}

export { MoviesRepository };
