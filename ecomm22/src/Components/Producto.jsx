import React, {useEffect} from 'react'
import Productos from './Productos'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'


function Producto({
    id, 
    name, 
    description,
    price,
    image
}){
    //console.log("props", props)
    //const {title, category, price} = props

    return(
        <div>
            <h2>{name}</h2>
            <p>{price}</p>
            <p>${description}</p>
            <img src={image}></img>
            <br />
            <br />

      
            <Button type="button" >
                <Link to={`/producto/${id}`}>Ver Detalle</Link>
            </Button>
        </div>
    )
}

export default Producto
