import { memo } from 'react';

import { useSelector } from 'react-redux';

import { MainContent } from '../MainContent/MainContent';
import { SearchInfo } from '../SearchInfo/SearchInfo';

import { selectError } from 'bll/selectors/selectors';

export const Main = memo(() => {
  const error = useSelector(selectError);

  return (
    <div>
      {!error && (
        <div className="container">
          <SearchInfo />
          <MainContent />
        </div>
      )}
    </div>
  );
});
