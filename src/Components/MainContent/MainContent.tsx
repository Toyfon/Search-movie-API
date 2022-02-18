import React, {FC} from "react"

import {Pagination} from "../Pagination/Pagination"
import {MovieType} from "../../api/api"
import List from "../ItemList/List";
import {Item} from "../Item/Item";

type PropsType = {
    movies: MovieType[]
    movieTotalCount: number
    showResultByTitle: (value: string, page: number) => void
    currentPage: number
    setCurrentPage: (page: number) => void
    value: string
}

export const MainContent: FC<PropsType> = React.memo((props) => {
        const { movies, value, currentPage, setCurrentPage, movieTotalCount, showResultByTitle} = props

        return <>
            <List items={movies}
                  renderItem={(movie: MovieType) => <Item movie={movie} key={movie.Title}
                  />}/>
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