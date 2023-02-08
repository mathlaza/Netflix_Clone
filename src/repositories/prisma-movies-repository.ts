import { Movie, MovieInput } from "../entities/movie";
import { MoviesRepository } from "./movies-repository";

class PrismaMoviesRepository implements MoviesRepository{
  findAll(): Promise<Movie[]> {
    throw new Error("Method not implemented.");
  }
  create(movie: MovieInput): Promise<void> {
    throw new Error("Method not implemented.");
  }

}

export { PrismaMoviesRepository };
