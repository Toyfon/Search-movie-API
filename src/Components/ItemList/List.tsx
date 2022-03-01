import React from 'react';

import s from './List.module.css';

type ListPropsType<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
};

export const List: <T>(p: ListPropsType<T>) => React.ReactElement<ListPropsType<T>> = ({
  items,
  renderItem,
}) => <div className={s.wrapper}>{items.map(renderItem)}</div>;
