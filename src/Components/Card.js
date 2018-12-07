import React from 'react';

const Card = (props) => {
   return props.indSnack.map(snack => {
      return (
            <div className="snack-card">
               <img className="card-img-top col-4" src= {snack.img} alt="Card image cap"></img>
                  <div className= 'card-info col-4'>
                     <h5 className="card-title">{snack.name}</h5>
                     <p className="card-text">{snack.description}</p>
                     <p className="card-text">Price: ${snack.price}</p>
                     <p className="card-text">{`This snack is ${snack.is_perishable ? 'perishable' : 'not perishable'}`}</p>
                  </div>
                  <div class="input-group col-4">
                     <p>Reviews</p>
                     <textarea  aria-label="With textarea" placeholder= 'Enter review here'></textarea>
                  </div>
            </div>
      )
   })
}

export default Card