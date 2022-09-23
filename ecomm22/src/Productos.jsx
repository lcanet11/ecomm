import React, {Component} from 'react';
import Producto from './Producto';

class Productos extends Component {
    constructor(){
        super()
        this.state = {
            productos: [
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
            ]
        }
    }

    filtrar = () => {
        this.setState({
            productos: [{
                price:2000,
            }]
        })
    }


    render() {
        return(
            <div>
                <h1>{this.state.titulo}</h1>
                {this.state.productos.map(producto => <Producto title={producto.title} price={producto.price} category={producto.category}/>)}
                <button onClick={this.filtrar}>Filtrar</button>
            </div>
        )
    }
}

export default Productos; 