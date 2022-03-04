import React, { FC } from 'react';

import { useSelector } from 'react-redux';

import backArrow from 'assets/img/icons8-back-24.png';
import forwardArrow from 'assets/img/icons8-forward-24.png';
import { selectMovieTotalCount } from 'bll/selectors/selectors';
import usePagination from 'hooks/usePagination';

export const PaginationWithHooks: FC = () => {
  const movieTotalCount = useSelector(selectMovieTotalCount);
  const {
    // firstContentIndex,
    // lastContentIndex,
    nextPage,
    prevPage,
    // page,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: 10,
    count: movieTotalCount,
  });
  return (
    <div>
      <button
        type="button"
        onClick={prevPage}
        style={{
          height: '16px',
          border: 'none',
          outline: 'none',
          backgroundColor: 'transparent',
        }}
      >
        <img src={backArrow} alt="arrow" style={{ height: '16px' }} />
      </button>
      {/* @ts-ignore */}
      {[...Array(totalPages).keys()].map(el => (
        <button
          type="button"
          onClick={() => setPage(el + 1)}
          key={el}
          // className={`page ${page === el + 1 ? "active" : ""}`}
        >
          {el + 1}
        </button>
      ))}
      <button
        type="button"
        onClick={nextPage}
        style={{
          height: '16px',
          border: 'none',
          outline: 'none',
          backgroundColor: 'transparent',
        }}
      >
        <img src={forwardArrow} alt="arrow" style={{ height: '16px' }} />
      </button>
    </div>
  );
};
