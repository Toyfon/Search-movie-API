import React, {FC} from "react"

import {MovieType} from "../../api/api"
import {SearchInfo} from "../SearchInfo/SearchInfo"
import {MainContent} from "../MainContent/MainContent"



type PropsType = {
    movies: MovieType[]
    error: null | string
    movieTotalCount: number
    showResultByTitle: (value: string, page: number) => void
    currentPage: number
    setCurrentPage: (page: number) => void
    value: string
    setResult: (movies: MovieType[]) => void
}

export const Main: FC<PropsType> = React.memo((props) => {
        const {setCurrentPage, value, currentPage, movieTotalCount, showResultByTitle, movies, error,} = props

        return (<div>
                <div className='container'>
                    <SearchInfo value={value} movieTotalCount={movieTotalCount} movies={movies}/>
                    {!error &&
                    <MainContent error={error}
                                 movies={movies}
                                 movieTotalCount={movieTotalCount}
                                 showResultByTitle={showResultByTitle}
                                 currentPage={currentPage}
                                 setCurrentPage={setCurrentPage}
                                 value={value}
                    />
                    }
                </div>
            </div>

        )
    }
)