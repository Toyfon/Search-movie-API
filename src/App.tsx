import React, {useState} from 'react'

import './App.css'

import {API, MovieType} from "./api/api"
import {Preloader} from "./Components/Preloader/Preloader"
import {Header} from "./Components/Header/Header"
import {Main} from "./Components/Main/Main"
import {Error} from "./Components/Error/Error"

//types
export type StatusType = 'idle' | 'loading' | 'succeeded' | 'failed'


export const App = () =>  {
    const [result, setResult] = useState<MovieType[]>([])
    const [error, setError] = useState<null | string>(null)
    const [status, setStatus] = useState<StatusType>('idle')
    const [movieTotalCount, setMovieTotalCount] = useState<number>(0)
    const [value, setValue] = useState<string>('')
    const [currentPage, setCurrentPage] = useState<number>(1)

    const showResultByTitle = async (value?: string, page?: number) => {
        try {
            setStatus('loading')
            const {data} = await API.searchFilmByTitle(value, page)
            if (data.Response === 'True') {
                setResult(data.Search)
                setMovieTotalCount(Number(data.totalResults))
                setStatus('succeeded')
            } else {
                setError(data.Error)
                setStatus('failed')
            }
        } catch (e: any) {
            setError(e.message)
            setStatus('failed')
        }
    }

    return (
        <div className="App" style={{position: 'relative'}}>
           <Error error={error} setError={setError}/>
            <Header showResultByTitle={showResultByTitle}
                    setCurrentPage={setCurrentPage}
                    setError={setError}
                    value={value}
                    setValue={setValue}
                    setResult={setResult}
            />
            {status === 'loading' ? (<Preloader/>) : (
                <Main movies={result} error={error}
                      movieTotalCount={movieTotalCount}
                      showResultByTitle={showResultByTitle}
                      currentPage={currentPage}
                      setCurrentPage={setCurrentPage}
                      value={value}
                      setResult={setResult}
                />
            )}
        </div>
    )
}



