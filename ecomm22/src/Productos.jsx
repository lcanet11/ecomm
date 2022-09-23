import React, {Component} from 'react';
import Producto from './Producto';

class Productos extends Component {
    render() {

        const productos = [
            {
                id:1,
                title:"Moto G",
                price:1000,
                category:"Celulares"
            },
            {
                id:2,
                title:"Moto G",
                price:1500,
                category:"Celulares"
            },
            {
                id:1,
                title:"Moto G",
                price:2000,
                category:"Celulares"
            }
        ]

        console.log(productos[1].title)

        return(
            <div>
                {productos.map(producto => <Producto title={producto.title} price={producto.price} category={producto.category}/>)}
            </div>
        )
    }
}

export default Productos; 