import './quantyproducts.scss'
import { AppContext } from '../../../contextProvider'
import React from "react"

export function QuantyProducts(props) {
	const {arrayProducts} = React.useContext(AppContext)
	let quantyProdView = 16 * (props.currentPage)
	return <div className='quantyproducts'>
        {quantyProdView} of {arrayProducts.length} products

	</div>
}
