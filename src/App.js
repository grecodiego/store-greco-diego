import './app.scss'
import {Header} from "./components/header/header.jsx"
import {Banner} from"./components/banner/banner.jsx"
import {Body} from"./components/body/body.jsx"
import React from "react"
import {Route} from "react-router-dom"
import {Main} from "./components/main/main"

function App() {
	return <div className='App'>
		<Route exact path="/store-greco-diego">
			<Banner/> 
			<Main/>
		</Route>
		<Route path="/home" >
			<Header/>
			<Banner/> 
			<Body/>
		</Route>
	</div>
}
export default App
