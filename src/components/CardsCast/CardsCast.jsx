import PropTypes from 'prop-types';
import s from './CardsCast.module.css';

const PATH_IMAGE = 'https://image.tmdb.org/t/p/w1280';
const defaultImage =
  'https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805__340.png';

const CardsCast = ({ cast }) => {
  return (
    <>
      {cast.length === 0 ? (
        <p>There is no information about the cast...</p>
      ) : (
        <div className={s.Wrap}>
          <ul className={s.List}>
            {cast.map(({ cast_id, profile_path, name, character }) => (
              <li key={cast_id} className={s.Item}>
                <img
                  src={profile_path ? PATH_IMAGE + profile_path : defaultImage}
                  alt={name}
                  className={s.Img}
                />
                <div>
                  <p className={s.Name}>{name}</p>
                  <p className={s.Character}>Chracter: {character}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

CardsCast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      cast_id: PropTypes.number.isRequired,
      profile_path: PropTypes.string,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    })
  ),
};

export default CardsCast;
