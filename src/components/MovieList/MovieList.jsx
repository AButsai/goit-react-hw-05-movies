import PropTypes from 'prop-types';
import MovieItem from 'components/MovieItem';

import s from './MovieList.module.css';

const MovieList = ({ movie }) => {
  return (
    <ul className={s.List}>
      {movie && movie.map(movie => <MovieItem key={movie.id} movie={movie} />)}
    </ul>
  );
};

MovieList.propTypes = {
  movie: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default MovieList;
