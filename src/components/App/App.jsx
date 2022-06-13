import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from '../Container';
import AppBar from '../AppBar';
import Loader from '../Loader';

const HomePage = lazy(() =>
  import('views/HomePage' /* webpackChunkName: "HomePage" */)
);
const MoviesPage = lazy(() =>
  import('views/MoviesPage' /* webpackChunkName: "MoviesPage" */)
);
const MovieDetailsPage = lazy(() =>
  import('views/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */)
);

export const App = () => {
  return (
    <Container>
      <AppBar />

      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/movies">
            <MoviesPage />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
          <Route>
            <HomePage />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
};
