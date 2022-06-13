import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import s from './MovieItem.module.css';

const MovieItem = ({ movie }) => {
  const lacation = useLocation();

  return (
    <li className={s.Item}>
      <Link
        to={{
          pathname: `/movies/${movie.id}`,
          state: { from: lacation },
        }}
        className={s.Link}
      >
        {movie.title || movie.original_name}
      </Link>
    </li>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    titile: PropTypes.string,
    original_name: PropTypes.string,
  }),
};

export default MovieItem;
