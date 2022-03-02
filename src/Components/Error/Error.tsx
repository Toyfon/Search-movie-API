import { FC, memo, useEffect } from 'react';

import { useSelector } from 'react-redux';

import s from './Error.module.scss';

import iconClose from 'assets/img/closeIcon.svg';
import { setAppError } from 'bll/appSlice';
import { clearMoviesData } from 'bll/searchMovieSlice';
import { selectError } from 'bll/selectors/selectors';
import { useAppDispatch } from 'hooks/typed-hooks';

export const Error: FC = memo(() => {
  const error = useSelector(selectError);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setAppError(null));
    }, 4000);
    dispatch(clearMoviesData());
    return () => clearTimeout(timer);
  }, [error, dispatch]);

  const onHideErrorHandler = (): void => {
    dispatch(setAppError(null));
  };

  return (
    <div className={`${s.errorContainer} ${error && s.active}`}>
      <span className={s.message}>{error}</span>
      <span
        role="presentation"
        onClick={onHideErrorHandler}
        style={{ backgroundImage: `url(${iconClose})` }}
        className={s.close}
      />
    </div>
  );
});
