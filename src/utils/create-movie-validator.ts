import { MovieInput } from '../entities/movie';

class CreateMovieValidator {
  validateName(name: string) {

  }

  validate(movie: MovieInput) {
    this.validateName(movie.name);
  }

}