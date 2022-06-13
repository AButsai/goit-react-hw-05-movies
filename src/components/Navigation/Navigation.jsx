import { NavLink } from 'react-router-dom';

import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={s.Nav}>
      <NavLink
        exact
        to="/"
        className={s.NavLink}
        activeClassName={s.activeNavLink}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={s.NavLink}
        activeClassName={s.activeNavLink}
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
