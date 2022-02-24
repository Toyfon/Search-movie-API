import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {API, FullFilledResponseType, MovieType, RejectedResponseType} from "../api/api";
import {setAppError, setAppStatus} from "./appSlice";


export const fetchMovies = createAsyncThunk<{ data: FullFilledResponseType },
    { title: string, page?: number },
    {
        rejectValue: RejectedResponseType
    }>(
    'movies/FetchMovies',
    async (
        {title, page}: { title: string, page?: number },
        {dispatch, rejectWithValue}) => {
        dispatch(setAppStatus('loading'))
        try {
            const res = await API.searchFilmByTitle(title, page)
            if (res.data.Response === 'True') {
                dispatch(setAppStatus('succeeded'))
                return {data: res.data}
            } else {
                dispatch(setAppStatus('failed'))
                return rejectWithValue({
                    Error: res.data.Error === "Incorrect IMDb ID." ? 'Enter title' : res.data.Error,
                    Response: res.data.Response
                })
            }
        } catch (e: any) {
            debugger
            dispatch(setAppStatus('failed'))
            dispatch(setAppError(e.message))
            return rejectWithValue(e.message)
        }
    }
)

const searchMovieSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [] as MovieType[],
        currentTitle: '' as string,
        totalResults: 0 as number,
        currentPage: 1 as number
    },
    reducers: {
        setCurrentTitle: (state, action: PayloadAction<string>) => {
            state.currentTitle = action.payload
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload
        },
        clearMoviesData: (state) => {
            state.movies = []
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.movies = action.payload.data.Search
            state.totalResults = +action.payload.data.totalResults
        })
    }
})


export const {setCurrentTitle, setCurrentPage, clearMoviesData} = searchMovieSlice.actions

export default searchMovieSlice.reducer


