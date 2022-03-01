import React, { FC } from 'react';

import './App.css';
import { StatusType } from 'bll/appSlice';
import { Error } from 'Components/Error/Error';
import { Preloader } from 'Components/Preloader/Preloader';
import { Header } from 'Features/Header/Header';
import { Main } from 'Features/Main/Main';
import { useTypedSelector } from 'hooks/typed-hooks';

export const App: FC = () => {
  const status = useTypedSelector<StatusType>(state => state.app.status);

  return (
    <div className="App" style={{ position: 'relative' }}>
      <Error />
      <Header />
      {status === 'loading' ? <Preloader /> : <Main />}
    </div>
  );
};
