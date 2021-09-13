import  "./linkbutton.scss"
import React from "react"
import { withRouter } from "react-router"
import PropTypes from 'prop-types'


export function LinkButton (props) {
    return <button className="linkbutton" to={"/history"} onClick={props.handle} >{props.name}</button>
}

export default withRouter(LinkButton)