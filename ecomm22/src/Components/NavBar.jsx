import { Link } from "react-router-dom";

function NavBar(){
    return(
      <>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/alta">Registro</Link></li>
        <li><Link to="/ingresar">Ingresar</Link></li>
        <li><Link to="/contador">Contador</Link></li>
      </>
    )
  }
  
  export default NavBar; 
  