import { NavLink } from 'react-router-dom';

import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <NavLink
        exact
        to="/"
        className={s.navLink}
        activeClassName={s.activeNavLink}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={s.navLink}
        activeClassName={s.activeNavLink}
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
