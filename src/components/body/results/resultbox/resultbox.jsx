import './resultbox.scss'
import React, { useState } from "react"
import { AppContext } from '../../../../contextProvider'

export function ResultBox(props) {
	const [onHover, setOnHover] = useState(false)
	const {userInfo,handleReedem} = React.useContext(AppContext)


	function calcBuyHover (productCost,points) {
		if (productCost>points){
			return(<div>Te faltan {(points-props.cost)*-1}<img src="./images/icons/coin.svg" alt="coin" /> </div>)}
		else{
			return (<div>{productCost}<img src="./images/icons/coin.svg" alt="coin" /> <img className="buy-icon-position" src="./images/icons/buy-white.svg" alt="buy white" /></div>)
	
	}}

	function calcBuyNormal (productCost,points){
		if (productCost>points){
			return(<div className={`buy-text-position ${onHover===true ? "invisible":"visible"}`}>Te faltan {(points-props.cost)*-1}<img  className="margin-left-5px" src="./images/icons/coin.svg" alt="coin" height="15px"/> </div>)}	
		else{
			return <img className={`buy-icon-position`} src="./images/icons/buy-blue.svg" alt="buy blue" />
	
	}}


	return 	<div className={`resultbox ${onHover===true ? "resultbox-hover" : "resultbox-normal"}`}onMouseOver={()=>setOnHover(true)}onMouseOut={()=>setOnHover(false)}>
				<div className="container-img"><img src={props.img} alt="" /></div>
				<div className="container-text">
					<div className="category">{props.category}</div>
					<div className="name">{props.name}</div>
				</div>
				{calcBuyNormal(props.cost, userInfo.points)}
				
				<div className={`resultbox-blue ${onHover===true ? "resultbox-blue-hover" : "resultbox-blue-normal"}`}>
					<div className="money-quanty">{calcBuyHover(props.cost, userInfo.points)}			</div>
					<button className="button-redeem" onClick={(e)=>handleReedem(props.id,props.cost)}>Redeem now</button>
					
				</div>

	</div> 
}
