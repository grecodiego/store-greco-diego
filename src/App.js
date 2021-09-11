import './app.scss'
import {Header} from "./components/header/header.jsx"
import {Banner} from"./components/banner/banner"
import {Body} from"./components/body/body.jsx"
import React from "react"
import {Switch,Route} from "react-router-dom"
import {Main} from "./components/main/main"

function App() {
	return <div className='App'>
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
		</Switch>
	</div>
}
export default App
	