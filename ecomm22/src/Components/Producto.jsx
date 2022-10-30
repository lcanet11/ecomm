import React, {useEffect} from 'react'
import Productos from './Productos'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'


function Producto({
    id,
    title, 
    category,
    price,
    category_id,
    thumbnail,
    condition,
}){
    //console.log("props", props)
    //const {title, category, price} = props

    return(
        <div>
            <h2>{title}</h2>
            <p>{category}</p>
            <p>${price}</p>
            <p>{category_id}</p>
            <img src={thumbnail}></img>
            <br />
            <br />

      
            <Button type="button" >
                <Link to={`/producto/${id}`}>Ver Detalle</Link>
            </Button>
        </div>
    )
}

export default Producto
