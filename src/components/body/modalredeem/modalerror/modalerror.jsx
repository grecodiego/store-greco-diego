import React from "react"
import "./modalerror.scss"

export const ModalError = ({chidren, isOpen, closeModal}) => {

	return <div className={`modal-error-wrapper ${isOpen&& "is-open"}`}>
				<div className="modalreedem-error">
					<div className="modal-error-logo-container">	
						<div className="modal-error-circle">X</div>
					</div>
					<div className="modal-error-content">
						<h2>ERROR!</h2>
						<h4>OH NO, SOMETHING WENT WRONG!</h4>	
						<button className="modal-error-btn" onClick={closeModal}>TRY AGAIN</button>
					</div>
				</div>
		</div>

}
