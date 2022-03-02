import { memo, useCallback, useState } from 'react';

import { fetchMovies, setCurrentTitle } from 'bll/searchMovieSlice';
import { Input } from 'Components/Input/Input';
import s from 'Features/Header/Header.module.css';
import { Profile } from 'Features/Profile/Profile';
import { useAppDispatch } from 'hooks/typed-hooks';

export const Header = memo(() => {
  const [value, setValue] = useState<string>('');

  const dispatch = useAppDispatch();

  const handleTitleChange = useCallback(
    (title: string) => {
      dispatch(fetchMovies({ title }));
      dispatch(setCurrentTitle(title));
    },
    [dispatch],
  );

  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.headerWrapper}>
          <div className={s.search}>
            <span className={s.logo}>Movie catalog</span>
            <div className={s.input}>
              <Input onChange={handleTitleChange} value={value} setValue={setValue} />
            </div>
          </div>
          <Profile userName="Vasily" />
        </div>
      </div>
    </header>
  );
});
