import { memo } from 'react';

import { MainContent } from '../MainContent/MainContent';
import { SearchInfo } from '../SearchInfo/SearchInfo';

import { useTypedSelector } from 'hooks/typed-hooks';

export const Main = memo(() => {
  const error = useTypedSelector(state => state.app.error);

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
