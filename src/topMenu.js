
import 'react-bootstrap-typeahead/css/Typeahead.css';
import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//import NavDropdown from 'react-bootstrap/NavDropdown';




const TopMenu = () => {



  return (




    <div >
                 
                 <Navbar  bg="light" className="navbar navbar-light navbar-custom ">
    
                 
<b>Somos Radioaficionados</b>
    
    </Navbar>


    <Navbar collapseOnSelect bg="light" className="navbar" expand="sm">
          <Nav.Link href="/v2/">Búsqueda</Nav.Link>
          <Nav.Link href="/v2/repeaters">Repetidoras</Nav.Link>        
            
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="nav me-auto">

             <NavDropdown title="Herramientas" id="nav-dropdown" href="/v2/tools" >
               <NavDropdown.Item href="/v2/viewer/Bandas y frecuencias/bandas.png">Bandas y frecuencias</NavDropdown.Item>
                <NavDropdown.Item href="/v2/viewer/Código Fonético/codigo-ICAO.png" >Código Fonético</NavDropdown.Item>
                <NavDropdown.Item href="/v2/viewer/Código Morse/morse.jpg">Código Morse</NavDropdown.Item>
                <NavDropdown.Item href="/v2/viewer/Código RST/rst.jpg">Código RST</NavDropdown.Item>
                <NavDropdown.Item href="/v2/viewer/Código Q/codigoQ.jpg">Código Q</NavDropdown.Item>
                <NavDropdown.Item href="/v2/solarConditions">Condiciones Solares</NavDropdown.Item>
                <NavDropdown.Item href="/v2/utc">Hora UTC</NavDropdown.Item>
                <NavDropdown.Item href="/v2/viewer/Prefijos Chile/prefijos-chile.jpg">Prefijos Chile</NavDropdown.Item>
                <NavDropdown.Item href="/v2/viewer/Prefijos Brasil/prefijos-brasil.jpg">Prefijos Brasil</NavDropdown.Item>
                <NavDropdown.Item href="/v2/viewer/Sufijos Uruguay/sufijos-uruguay.gif">Sufijos Uruguay</NavDropdown.Item>
                <NavDropdown.Item href="/v2/viewer/Sufijos Argentina/sufijos-argentina.webp">Sufijos Argentina</NavDropdown.Item>              
                <NavDropdown.Item href="/v2/cqcall">Llamado CQ</NavDropdown.Item>
                <NavDropdown.Item href="http://www.amsat.org.ar/pass.htm">Tracking satélites</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/v2/tools">Todo</NavDropdown.Item>
              </NavDropdown>
          
          
              <Nav.Link href="/v2/updates">Actualizaciones</Nav.Link>
              <Nav.Link href="/v2/feedback">Envía un comentario</Nav.Link>
              
              
            
        </Nav>
          </Navbar.Collapse>
    </Navbar>
    
</div>
  );
};

export default TopMenu;
