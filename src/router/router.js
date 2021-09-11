
import { BrowserRouter as  Switch, Route } from 'react-router-dom'
import {Header} from "../components/header/header"
import {Banner} from "../components/banner/banner"
import {Body} from "../components/body/body.jsx"
import {Main} from "../components/main/main"

export const Router = () => {
	return (
<Switch>
    <Route exact path="/store-greco-diego">
        <Banner/> 
        <Main/>
    </Route>
    <Route path="/store-greco-diego/home" >
        <Header/>
        <Banner/> 
        <Body/>
    </Route>
 
</Switch>)}