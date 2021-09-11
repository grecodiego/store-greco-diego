import './body.scss'
import { Menu } from './menu/menu'
import {Results} from './results/results.jsx'
import { QuantyProducts } from '../body/quantyproducts/quantyproducts'
import usePagination from '../../utils/pagination'
import { AppContext } from "../../contextProvider"
import React, {useState,useEffect} from "react"


export function Body() {
	const {arrayProducts} = React.useContext(AppContext)
	let [page, setPage] = useState(1);
	const PER_PAGE = 16;
	const count = Math.ceil(arrayProducts.length / PER_PAGE);
	let data = usePagination(arrayProducts, PER_PAGE);
	console.log(data)
	const handleChange = (p) => {
		setPage(p);
		data.jump(p);
	};
	const handleChangePrev = () => {
		data.prev();
	};
	const handleChangeNext = () => {
		data.next();

	};

	return <div className='body'>
        <Menu  count={count} prev={handleChangePrev} next={handleChangeNext} jump={handleChange}/>
		<Results data={data} />
		<QuantyProducts currentPage={data.currentPage}/>
	</div>
}
