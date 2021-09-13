import './body.scss'
import { Menu } from './menu/menu'
import { QuantyProducts } from '../body/quantyproducts/quantyproducts'
import { AppContext } from "../../contextProvider"
import React, {useState} from "react"
import { Router } from "../../router/router.jsx"


export function Body() {
	const {data,count,handleChangePrev,handleChangeNext,handleChange} = React.useContext(AppContext)


	return <div className='body'>
        <Menu  currentPage={data.currentPage} count={count} prev={handleChangePrev} next={handleChangeNext} jump={handleChange}/>
		<Router/>
		<QuantyProducts currentPage={data.currentPage}/>
	</div>
}
