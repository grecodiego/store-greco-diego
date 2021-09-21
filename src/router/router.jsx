
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {Results} from "../components/body/results/results"
import {History} from "../components/body/history/history"

export const Routes = () => {
	return (
        <Router>
            <Switch>
                <Route exact path="store-greco-diego/" > 
                    <Results/>
                </Route>
                <Route path="store-greco-diego/history/" > 
                    <History/>
                </Route>
            </Switch>
        </Router>)
}



//render={()=>{return <Results />}}
//render={()=>handleHistoryRoute()}
/* 
function handleHistoryRoute () {
    setHomeLink(true)
    return <History/>
} */