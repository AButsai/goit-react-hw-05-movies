import { useEffect, useState } from 'react';
import { getTrendingMovieAll } from 'service/api';

import MovieList from 'components/MovieList';

const HomePage = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getTrendingMovieAll().then(setMovies);
  }, []);

  return <MovieList movie={movies} />;
};

export default HomePage;
