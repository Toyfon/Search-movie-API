import React, { FC } from 'react';

import './App.css';
import { useSelector } from 'react-redux';

import { selectStatus } from 'bll/selectors/selectors';
import { Error } from 'Components/Error/Error';
import { Preloader } from 'Components/Preloader/Preloader';
import { Header } from 'Features/Header/Header';
import { Main } from 'Features/Main/Main';

export const App: FC = () => {
  const status = useSelector(selectStatus);

  return (
    <div className="App" style={{ position: 'relative' }}>
      <Error />
      <Header />
      {status === 'loading' ? <Preloader /> : <Main />}
    </div>
  );
};
