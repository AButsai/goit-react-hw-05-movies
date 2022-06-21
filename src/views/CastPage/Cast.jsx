import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { getMoviesInfo } from 'service/api';

import { Status } from 'helpers/helpers';
import Loader from 'components/Loader';
import CardsCast from 'components/CardsCast';

const PARAMS = 'credits';

const Cast = ({ movieId }) => {
  const [cast, setCast] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    setStatus(Status.PENDING);

    async function getCast() {
      try {
        const data = await getMoviesInfo(movieId, PARAMS);

        setCast(data.cast);
        setStatus(Status.RESOLVED);
      } catch (_error) {
        setStatus(Status.RESOLVED);
      }
    }

    getCast();
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
