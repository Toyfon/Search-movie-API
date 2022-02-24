import React from 'react'

import {Preloader} from "./Components/Preloader/Preloader"
import {Header} from "./Features/Header/Header"
import {Main} from "./Features/Main/Main"
import {Error} from "./Components/Error/Error"
import {useTypedSelector} from "./hooks/typed-hooks";
import {StatusType} from "./bll/appSlice";

import './App.css'

export const App = () => {

    const status = useTypedSelector<StatusType>(state => state.app.status)

    return (
        <div className="App" style={{position: 'relative'}}>
            <Error/>
            <Header/>
            {status === 'loading' ? (<Preloader/>) : (
                <Main/>
            )}
        </div>
    )
}



