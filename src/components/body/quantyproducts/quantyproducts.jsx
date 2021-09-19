import './quantyproducts.scss'
import { AppContext } from '../../../contextProvider'
import React from "react"

export function QuantyProducts(props) {
	const {arrayProducts,homeLink, arrayHistory} = React.useContext(AppContext)
	let quantyProdView = 16 * (props.currentPage)
	return <div className='quantyproducts'>
        {quantyProdView} of {homeLink === false?arrayProducts.length:arrayHistory.length} products

	</div>
}
