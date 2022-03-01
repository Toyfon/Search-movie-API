import { useDispatch } from 'react-redux';

import { AppDispatch } from 'bll/store';

export const useAppDispatch = (): Function => useDispatch<AppDispatch>();
