import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchMovies} from "./searchMovieSlice";


const appSlice= createSlice({
    name:'app',
    initialState:{
        error: null as string | null,
        status: 'idle' as StatusType
    },
    reducers:{
        setAppStatus: (state, action: PayloadAction<StatusType>) => {
            state.status = action.payload
        },
        setAppError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload
        }
    },
    extraReducers: builder =>  {
        builder.addCase(fetchMovies.rejected, (state, action) => {
            if(action.payload)
            state.error = action.payload.Error
        })
    }
})

//actions
export const {setAppStatus, setAppError} = appSlice.actions

//types
export type StatusType = 'idle' | 'loading' | 'succeeded' | 'failed'


export default appSlice.reducer