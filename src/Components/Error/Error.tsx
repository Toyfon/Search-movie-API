import React, {useEffect} from "react"

import {useAppDispatch, useTypedSelector} from "../../hooks/typed-hooks";
import {setAppError} from "../../bll/appSlice";
import {clearMoviesData} from "../../bll/searchMovieSlice";

import s from "./Error.module.scss"
import iconClose from '../../assets/img/closeIcon.svg'


export const Error = React.memo(() => {

        const error = useTypedSelector<string | null>(state => state.app.error)
        const dispatch = useAppDispatch()

        useEffect(() => {
            const timer = setTimeout(() => {
                dispatch(setAppError(null))
            }, 4000);
            dispatch(clearMoviesData())
            return () => clearTimeout(timer)

        }, [error, dispatch])

        const onHideErrorHandler = () => dispatch(setAppError(null))

        return (
            <div className={`${s.errorContainer} ${error && s.active}`}>
                <span className={s.message}>{error}</span>
                <span
                    role="presentation"
                    onClick={onHideErrorHandler}
                    style={{backgroundImage: `url(${iconClose})`}}
                    className={s.close}
                />
            </div>
        )
    }
)