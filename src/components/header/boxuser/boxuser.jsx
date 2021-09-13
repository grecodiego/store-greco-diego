import './boxuser.scss'
import { AppContext } from '../../../contextProvider'
import {BoxCoin}from "./boxcoin/boxcoin.jsx"
import React from "react"
export function BoxUser() {
	const {userInfo} = React.useContext(AppContext)
	return <div className='boxuser'>
	{userInfo.name}
	<BoxCoin/>
	</div>
}


