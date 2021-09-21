
import { BrowserRouter as Route, Switch } from 'react-router-dom'
import {Results} from "../components/body/results/results"
import {History} from "../components/body/history/history"
import {NotFound} from "../components/body/notfound/notfound"

export const Router = () => {
	return (
            <Switch>
                <Route exact path="/store-greco-diego" > 
                    <Results/>
                </Route>
                <Route path="/store-greco-diego/history" > 
                    <History/>
                </Route>
                <Route path="*">
                    <NotFound />
                 </Route>
            </Switch>
            )
}



//render={()=>{return <Results />}}
//render={()=>handleHistoryRoute()}
/* 
function handleHistoryRoute () {
    setHomeLink(true)
    return <History/>
} */