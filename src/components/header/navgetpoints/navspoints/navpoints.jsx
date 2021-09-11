import './navpoints.scss'
import { AppContext } from "../../../../contextProvider"
import React from 'react'

export function NavPoints (props) {
    const {handleGetPoints} = React.useContext(AppContext)
    

    return <div className="navpoints" onClick={(e)=>handleGetPoints(props.quanty)}>Add {props.quanty} Points!!</div>
}