import React, {useState} from 'react'
import { Button } from 'react-bootstrap';




function Contador(){
    const [cantidad, setCantidad] = useState(0)

    const sumar = () => {
        setCantidad(cantidad+1);
    }
 
    const restar = () => {
        setCantidad(cantidad-1);
    }

    return(
        <>
        <br />
        <div>
        <img size='250px' src={require('../Imagenes/trolley.jpg')} />&nbsp;
        </div>
        <br />
        <Button onClick={sumar}>Incrementar</Button>&nbsp;
        <Button onClick={restar}>Decrementar</Button><br />
        <span>{cantidad}</span>
        </>
    )
}

export default Contador