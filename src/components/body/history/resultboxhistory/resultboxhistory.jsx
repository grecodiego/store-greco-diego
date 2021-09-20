import React from "react"
import  "./resultboxhistory.scss"

export function ResultBoxHistory(props) {
	
	return 	<div className="resultboxhistory">
				<div className="container-img-history"><img src={props.img} alt="" /></div>
				<div className="container-text-history">
                    <div className="name-history">{props.createDate}</div>
                    <div className="category-history">{props.category}</div>
					<div className="name-history">{props.name}</div>
				</div>	
	</div>
}