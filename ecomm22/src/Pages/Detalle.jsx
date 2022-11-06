import { useParams, Link } from "react-router-dom"
import { getByIdProductos } from "../Services/productosServices"
import { useState, useEffect } from 'react';

function Detalle() {
    const {id}= useParams()
    
    const [producto, setProducto] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const result = async ()=>{
            try {
                // const responseData = await getByIdProductos(id)
                // setProducto(responseData.data)
                const productoData = await getByIdProductos(id)
                if(productoData){
                    setProducto(productoData.data())
                }
                setIsLoading(false)
            } catch(e){
                console.log(e);
            }
        }
        result()
    }, [id]
    )

    if(isLoading){
        return(
            <div>
                Cargando....
            </div>
        )} else {
        return(
            <div>
                <Link to="/">Inicio</Link>
                <h1>{producto.name}</h1>
                <p>{producto.price}</p>
                <p>{producto.description}</p>
                <img src={producto.image}></img>
          
            </div>
        )
    }

}

export default Detalle 