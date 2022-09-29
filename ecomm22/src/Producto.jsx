
import React, {useEffect} from 'react'
import Productos from './Productos'

function Producto({
    title, 
    category, 
    price
}){
    //console.log("props", props)
    //const {title, category, price} = props

    return(
        <div>
            <h2>{title}</h2>
            <p>{category}</p>
            <p>{price}</p>
            <button>Ver Detalle</button>
        </div>
    )
}

export default Producto
