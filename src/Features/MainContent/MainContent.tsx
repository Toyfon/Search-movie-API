import React from "react"

import {Pagination} from "../Pagination/Pagination"
import {MovieType} from "../../api/api"
import {Item} from "../../Components/Item/Item";
import List from "../../Components/ItemList/List";
import {useTypedSelector} from "../../hooks/typed-hooks";


export const MainContent = React.memo(() => {

    const movies = useTypedSelector<MovieType[]>(state => state.movies.movies)

        return <>
            <List items={movies}
                  renderItem={(movie: MovieType) => <Item movie={movie} key={movie.Title}/>}/>
            <Pagination/>
        </>
    }
)