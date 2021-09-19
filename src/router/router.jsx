
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
            <Route exact path="/store-greco-diego"  component={Results} render={()=>{return <Results />}}/>
            <Route path="/store-greco-diego/history"  component={History} exact render={()=>handleHistoryRoute()} />
        </div>)
}



