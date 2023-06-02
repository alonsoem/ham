
import 'react-bootstrap-typeahead/css/Typeahead.css';
import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';




const TopMenu = () => {



  return (

    <div >
                 
    <nav className="navbar navbar-light bg-light navbar-custom">
<div className="container ">
Somos Radioaficionados
</div>
</nav>
    <Navbar bg="light" className="navbar-custom">
      
          <Nav className="nav me-auto">
            <Nav.Link href="/v2/">Inicio</Nav.Link>
            <Nav.Link href="/v2/tools">Herramientas</Nav.Link>
            <Nav.Link href="/v2/repeaters">Repetidoras</Nav.Link>
            <NavDropdown title="+ Info" id="basic-nav-dropdown">
              <NavDropdown.Item href="/v2/updates">Actualizaciones</NavDropdown.Item>
              <NavDropdown.Item href="/v2/feedback">Envia un comentario</NavDropdown.Item>
              
              
            </NavDropdown>
          </Nav>
        
      
    </Navbar>
    
</div>
  );
};

export default TopMenu;