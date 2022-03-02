import { ChangeEvent, FC, KeyboardEvent, memo } from 'react';

type PropsType = {
  onChange: (value: string) => void;
  value: string;
  setValue: (value: string) => void;
};

export const Input: FC<PropsType> = memo(({ onChange, value, setValue }) => {
  const changeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.currentTarget.value);
  };

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      onChange(e.currentTarget.value);
    }
  };

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
