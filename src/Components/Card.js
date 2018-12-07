import React from 'react';

const Card = (props) => {
   return props.indSnack.map(snack => {
      return (
         <div className= 'snack-card'>
            <div className="card">
               <img className="card-img-top" src="https://via.placeholder.com/300" alt="Card image cap"></img>
               <div className="card-body">
                  <h5 className="card-title">{snack.name}</h5>
                  <p className="card-text">{snack.description}</p>
                  <p className="card-text">Price: ${snack.price}</p>
                  <p className="card-text">{`This snack is ${snack.is_perishable ? 'perishable' : 'not perishable'}`}</p>
                  <div class="input-group">
                     <div class="input-group-prepend">
                        <p>Reviews</p>
                     </div>
                     <textarea  aria-label="With textarea">{snack.reviews}</textarea>
                  </div>
               </div>

            </div>
         </div>
      )
   })
}

export default Card