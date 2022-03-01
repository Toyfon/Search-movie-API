import { memo } from 'react';

import loader from '../../assets/img/preloader.gif';

import s from './Preloader.module.css';

export const Preloader = memo(() => (
  <div className={s.preloader}>
    <img src={loader} alt="loader" />
  </div>
));
