import  "./buttonpoints.scss"
import React from "react"
import { AppContext } from "../../../../contextProvider"

export function ButtonPoints () {
    const {setOpen,open} = React.useContext(AppContext)

    return <button className="button-points" onClick={(e)=>setOpen(!open)}>Get Coins!!</button>
}