import React, { useEffect, useState } from "react"
import {getArrayProducts} from "./services/products"
import { getUser } from "./services/user";
import {sortByNameAZ,sortByNameZA, sortHigherPrice, sortLowerPrice} from "../src/utils/sortsfunctions"
import { redeem } from "./services/redeem";
import { getPoints } from "../src/services/coins"
import {getHistory}from "./services/history"
import usePagination from './hooks/pagination'
import useModal from "./hooks/useModal"


export const AppContext = React.createContext();

export default function AppProvider({ children }) {

    const [arrayProducts, setArrayProducts] = useState([])
    const [userInfo, setUserInfo] = useState([])
    const [open, setOpen] = useState(false)
    const [sortRender, setSortRender] = useState(true)
    const [arrayHistory,setArrayHistory] = useState([])
    const [homeLink,setHomeLink] = useState(false)
	const [isOpenModalReedemSuccess,openModalReedemSuccess,closeModalReedemSuccess] = useModal(false);
	const [isOpenModalReedemError,openModalReedemError,closeModalReedemSError] = useModal(false)

    const handleSortByNameAZ = () => {
        setArrayProducts(sortByNameAZ(arrayProducts))
        setSortRender(!sortRender)
    }
    const handleSortByNameZA = () => {
        setArrayProducts(sortByNameZA(arrayProducts))
        setSortRender(!sortRender)
    }
    const handleSortHigherPrice = () => {
        setArrayProducts(sortHigherPrice(arrayProducts))
        setSortRender(!sortRender)
    }
    const handleSortLowerPrice= () => {
        setArrayProducts(sortLowerPrice(arrayProducts))    
        setSortRender(!sortRender)
    }
    const handleReset = () =>{
        getArrayProducts().then((arrayProds)=>setArrayProducts(arrayProds))
    }
    let newUserInfo = {}
    function handleReedem (productId, cost){
            if (cost <= userInfo.points) {
  
                redeem(productId, openModalReedemSuccess,openModalReedemError)
                newUserInfo = {...userInfo}
                newUserInfo.points = userInfo.points - cost
                setUserInfo(newUserInfo)
                    }
            else {
                window.alert("No tienes los puntos suficientes")
            }

    }
    const handleGetPoints = (quanty) => {
        getPoints(quanty)
        let newUserInfo = {...userInfo}
        newUserInfo.points = newUserInfo.points + parseInt(quanty)
        setUserInfo(newUserInfo)
    }
    const handleSetInfoUser = (user) => {
        setUserInfo(user)
    }
      

    // PAGINATION PRODUCTS TO REDEEM

	let [page, setPage] = useState(1);
	const PER_PAGE = 16;
	const count = Math.ceil(arrayProducts.length / PER_PAGE);
	let data = usePagination(homeLink === false? arrayProducts: arrayHistory, PER_PAGE);

	const handleChange = (p) => {
		setPage(p);
		data.jump(p);
	};
	const handleChangePrev = () => {
		data.prev();
	};	const handleChangeNext = () => {
		data.next();

	};

    // PAGINATION PRODUCTS TO REDEEM

    useEffect (()=>{getArrayProducts().then((arrayProds)=>setArrayProducts(arrayProds))},[])
    useEffect (()=>{getUser().then((user)=> handleSetInfoUser(user))},[])
    useEffect (()=>{getHistory().then((arrayProds)=>setArrayHistory(arrayProds.reverse()))},[newUserInfo])
  
  
 
        return (
        <AppContext.Provider value={{ handleReset,
            handleSortByNameAZ, 
            handleSortByNameZA,
            setArrayProducts,handleSortLowerPrice, 
            handleSortHigherPrice,
            arrayProducts,
            userInfo,
            setUserInfo,
            setOpen,
            open,
            sortRender,
            setSortRender,
            handleGetPoints,
            handleReedem,
            homeLink,
            setHomeLink,
            arrayHistory,
            isOpenModalReedemSuccess,
            openModalReedemSuccess,
            closeModalReedemSuccess,
            isOpenModalReedemError,
            openModalReedemError,
            closeModalReedemSError,

        //PAGINATION
            data,
            count,
            handleChangePrev,
            handleChangeNext,
            handleChange,

        }}>{children}</AppContext.Provider>
    );
}