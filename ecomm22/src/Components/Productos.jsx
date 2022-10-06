import React, {useState, useEffect} from 'react';
import Producto from './Producto';


function Productos(){
    const [titulo, setTitulo] = useState()
    const [productos, setProductos] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const result = async ()=>{
            try {
                const responseData = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=ipod").then((res) =>res.json());
                console.log(responseData.results);
                setProductos(responseData.results)
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