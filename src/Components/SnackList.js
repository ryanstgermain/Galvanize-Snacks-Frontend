import React from 'react'

const SnackList = (props) => {
    return props.snacks.map(snack => {
        return (
           
            <li onClick= {props.specificSnack} id= {snack.id} className="list-group-item list-group-item-action rounded">{snack.name}</li>
                
        )
    })
}


export default SnackList