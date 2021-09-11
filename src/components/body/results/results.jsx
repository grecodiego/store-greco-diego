import './results.scss'
import {ResultBox} from "./resultbox/resultbox.jsx"
import React from "react"
export function Results(props) {

	return <div className='results'> 
	{props.data.currentData().map((product)=>{return <ResultBox 
	key={product._id} 
	id={product._id} 
	name={product.name}
	cost={product.cost}
	category={product.category}
	img={product.img.url}/>})}
</div>
}