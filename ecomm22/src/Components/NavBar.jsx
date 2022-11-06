import { Link } from "react-router-dom";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar(){
    return(
      <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">&nbsp;&nbsp;Jardineria</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/alta">Registro</Nav.Link>
            <Nav.Link as={Link} to="/ingresar">Ingresar</Nav.Link>
            <Nav.Link as={Link} to="/contador">Contador</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/productos/alta">Alta</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
        {/* <li><Link to="/">Inicio</Link></li>
        <li><Link to="/alta">Registro</Link></li>
        <li><Link to="/ingresar">Ingresar</Link></li>
        <li><Link to="/contador">Contador</Link></li> */}
      </>
    )
  }
  
  export default NavBar; 
  