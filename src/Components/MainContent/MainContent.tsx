import React, {FC} from "react"

import {ItemList} from "../ItemList/ItemList"
import {Pagination} from "../Pagination/Pagination"
import {MovieType} from "../../api/api"

type PropsType = {
    error: string | null
    movies: MovieType[]
    movieTotalCount: number
    showResultByTitle: (value: string, page: number) => void
    currentPage: number
    setCurrentPage: (page: number) => void
    value: string
}

export const MainContent: FC<PropsType> = React.memo((props) => {
        const {error, movies, value, currentPage, setCurrentPage, movieTotalCount, showResultByTitle} = props

        return <>
            <ItemList error={error} movies={movies}/>
            <Pagination
                movies={movies}
                movieTotalCount={movieTotalCount}
                showResultByTitle={showResultByTitle}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                value={value}/>
        </>
    }
)