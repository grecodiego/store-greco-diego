
import {Route} from 'react-router-dom'
import {Results} from "../components/body/results/results"
import {History} from "../components/body/history/history"
import React from 'react'
import { AppContext } from "../contextProvider"


export const Router = () => {
	const {setHomeLink} = React.useContext(AppContext)
    function handleHistoryRoute () {
        setHomeLink(true)
        return <History/>
    }

	return (
        <div>
            <Route exact path="/"  component={Results} render={()=>{return <Results />}}/>
            <Route path="/history"  component={History} exact render={()=>handleHistoryRoute()} />
        </div>)
}



