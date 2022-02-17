import React, {FC} from "react"

import {MovieType} from "../../api/api"
import s from "./ItemList.module.css"
import {Item} from "../Item/Item"


type PropsType = {
    error: null | string
    movies: MovieType[]
}

export const ItemList: FC<PropsType> = React.memo(({movies}) => {
        return (
            <div className={s.wrapper}>
                {
                    movies.map(m => {
                        return <Item key={m.imdbID}
                                     movie={m}/>
                    })
                }
            </div>
        )
    }
)