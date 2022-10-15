import React, {useState} from 'react'

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
        <button onClick={sumar}>Incrementar</button>
        <button onClick={restar}>Decrementar</button><br />
        <span>{cantidad}</span>
        </>
    )
}

export default Contador