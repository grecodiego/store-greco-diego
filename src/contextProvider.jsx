import React, { useEffect, useState } from "react"
import {getArrayProducts} from "./services/products"
import { getUser } from "./services/user";
import {sortByNameAZ,sortByNameZA, sortHigherPrice, sortLowerPrice} from "../src/utils/sortsfunctions"
import { redeem } from "./services/redeem";
import { getPoints } from "../src/services/coins"
export const AppContext = React.createContext();

export default function AppProvider({ children }) {

    const [arrayProducts, setArrayProducts] = useState([])
    const [userInfo, setUserInfo] = useState([])
    const [open, setOpen] = useState(false)
    const [sortRender, setSortRender] = useState(true)

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
    const handleReedem = (productId, cost) =>{
        if (cost < userInfo.points) {
            redeem(productId)
            let newUserInfo = {...userInfo}
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



    useEffect (()=>{getArrayProducts().then((arrayProds)=>setArrayProducts(arrayProds))},[])
    useEffect (()=>{getUser().then((user)=> handleSetInfoUser(user))},[])
                

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
            handleReedem}}>{children}</AppContext.Provider>
    );
}