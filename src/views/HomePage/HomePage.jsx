import { useEffect, useState } from 'react';
import { getTrendingMovieAll } from 'service/api';
import { Status } from 'helpers/helpers';

import MovieList from 'components/MovieList';
import Loader from 'components/Loader';

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    async function getPopularMovies() {
      setStatus(Status.PENDING);
      try {
        const data = await getTrendingMovieAll();

        setMovies(data);
        setStatus(Status.RESOLVED);
      } catch (error) {
        setStatus(Status.REJECTED);
      }
    }
    getPopularMovies();
  }, []);

  return (
    <>
      {status === Status.PENDING && <Loader />}

      {status === Status.RESOLVED && <MovieList movie={movies} />}

      {status === Status.REJECTED && <h1>Ops...</h1>}
    </>
  );
};

export default HomePage;
