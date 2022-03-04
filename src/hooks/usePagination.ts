import { useState } from 'react';

import { UsePagination } from 'hooks/types';

export const usePagination: UsePagination = ({ contentPerPage, count }) => {
  // eslint-disable-next-line no-debugger
  debugger;
  const [page, setPage] = useState<number>(1);

  const pageCount = Math.ceil(count / contentPerPage);
  // index of last item of current page
  const lastContentIndex = contentPerPage * page;
  // index of first item of current page
  const firstContentIndex = lastContentIndex - contentPerPage;

  // change page based on direction either front or back
  const changePage = (direction: boolean): void => {
    setPage(state => {
      // move forward
      if (direction) {
        // if page is the last page, do nothing
        if (state === pageCount) {
          return state;
        }
        return state + 1;
        // go back
      }
      // if page is the first page, do nothing
      if (state === 1) {
        return state;
      }
      return state - 1;
    });
  };

  const setPageSAFE = (num: number): void => {
    // if number is greater than number of pages, set to last page
    if (num > pageCount) {
      setPage(pageCount);
      // if number is less than 1, set page to first page
    } else if (num < 1) {
      setPage(1);
    } else {
      setPage(num);
    }
  };

  return {
    totalPages: pageCount,
    nextPage: () => changePage(true),
    prevPage: () => changePage(false),
    setPage: setPageSAFE,
    firstContentIndex,
    lastContentIndex,
    page,
  };
};

export default usePagination;
