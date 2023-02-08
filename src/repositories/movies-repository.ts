import { Movie } from "../entities/movie";

interface MoviesRepository {
  findAll(): Promise<Movie[]>;
  create(movie: Movie): Promise<void>
}
