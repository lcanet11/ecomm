import React, {useState, useEffect} from 'react';
import Producto from './Producto';
import { getAll } from "../Services/productosServices"


function Productos(){
    //const [titulo, setTitulo] = useState()
    const titulo = "Listado de Productos"
    const [productos, setProductos] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const result = async ()=>{
            try {
                const responseData = await getAll()
                console.log(responseData.data);
                setProductos(responseData.data.results)
                setIsLoading(false)
            } catch(e){
                console.log(e);
            }

        }

        result()
    /*
        //buscar en base de datos
      const response = fetch("https://api.mercadolibre.com/sites/MLA/search?q=ipod")
      .then((res)=> res.json())
      .then((responseData) => {
        console.log(responseData)
      })
      .catch(e=>{
        console.log(e)
      })*/
    }, []
    )

    const filtrar = () => {

        setProductos([{
            title: '100 Semillas Orgánicas Nepeta Cataria Hierba Gatera Catnip'
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
                {productos.map(producto => <Producto {...producto}/>)}
                <button onClick={filtrar}>Filtrar</button>
            </div>
        )
    }
}

export default Productos;
