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
import { Status } from 'helper/ststus';
import CardMovie from 'components/CardMovie';

import s from './MovieDetailsPage.module.css';

const Cast = lazy(() => import('./Cast' /* webpackChunkName: "Cast" */));
const Reviews = lazy(() =>
  import('./Reviews' /* webpackChunkName: "Reviews" */)
);

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [errors, setErrors] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  const lacation = useLocation();
  const history = useHistory();
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();

  useEffect(() => {
    setStatus(Status.PENDING);
    getMovieDetails(movieId)
      .then(data => {
        setMovie(data);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setErrors(error);
        setStatus(Status.REJECTED);
      });
  }, [movieId]);

  const onGoBack = () => {
    history.push(lacation?.state?.from ?? '/');
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
              to={`${url}/cast`}
              className={s.link}
              activeClassName={s.activeLink}
            >
              Cast
            </NavLink>
            <NavLink
              to={`${url}/reviews`}
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
