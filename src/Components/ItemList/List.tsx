import React from 'react';
import s from "./List.module.css";


type ListPropsType<T> = {
    items: T[]
    renderItem: (item: T) => React.ReactNode
}

export default function List<T>(props: ListPropsType<T>) {
    const {items, renderItem} = props

    return (
        <div className={s.wrapper}>
            {items.map(renderItem)}
        </div>
    )
}