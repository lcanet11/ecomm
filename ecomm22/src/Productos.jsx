import React, {useState, useEffect} from 'react';
import Producto from './Producto';


function Productos(){
    const [titulo, setTitulo] = useState()
    const [productos, setProductos] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        //buscar en base de datos 
        setTimeout(() =>{
            setProductos([
                {
                    id:1,
                    title:"Moto G",
                    price:1000,
                    category:"Celulares"
                },
                {
                    id:2,
                    title:"Moto K",
                    price:1500,
                    category:"Celulares"
                },
                {
                    id:3,
                    title:"iPhone",
                    price:2000,
                    category:"Celulares"
                }
            ])
            setIsLoading(false)
        }, 2000)
    }, []
    )

    const filtrar = () => {
        setProductos([{
            id:3,
            title:"iPhone",
            price:2000,
            category:"Celulares"
        }])
    }

    if(isLoading){
        return(
            <div>
                Cargando....
            </div>
        )} else {
        return(
            <div>
                <h1>{titulo}</h1>
                {productos.map(producto => <Producto title={producto.title} price={producto.price} category={producto.category}/>)}
                <button onClick={filtrar}>Filtrar</button>
            </div>
        )
    }
}

export default Productos; 