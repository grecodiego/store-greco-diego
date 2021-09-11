import './header.scss'
import {BoxUser}from "./boxuser/boxuser.jsx"
import { getPoints } from '../../services/coins'
import { NavGetPoints } from './navgetpoints/navgetpoints'
import {ButtonPoints} from "./buttonpoints/buttonpoints"
import { AppContext } from "../../contextProvider"
import React from "react"
export function Header() {
	const {open} = React.useContext(AppContext)
	return <div className='header'>
	<img src='./images/body/aerolab-logo.svg' alt='logo-lab'width="36px"/>	
	<div className="user-info">
		<ButtonPoints/>
		{open === true ? <NavGetPoints/>: null}
		<BoxUser/>
		</div>

	</div>
}
