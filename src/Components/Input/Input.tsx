import { ChangeEvent, FC, KeyboardEvent, memo, useCallback } from 'react';

type PropsType = {
  callBack: (value: string) => void;
  value: string;
  setValue: (value: string) => void;
};

export const Input: FC<PropsType> = memo(props => {
  const { callBack, value, setValue } = props;

  const changeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.currentTarget.value);
    },
    [setValue],
  );

  const onKeyPressHandler = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        callBack(e.currentTarget.value);
      }
    },
    [callBack],
  );

  return (
    <input
      type="text"
      value={value}
      onChange={changeHandler}
      onKeyPress={onKeyPressHandler}
      placeholder="search a movie"
    />
  );
});
