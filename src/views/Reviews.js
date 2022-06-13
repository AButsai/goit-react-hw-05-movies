import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getMoviesInfo } from 'service/api';
import { Status } from 'helper/ststus';
import Loader from 'components/Loader';
import CardReviews from 'components/CardReviws/CardReviews';

const PARAMS = 'reviews';

const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    setStatus(Status.PENDING);
    getMoviesInfo(movieId, PARAMS)
      .then(data => {
        setReviews(data.results);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setStatus(Status.RESOLVED);
      });
  }, [movieId]);

  return (
    <>
      {status === Status.PENDING && <Loader />}

      {status === Status.RESOLVED && <CardReviews reviews={reviews} />}

      {status === Status.REJECTED && (
        <p>There is no information about the cast...</p>
      )}
    </>
  );
};

Reviews.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default Reviews;
