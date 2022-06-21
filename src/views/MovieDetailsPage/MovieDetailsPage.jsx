import { useState, useEffect, lazy, Suspense } from 'react';
import {
  NavLink,
  useParams,
  useRouteMatch,
  Route,
  useHistory,
  useLocation,
} from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';
import Loader from 'components/Loader';
import { getMovieDetails } from 'service/api';
import { Status } from 'helpers/helpers';
import CardMovie from 'components/CardMovie';

import s from './MovieDetailsPage.module.css';

const Cast = lazy(() =>
  import('../CastPage/Cast' /* webpackChunkName: "Cast" */)
);
const Reviews = lazy(() =>
  import('../ReviewsPage/Reviews' /* webpackChunkName: "Reviews" */)
);

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [errors, setErrors] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  const location = useLocation();
  const history = useHistory();
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();

  useEffect(() => {
    setStatus(Status.PENDING);

    async function getDetailsMovie() {
      try {
        const data = await getMovieDetails(movieId);
        setMovie(data);
        setStatus(Status.RESOLVED);
      } catch (error) {
        setErrors(error);
        setStatus(Status.REJECTED);
      }
    }

    getDetailsMovie();
  }, [movieId]);

  const onGoBack = () => {
    history.push(location?.state?.from ?? '/');
  };

  return (
    <>
      {status === Status.PENDING && <Loader />}

      {status === Status.RESOLVED && (
        <>
          <button className={s.button} type="button" onClick={onGoBack}>
            <BsArrowLeftShort /> Go back
          </button>
          <CardMovie movie={movie}>
            <NavLink
              to={{
                pathname: `${url}/cast`,
                state: location.state,
              }}
              className={s.link}
              activeClassName={s.activeLink}
            >
              Cast
            </NavLink>
            <NavLink
              to={{
                pathname: `${url}/reviews`,
                state: location.state,
              }}
              className={s.link}
              activeClassName={s.activeLink}
            >
              Reviews
            </NavLink>
          </CardMovie>

          <Suspense fallback={<Loader />}>
            <Route path={`${path}/cast`}>
              <Cast movieId={movieId} />
            </Route>
            <Route path={`${path}/reviews`}>
              <Reviews movieId={movieId} />
            </Route>
          </Suspense>
        </>
      )}

      {status === Status.REJECTED && (
        <>
          <button className={s.button} type="button" onClick={onGoBack}>
            <BsArrowLeftShort /> Go back
          </button>
          <p style={{ marginTop: '20px', fontSize: '20px', fontWeight: 500 }}>
            {errors}
          </p>
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;
