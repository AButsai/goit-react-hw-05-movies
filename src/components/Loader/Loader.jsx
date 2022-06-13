import { TailSpin } from 'react-loader-spinner';

import s from './Loader.module.css';

const Loader = () => {
  return (
    <div className={s.Loader}>
      <TailSpin color="#0000FF" height={100} width={100} />
    </div>
  );
};

export default Loader;
