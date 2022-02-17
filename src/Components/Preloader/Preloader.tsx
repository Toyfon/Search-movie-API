import s from './Preloader.module.css'
import loader from '../../assets/img/preloader.gif'
import React from "react"

export const Preloader = React.memo(() => {
        return (
            <div className={s.preloader}>
                <img src={loader} alt="loader"/>
            </div>
        )
    }
)