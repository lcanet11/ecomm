import React, {Component} from 'react';

class Producto extends Component {
    render() {
        console.log("props", this.props)
        return(
            <div>
                <h2>{this.props.title}</h2>
                <p>{this.props.category}</p>
                <p>{this.props.price}</p>
                <button>Ver Detalle</button>
            </div>
           
        )
    }
}

export default Producto; 