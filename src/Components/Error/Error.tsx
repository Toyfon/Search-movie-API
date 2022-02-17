import React, {FC, useEffect} from "react"

import s from "./Error.module.scss"
import iconClose from '../../assets/img/closeIcon.svg'

type PropsType = {
    error: string | null
    setError: (error: string | null) => void
}

export const Error: FC<PropsType> = React.memo((props) => {
        const {error, setError} = props

        useEffect(() => {
            const timer = setTimeout(() => {
                setError(null);
            }, 4000);
            return () => clearTimeout(timer)
        }, [error, setError])

        const onHideErrorHandler = () => setError(null)

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