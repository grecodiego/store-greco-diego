import React from "react"
import "./modalredeem.scss"

export const ModalReedem = ({chidren, isOpen, closeModal}) => {

	return <div className={`modal-wrapper ${isOpen&& "is-open"}`}>
				<div className="modalreedem">
					<div className="modal-logo-container">	
						<div className="modal-circle">✓</div>
					</div>
					<div className="modal-content">
						<h2>SUCCESS!</h2>
						<h4>YEAH! EVERYTHING IS WORKING!!</h4>	
						<button className="modal-btn" onClick={closeModal}>CONTINUE</button>
					</div>
				</div>
		</div>

}
