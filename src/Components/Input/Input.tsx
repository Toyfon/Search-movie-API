import React, {ChangeEvent, FC, KeyboardEvent, useCallback} from "react"

import {MovieType} from "../../api/api"



type PropsType = {
    callBack: (value: string) => void
    setError: (error: string | null) => void
    value: string
    setValue: (value: string) => void
    setCurrentPage: (page: number) => void
    setResult: (result: MovieType[]) => void

}

export const Input: FC<PropsType> = React.memo((props) => {
        const {callBack, setError, value, setValue, setCurrentPage, setResult,} = props


        const changeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
            const value = e.currentTarget.value
            setValue(value)
            setError(null)
            setResult([])
        }, [setValue, setError, setResult])


        const onKeyPressHandler = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
                callBack(e.currentTarget.value)
                setCurrentPage(1)
            }
        }, [callBack, setCurrentPage])

        return <>
            <input type="text"
                   value={value}
                   onChange={changeHandler}
                   onKeyPress={onKeyPressHandler}
                   placeholder={'search a movie'}
            />
        </>
    }
)