import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../node_modules/bootstrap-css-only/css/bootstrap.css';




export default class landing extends  React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search:"",

        };
    }
    
     handleChange = (event) => {
        this.setState({search:event.target.value});
      };

    componentDidMount() {
               
    }


        

    render() {
        
        

        return (
            <div className="container mt-0">
                 <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Somos Radioaficionados</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/tools">Herramientas</Nav.Link>
            <Nav.Link href="/updates">Info</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

            <div className="container-fluid table-scroll-vertical">
            
            <div class="card-header bgdiv text-white">
                <h1>Busqueda</h1> 
            </div>

<p>&nbsp;</p>
            
                    <div style={{'width': '100%', 'height': '100%', 'background-color': 'rgba(0,0,255,0.1)'}}>
                        <div class="card" style={{'background-color':'#439139ef'}}>
                            <div class="card-body " >
                                <div className="row">
                                    <div className="col-12">
                                        Consulte aquí las señales distintivas vigentes de Argentina, Brasil, Chile,  Uruguay, Perú y Ecuador.
                                    </div>
                                </div>

                                <div className="row">&nbsp;</div>
                             
                                <div className="row">
                                    <div className="col-2"><img src="/static/flags/gif/ar.gif" alt="" /></div>
                                    <div className="col-2"><img src="/static/flags/gif/br.gif" alt=""/></div>
                                    <div className="col-2"><img src="/static/flags/gif/uy.gif" alt=""/></div>
                                    <div className="col-2"><img src="/static/flags/gif/cl.gif" alt=""/></div>
                                    <div className="col-2"><img src="/static/flags/gif/pe.gif" alt=""/></div>
                                    <div className="col-2"><img src="/static/flags/gif/ec.gif" alt=""/></div>
                                </div>
                                <div className="row">&nbsp;</div>
                                <div className="row">
                                    <div className="col-12 text-center">
                                        <input type="text" className="form-control" style={{ 'width': '100% !important'}} id="searchValue"  value={this.state.search} onChange={this.handleChange} /> 
                                    </div>
                                </div>
                                <div className="row">&nbsp;</div>
    
                                <div className="row">
                                    <div className="col-12 text-right">
                                
                                        <Link to={"/results/"+this.state.search}>
                                            <button type="button" class="btn btn-light">Buscar</button>
                                        </Link>
                                    </div>
                                </div>
                           
                            </div>

                        </div>
                    </div>
            </div>
            
        </div>

        );


    }

}