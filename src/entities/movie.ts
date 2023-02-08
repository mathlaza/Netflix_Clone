import { Category } from "./category";

interface MovieInput {
  name: string;
  sinopse: string;
  thumbnail?: string
  categories: Category[]
}

interface Movie extends MovieInput {
  id: number;
}

export { Movie, MovieInput };
