import './boxcoin.scss'
import { AppContext } from '../../../../contextProvider'
import React from "react"
export function BoxCoin() {
	const {userInfo} = React.useContext(AppContext)
		return <div className='boxcoin'>
			{userInfo.points}<img src="./images/icons/coin.svg" alt="coin" />
		</div>
}