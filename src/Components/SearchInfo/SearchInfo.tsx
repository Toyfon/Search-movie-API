import {FC} from "react"

import {MovieType} from "../../api/api"


type PropsType = {
    value: string
    movieTotalCount: number
    movies: MovieType[]
}

export const SearchInfo: FC<PropsType> = (props) => {
    const {value, movieTotalCount, movies} = props

    return (
        <div className='container'>
            {movies.length > 0 &&
            <h3>You searched for: {value}, {movieTotalCount} results found</h3>
            }
        </div>
    )
}