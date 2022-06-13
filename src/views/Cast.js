import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { getMoviesInfo } from 'service/api';

import { Status } from 'helper/ststus';
import Loader from 'components/Loader';
import CardsCast from 'components/CardsCast';

const PARAMS = 'credits';

const Cast = ({ movieId }) => {
  const [cast, setCast] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    setStatus(Status.PENDING);
    getMoviesInfo(movieId, PARAMS)
      .then(data => {
        setCast(data.cast);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setStatus(Status.RESOLVED);
      });
  }, [movieId]);

  return (
    <>
      {status === Status.PENDING && <Loader />}

      {status === Status.RESOLVED && <CardsCast cast={cast} />}

      {status === Status.REJECTED && (
        <p>There is no information about the cast...</p>
      )}
    </>
  );
};

Cast.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default Cast;
