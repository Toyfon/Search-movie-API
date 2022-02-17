import {instance} from "./instance"

const key = 'e061473e'
export const API = {
    searchFilmByTitle (title:string | undefined, page: number | undefined = 1) {
        return instance.get<ResponseType>(`?apikey=${[key]}&s=${title}&page=${page}`)
    }
}

//types
export type MovieType = {
    Poster: string
    Title: string
    Type: string
    Year: string
    imdbID: string
}

type ResponseType = {
    Search: MovieType[]
    Response: string
    Error:string
    totalResults: string
}