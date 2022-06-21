import PropTypes from 'prop-types';
import s from './CardReviews.module.css';

const CardReviews = ({ reviews }) => {
  return (
    <>
      {reviews.length === 0 ? (
        <p>There is no information about the cast...</p>
      ) : (
        <div className={s.wrap}>
          <ul className={s.list}>
            {reviews.map(({ id, author, content }) => (
              <li key={id} className={s.item}>
                <div>
                  <p className={s.author}>Author: {author}</p>
                  <p className={s.content}>{content}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

CardReviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};

export default CardReviews;
