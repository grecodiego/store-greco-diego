import './boxuser.scss'
import { AppContext } from '../../../contextProvider'
import {BoxCoin}from "./boxcoin/boxcoin.jsx"
import React from "react"
export function BoxUser() {
	const {userInfo} = React.useContext(AppContext)
	return <div className='boxuser'>
	{userInfo.name}<BoxCoin/>
	</div>
}

/* 

{
	"id": "5a03638052fd231590d04eb5",
	"name": "John Kite",
	"points": 2000,
	"redeemHistory": [],
	"createDate": "new Date(1510171520852)"
  } */