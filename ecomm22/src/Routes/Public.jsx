import {Route, Routes} from 'react-router-dom'
import Registro from '../Pages/Registro';
import Ingresar from '../Pages/Ingresar';
import NotFound from '../Pages/NotFound';
import Home from '../Pages/Home';
import Contador from '../Pages/Contador';
import Detalle from '../Pages/Detalle'
import ProductosAlta from '../Pages/ProductosAlta';

function Public(){
  return(
    <Routes>   
      <Route path='/' element={<Home />} />
      <Route path='/contador' element={<Contador />} />
      <Route path='/alta' element={<Registro />} />
      <Route path='/ingresar' element={<Ingresar />} />
      <Route path='/producto/:id' element={<Detalle />} />
      <Route path='/productos/alta' element={<ProductosAlta/>} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default Public


/*
<Router>
  <ul>
    <li><Link to="/">Inicio</Link></li>
    <li><Link to="/alta">Registro</Link></li>
    <li><Link to="/ingresar">Ingresar</Link></li>
    <li><Link to="/contador">Contador</Link></li>
  </ul>
    
</Router>
*/

