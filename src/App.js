import './app.scss'
import React from "react"
import {Banner} from "./components/banner/banner"
import {Header} from "./components/header/header"
import {Body} from "./components/body/body"



function App() {

	return <div className='App'>
		<Header/>
		<Banner/>
		<Body/>
	</div>
}
export default App
	