import './quantyproducts.scss'
import { AppContext } from '../../../contextProvider'
import React from "react"

export function QuantyProducts(props) {
	const {arrayProducts} = React.useContext(AppContext)
	return <div className='quantyproducts'>
        {} of {arrayProducts.length} products

	</div>
}
