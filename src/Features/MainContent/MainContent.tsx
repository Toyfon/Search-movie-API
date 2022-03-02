import { memo } from 'react';

import { useSelector } from 'react-redux';

import { MovieType } from 'api/api';
import { selectMovies } from 'bll/selectors/selectors';
import { Item } from 'Components/Item/Item';
import { List } from 'Components/ItemList/List';
import { Pagination } from 'Features/Pagination/Pagination';

export const MainContent = memo(() => {
  const movies = useSelector(selectMovies);

  return (
    <>
      <List
        items={movies}
        renderItem={(movie: MovieType) => <Item movie={movie} key={movie.Title} />}
      />
      <Pagination />
    </>
  );
});
