import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { PATH_IMAGE, DEFAULT_IMAGE } from 'helpers/helpers';
import s from './MovieItem.module.css';

const MovieItem = ({ movie }) => {
  const location = useLocation();

  const { id, poster_path, title, original_name } = movie;

  return (
    <li className={s.item}>
      <Link
        to={{
          pathname: `/movies/${id}`,
          state: { from: location },
        }}
        className={s.link}
      >
        <img
          className={s.img}
          src={poster_path ? PATH_IMAGE + poster_path : DEFAULT_IMAGE}
          alt={movie.title || movie.original_name}
        />
        <p className={s.title}>{title || original_name}</p>
      </Link>
    </li>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    original_name: PropTypes.string,
  }),
};

export default MovieItem;

// poster_path
// title
// name
