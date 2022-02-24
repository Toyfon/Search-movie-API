import React, {useCallback} from "react"

import {useAppDispatch, useTypedSelector} from "../../hooks/typed-hooks";
import {fetchMovies, setCurrentPage} from "../../bll/searchMovieSlice";
import {MovieType} from "../../api/api"

import forwardArrow from '../../assets/img/icons8-forward-24.png'
import backArrow from '../../assets/img/icons8-back-24.png'
import s from './Pagination.module.css'


export const Pagination = () => {

    const movieTotalCount = useTypedSelector<number>(state => state.movies.totalResults)
    const currentPage = useTypedSelector<number>(state => state.movies.currentPage)
    const currentTitle = useTypedSelector<string>(state => state.movies.currentTitle)
    const movies = useTypedSelector<MovieType[]>(state => state.movies.movies)

    const dispatch = useAppDispatch()

    const moviesOnPage = 10
    let pages: number[] = []
    const pagesCount = Math.ceil(movieTotalCount / moviesOnPage);

    if (movieTotalCount && currentPage) {

        if (currentPage && pagesCount <= 9) {
            for (let i = 1; i <= pagesCount; i += 1) {
                pages.push(i)
            }
        } else if (currentPage >= 6 && currentPage < pagesCount - 6) {
            for (let i = currentPage - 4; i <= currentPage + 4; i += 1) {
                pages.push(i)
            }
        } else if (currentPage <= 6) {
            pages = Array(9)
                .fill(0)
                .map((_, i) => i + 1)
        } else {
            for (let i = pagesCount - 8; i <= pagesCount; i += 1) {
                pages.push(i)
            }
        }
    }

    const onChangeCurrentPage = useCallback((page: number) => {
        dispatch(setCurrentPage(page))
        dispatch(fetchMovies({title: currentTitle, page}))
    }, [dispatch, currentTitle])

    const mappedPages = pages.map((el) => (
        <div className={currentPage === el ? s.selectedPage : s.pageNumber}
             key={el}
             onClick={() => onChangeCurrentPage(el)}
        >
            {el}
        </div>
    ));

    return (<>
            {movies.length > 0 &&
            <div className={s.paginator}>
                <div className={s.pages}>
                    {currentPage !== 1 &&
                    <span
                        onClick={() => onChangeCurrentPage(currentPage - 1)}
                    >
                    <img src={backArrow} alt="back icon"/>
                </span>}
                    {mappedPages}
                    {currentPage !== pagesCount &&
                    <span
                        onClick={() => onChangeCurrentPage(currentPage + 1)}
                    >
                        <img src={forwardArrow} alt="forward icon"/>
                    </span>}
                </div>
            </div>
            }
        </>
    )
}
