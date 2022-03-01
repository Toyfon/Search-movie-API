import { FC, memo } from 'react';

import notFoundImage from '../../assets/img/no-image-icon-23485.png';

import s from './Item.module.css';

import { MovieType } from 'api/api';

type ItemPropsType = {
  movie: MovieType;
};

export const Item: FC<ItemPropsType> = memo(({ movie }) => {
  const { Poster, Type, Year, Title, imdbID } = movie;

  return (
    <div className={s.wrapper}>
      <img src={Poster !== 'N/A' ? Poster : notFoundImage} alt="Poster" />
      <div className={s.itemBody}>
        <h3>{Title}</h3>
        <p>
          Year: <span> {Year}</span>
        </p>
        <p>
          Type: <span> {Type}</span>
        </p>
        <p>
          imdbID: <span> {imdbID}</span>
        </p>
      </div>
    </div>
  );
});
