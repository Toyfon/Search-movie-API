import React, {useCallback, useState} from "react"

import s from './Header.module.css'

import {Input} from "../../Components/Input/Input"
import {Profile} from "../Profile/Profile"
import {fetchMovies, setCurrentTitle} from "../../bll/searchMovieSlice";
import {useAppDispatch} from "../../hooks/typed-hooks";


export const Header= React.memo(() => {

        const [value, setValue] = useState<string>('')

        const dispatch = useAppDispatch()

        const onchangeHandler = useCallback((title: string) => {
            dispatch(fetchMovies({title}))
            dispatch(setCurrentTitle(title))
        }, [dispatch])

        return <header className={s.header}>
            <div className='container'>
                <div className={s.headerWrapper}>
                    <div className={s.search}>
                        <span className={s.logo}>Movie catalog</span>
                        <div className={s.input}>
                            <Input callBack={onchangeHandler}
                                   value={value}
                                   setValue={setValue}
                            />
                        </div>
                    </div>
                    <Profile userName='Vasily'/>
                </div>
            </div>
        </header>
    }
)