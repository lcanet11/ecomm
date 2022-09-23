import React, {Component} from 'react'; 
import Productos from './Productos';


class Home extends Component{
    constructor () {
        super()
    }

    render(){
        return(
          <div>
            <Productos />
          </div>
        )
    }
}

export default Home; 
