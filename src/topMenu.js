
import 'react-bootstrap-typeahead/css/Typeahead.css';
import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';




const TopMenu = () => {



  return (




    <div >
                 
                 <Navbar  bg="light" className="navbar navbar-light navbar-custom ">
    
                 
<b>Somos Radioaficionados</b>
    
    </Navbar>


    <Navbar collapseOnSelect bg="light" className="navbar" expand="sm">
          <Nav.Link href="/v2/">Inicio</Nav.Link>
          <Nav.Link href="/v2/repeaters">Repetidoras</Nav.Link>        
            
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="nav me-auto">

          
          <Nav.Link href="/v2/tools">Herramientas</Nav.Link>
              <Nav.Link href="/v2/updates">Actualizaciones</Nav.Link>
              <Nav.Link href="/v2/feedback">Envia un comentario</Nav.Link>
              
              
            
        </Nav>
          </Navbar.Collapse>
    </Navbar>
    
</div>
  );
};

export default TopMenu;