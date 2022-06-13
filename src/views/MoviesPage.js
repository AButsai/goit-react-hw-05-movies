import { useState, useEffect } from 'react';
import { getMovie } from 'service/api';
import { useHistory } from 'react-router-dom';
import Search from 'components/Search';
import MovieList from 'components/MovieList';

const MoviesPage = () => {
  const history = useHistory();
  const [query, setQuery] = useState(history?.location?.query ?? '');
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    if (query.trim() === '') {
      return;
    }

    getMovie(query.toLowerCase()).then(setMovies);
  }, [query]);

  const onSubmit = query => {
    setQuery(query);
    history.push({
      query,
    });
  };

  return (
    <>
      <Search onSubmit={onSubmit} />
      {movies && <MovieList movie={movies} />}
    </>
  );
};

export default MoviesPage;
