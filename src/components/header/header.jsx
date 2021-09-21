import './header.scss'
import {BoxUser}from "./boxuser/boxuser.jsx"
import { NavGetPoints } from './boxuser/buttonpoints/navgetpoints/navgetpoints'
import {ButtonPoints} from "./boxuser/buttonpoints/buttonpoints"
import { LinkButton } from './linkbutton/linkbutton'
import { AppContext } from "../../contextProvider"
import {Link} from "react-router-dom"
import React from "react"
export function Header() {
	const {open,homeLink,setHomeLink} = React.useContext(AppContext)
	return <div className='header'>
	<img src='./images/body/aerolab-logo.svg' alt='logo-lab'width="36px"/>	
	<div className="user-info">
		<ButtonPoints/>
		{open === true ? <NavGetPoints/>: null}
		{homeLink === false ?
			<Link  style={{ textDecoration: 'none' }} to={"/store-greco-diego/history"}><LinkButton name={"History"} handle={(e)=>setHomeLink(true)}/></Link>: 
			<Link  style={{ textDecoration: 'none' }} to={"/store-greco-diego/"}><LinkButton name={"Home"} handle={(e)=>setHomeLink(false)}/></Link>}
		<BoxUser/>
		</div>
	</div>
}
