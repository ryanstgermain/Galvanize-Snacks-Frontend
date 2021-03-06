import React from 'react'

const Modal = (props) => {
   const showHideClassName = props.showModal ? "modal display-block" : 'hidden'
   return (
      <div className= {showHideClassName} id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div className="modal-dialog modal-main" role="document">
            <div className="modal-content">
               <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Sign Up for Galvanize Snacks</h5>
               </div>
               <div className="modal-body">
                  <input onChange= {props.handleChange}type='text' name= 'first_name' placeholder='First Name'></input>
                  <input onChange= {props.handleChange} type='text' name= 'last_name' placeholder='Last Name'></input>
                  <input onChange= {props.handleChange} type='email' name= 'email' placeholder='email@google.com'></input>
                  <input onChange= {props.handleChange} type='text' name= 'hashed_password' placeholder='Create Password'></input>
               </div>
               <div className="modal-footer">
                  <button onClick={props.hideModal} type="button" className="btn btn-primary" data-dismiss="modal">Sign Me Up</button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Modal