import {configureStore} from "@reduxjs/toolkit";
import moviesReducer from './searchMovieSlice'
import appReducer from './appSlice'


export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        app: appReducer
    },
})

export type RootState = ReturnType<typeof store.getState>


export type AppDispatch = typeof store.dispatch

