import PropTypes from 'prop-types';
import { PATH_IMAGE, DEFAULT_IMAGE } from 'helpers/helpers';
import s from './CardsCast.module.css';

const CardsCast = ({ cast }) => {
  return (
    <>
      {cast.length === 0 ? (
        <p>There is no information about the cast...</p>
      ) : (
        <div className={s.wrap}>
          <ul className={s.list}>
            {cast.map(({ cast_id, profile_path, name, character }) => (
              <li key={cast_id} className={s.item}>
                <img
                  src={profile_path ? PATH_IMAGE + profile_path : DEFAULT_IMAGE}
                  alt={name}
                  className={s.img}
                />
                <div>
                  <p className={s.name}>{name}</p>
                  <p className={s.character}>Chracter: {character}</p>
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
