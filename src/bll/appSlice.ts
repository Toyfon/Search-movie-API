import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchFailed } from './searchMovieSlice';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    error: null as string | null,
    status: 'idle' as StatusType,
  },
  reducers: {
    setAppStatus: (state, action: PayloadAction<StatusType>) => {
      state.status = action.payload;
    },
    setAppError: (state, { payload }: PayloadAction<string | null>) => {
      state.error = payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchFailed, (state, { payload }) => {
      if (payload) state.error = payload.Error;
    });
  },
});

// actions
export const { setAppStatus, setAppError } = appSlice.actions;

// types
export type StatusType = 'idle' | 'loading' | 'succeeded' | 'failed';

export default appSlice.reducer;
