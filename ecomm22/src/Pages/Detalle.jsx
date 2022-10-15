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
                const responseData = await getByIdProductos(id)
                setProducto(responseData.data)
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
                <h1>{producto.title}</h1>
                <p>{producto.price}</p>
              
                
            </div>
        )
    }




}

export default Detalle 