import { PageButton } from '../pagebutton/pagebutton'
import './menu.scss'
import { QuantyProducts } from '../quantyproducts/quantyproducts'
import { SortButton } from './sortbutton/sortbutton'
import { PageNumber } from './pagenumber/pagenumber'
import { AppContext } from "../../../contextProvider"
import React from "react"

export function Menu(props) {
	const {handleReset,handleSortHigherPrice,handleSortLowerPrice,handleSortByNameAZ, handleSortByNameZA} = React.useContext(AppContext)
	function makePageButtons(count){
		const buttonNumbers = []
		for (let step = 0; step < count; step++) {buttonNumbers.push(<PageNumber number={step+1} onPress={(e)=>props.jump(step+1)}></PageNumber>) }
			return buttonNumbers
	}
	return <div className='Menu'>
		<QuantyProducts/>
		<h3 className="text-sortBy menu-container">Sort by:</h3>
		<div className="menu-container-sortbuttons">
		<SortButton jump={props.jump} textButton={"Sort A~Z"} handle={(e)=>handleSortByNameAZ()}/>
		<SortButton jump={props.jump} textButton={"Sort Z~A"} handle={(e)=>handleSortByNameZA()}/>
		<SortButton jump={props.jump} textButton={"Lowest Price"} handle={(e)=>handleSortLowerPrice()}/>
		<SortButton jump={props.jump} textButton={"Highest Price"} handle={(e)=>handleSortHigherPrice()} />
		<SortButton jump={props.jump} textButton={"Reset"} handle={(e)=>handleReset()} />
		</div>
		<div className="menu-container-arrows">
		<PageButton onPress={props.prev} img={"./images/icons/arrow-left.svg"}/>
		{props.count >0 ? makePageButtons(props.count):null}
		<PageButton onPress={props.next}img={"./images/icons/arrow-right.svg"}/>
	
		</div>
	</div>
}
