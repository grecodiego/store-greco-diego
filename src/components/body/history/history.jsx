import './history.scss'
import { ResultBoxHistory } from "./resultboxhistory/resultboxhistory";
import React from "react"
import { AppContext } from "../../../contextProvider"

export function History() {
	const {data,setHomeLink} = React.useContext(AppContext)
  setHomeLink(true)

	return <div className='history'>
 		{data.currentData().map((product)=>{return <ResultBoxHistory 
		key={product.product_id} 
		id={product.product_id} 
		name={product.name}
		category={product.category}
		createDate={product.createDate}
		img={product.img.url}/>})} 
	</div>
}
/*  {
    "productId": "5a033eeb364bf301523e9b92",
    "name": "Sandalia Pale Gold YSL",
    "cost": 200,
    "category": "Indumentaria",
    "_id": "5a09ac59d867f70a56c0d7b2",
    "createDate": "2017-11-13T14:33:05.920Z",
    "img": {
      "url": "Some URL",
      "hdUrl": "Some HD URL"
    }*/