import { FC, useCallback } from 'react';

import { useSelector } from 'react-redux';

import backArrow from '../../assets/img/icons8-back-24.png';
import forwardArrow from '../../assets/img/icons8-forward-24.png';

import s from './Pagination.module.css';

import { fetchMovies, setCurrentPage } from 'bll/searchMovieSlice';
import {
  getCurrentPage,
  getCurrentTitle,
  getMovies,
  getMovieTotalCount,
} from 'bll/selectors/selectors';
import { useAppDispatch } from 'hooks/typed-hooks';

export const Pagination: FC = () => {
  const movieTotalCount = useSelector(getMovieTotalCount);
  const currentPage = useSelector(getCurrentPage);
  const currentTitle = useSelector(getCurrentTitle);
  const movies = useSelector(getMovies);

  const dispatch = useAppDispatch();

  const moviesOnPage = 10;
  let pages: number[] = [];
  const pagesCount = Math.ceil(movieTotalCount / moviesOnPage);

  if (movieTotalCount && currentPage) {
    if (currentPage && pagesCount <= 9) {
      for (let i = 1; i <= pagesCount; i += 1) {
        pages.push(i);
      }
    } else if (currentPage >= 6 && currentPage < pagesCount - 6) {
      for (let i = currentPage - 4; i <= currentPage + 4; i += 1) {
        pages.push(i);
      }
    } else if (currentPage <= 6) {
      pages = Array(9)
        .fill(0)
        .map((_, i) => i + 1);
    } else {
      for (let i = pagesCount - 8; i <= pagesCount; i += 1) {
        pages.push(i);
      }
    }
  }

  const handleChangeCurrentPage = useCallback(
    (page: number) => {
      dispatch(setCurrentPage(page));
      dispatch(fetchMovies({ title: currentTitle, page }));
    },
    [dispatch, currentTitle],
  );

  const mappedPages = pages.map(el => (
    <div
      role="presentation"
      className={currentPage === el ? s.selectedPage : s.pageNumber}
      key={el}
      onClick={() => handleChangeCurrentPage(el)}
    >
      {el}
    </div>
  ));

  return (
    <div>
      {movies.length > 0 && (
        <div className={s.paginator}>
          <div className={s.pages}>
            {currentPage !== 1 && (
              <span
                onClick={() => handleChangeCurrentPage(currentPage - 1)}
                role="presentation"
              >
                <img src={backArrow} alt="back icon" />
              </span>
            )}
            {mappedPages}
            {currentPage !== pagesCount && (
              <span
                onClick={() => handleChangeCurrentPage(currentPage + 1)}
                role="presentation"
              >
                <img src={forwardArrow} alt="forward icon" />
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
