import './results.scss'
import {ResultBox} from "./resultbox/resultbox.jsx"
import React from "react"
import { AppContext } from "../../../contextProvider"

export function Results() {
		const {data} = React.useContext(AppContext)
	return <div className='results'> 
		{data.currentData().map((product)=>{return <ResultBox 
		key={product._id} 
		id={product._id} 
		name={product.name}
		cost={product.cost}
		category={product.category}
		img={product.img.url}/>})}
</div>
}