import './body.scss'
import { Menu } from './menu/menu'
import { QuantyProducts } from '../body/quantyproducts/quantyproducts'
import { AppContext } from "../../contextProvider"
import React from "react"
import { Routes } from "../../router/router.jsx"
import {ModalReedem} from "./modalredeem/modalsuccess/modalredeem"
import { ModalError } from './modalredeem/modalerror/modalerror'

export function Body() {
	const {data,count,handleChangePrev,handleChangeNext,handleChange,closeModalReedemSuccess,isOpenModalReedemSuccess,isOpenModalReedemError,closeModalReedemSError} = React.useContext(AppContext)
	return <div className='body'>
        <Menu  currentPage={data.currentPage} count={count} prev={handleChangePrev} next={handleChangeNext} jump={handleChange}/>
		<Routes/>
		<QuantyProducts currentPage={data.currentPage}/>
		<ModalReedem isOpen={isOpenModalReedemSuccess} closeModal={closeModalReedemSuccess} /> 
		<ModalError isOpen={isOpenModalReedemError} closeModal={closeModalReedemSError} />
	</div>
}
