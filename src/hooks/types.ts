type usePaginationProps = {
  contentPerPage: number;
  count: number;
};

type UsePaginationReturn = {
  page: number;
  totalPages: number;
  firstContentIndex: number;
  lastContentIndex: number;
  nextPage: () => void;
  prevPage: () => void;
  setPage: (page: number) => void;
};

export type UsePagination = (arg0: usePaginationProps) => UsePaginationReturn;
