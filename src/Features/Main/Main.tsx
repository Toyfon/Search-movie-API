import React from "react"

import {SearchInfo} from "../SearchInfo/SearchInfo"
import {MainContent} from "../MainContent/MainContent"
import {useTypedSelector} from "../../hooks/typed-hooks";


export const Main = React.memo(() => {

        const error = useTypedSelector(state => state.app.error)

        return (<>
                {!error &&
                <div className='container'>
                    <SearchInfo/>
                    <MainContent/>
                </div>
                }
            </>
        )
    }
)