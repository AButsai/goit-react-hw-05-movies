import Navigation from 'components/Navigation';
import s from './AppBar.module.css';

const AppBar = () => {
  return (
    <div className={s.Header}>
      <Navigation />
    </div>
  );
};

export default AppBar;
