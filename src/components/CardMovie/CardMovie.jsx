import PropTypes from 'prop-types';

import s from './CardMovie.module.css';

const PATH_IMAGE = 'https://image.tmdb.org/t/p/w1280';

const CardMovie = ({ movie, children }) => {
  const { poster_path, original_title, genres, overview, vote_average } = movie;

  function getGenres(genres) {
    if (genres) {
      return genres.map(genre => genre.name).join(', ');
    }
    return '';
  }

  function userScore(count) {
    return (count * 10).toFixed();
  }

  return (
    <div className={s.wrap}>
      <div className={s.content}>
        <img
          src={PATH_IMAGE + poster_path}
          alt={original_title}
          className={s.img}
        />
        <div className={s.contentWrap}>
          <p className={s.title}>{original_title}</p>
          <p className={s.subtext}>User Score: {userScore(vote_average)}%</p>
          <p className={s.text}>Owerview</p>
          <p className={s.subtext}>{overview}</p>
          <p className={s.text}>Genres</p>
          <p className={s.subtext}>{getGenres(genres)}</p>
        </div>
      </div>
      <div className={s.links}>
        <p className={s.linksText}>Additional information</p>
        {children && (
          <ul className={s.list}>
            {children.map(child => (
              <li key={child.props.children} className={s.item}>
                {child}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

CardMovie.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    original_title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ),
    overview: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
  }),
  children: PropTypes.arrayOf(
    PropTypes.shape({
      child: PropTypes.element,
    })
  ),
};

export default CardMovie;
