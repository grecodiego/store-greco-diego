
import {Route} from 'react-router-dom'
import {Results} from "../components/body/results/results"
import {History} from "../components/body/history/history"


export const Router = () => {
	return (
        <div>
            <Route exact path="/" render={()=>{return <Results />}}/>
            <Route path="/history" render={()=>{return <History />}}/>
        </div>)}