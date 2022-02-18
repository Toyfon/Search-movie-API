import React, {FC, useCallback} from "react"

import s from './Header.module.css'

import {Input} from "../Input/Input"
import {MovieType} from "../../api/api"
import {Profile} from "../Profile/Profile"


type PropsType = {
    showResultByTitle: (value: string, page?: number) => void
    value: string
    setValue: (value: string) => void
    setCurrentPage: (page: number) => void
    setResult: (result: MovieType[]) => void
}

export const Header: FC<PropsType> = React.memo((props) => {
        const {showResultByTitle,value, setValue, setCurrentPage, setResult,} = props

        const onchangeHandler = useCallback((value: string) => {
            showResultByTitle(value)
        }, [showResultByTitle])

        return <header className={s.header}>
            <div className='container'>
                <div className={s.headerWrapper}>
                    <div className={s.search}>
                        <span className={s.logo}>Movie catalog</span>
                        <div className={s.input}>
                            <Input callBack={onchangeHandler}
                                   value={value}
                                   setValue={setValue}
                                   setCurrentPage={setCurrentPage}
                                   setResult={setResult}
                            />
                        </div>
                    </div>
                    <Profile userName='Vasily'/>
                </div>
            </div>
        </header>
    }
)