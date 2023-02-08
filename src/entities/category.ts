interface Category {
  id: number;
  name: string;
}

interface CategoryMovies extends Category {
  movies: Movie
}

export {
  Category,
  CategoryMovies
}
