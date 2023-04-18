import React from 'react';
import { Link } from 'react-router-dom';
import TopMenu from './topMenu';
import '../node_modules/bootstrap-css-only/css/bootstrap.css';
import {Dropdown} from "react-bootstrap";





export default class qso extends  React.Component {
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

            <div >
                 
                 <nav class="navbar navbar-light bg-light">
  <div class="container">
    Somos Radioaficionados
  </div>
</nav>
<TopMenu />
            
            
            <div class="card-header bgdiv text-white">
                <h1>QSO's</h1> 
            </div>

            <div className="container-fluid table-scroll-vertical">

            <p>&nbsp;</p>
            
                    <div style={{'width': '100%', 'height': '100%', 'background-color': 'rgba(0,0,255,0.1)'}}>
                        <div class="card" style={{'background-color':'#439139ef'}}>
                            <div class="card-body " >
                                <div className="row">
                                    <div className="col-12">
                                        Incluya un contacto a Log Argentina
                                    </div>
                                </div>

                                <div className="row">&nbsp;</div>
                             
                                
                                <div className="row">&nbsp;</div>
                                <div className="row">
                                <div className="col-2 text-left">Callsign</div>
                                    <div className="col-10 text-center">
                                        <input type="text" className="form-control" style={{ 'width': '100% !important'}} id="callsign"  value={this.state.search} onChange={this.handleChange} /> 
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-2 text-left">Banda</div>
                                    <div className="col-10 text-center">


                                    <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                  Banda
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">2200 m</Dropdown.Item>
                  <Dropdown.Item href="#">630 m</Dropdown.Item>
                  <Dropdown.Item href="#">160 m</Dropdown.Item>
                  <Dropdown.Item href="#">80 m</Dropdown.Item>
                  <Dropdown.Item href="#">60 m</Dropdown.Item>
                  <Dropdown.Item href="#">40 m</Dropdown.Item>
                  <Dropdown.Item href="#">30 m</Dropdown.Item>
                  <Dropdown.Item href="#">20 m</Dropdown.Item>
                  <Dropdown.Item href="#">17 m</Dropdown.Item>
                  <Dropdown.Item href="#">15 m</Dropdown.Item>
                  <Dropdown.Item href="#">12 m</Dropdown.Item>
                  <Dropdown.Item href="#">10 m</Dropdown.Item>
                  <Dropdown.Item href="#">6 m</Dropdown.Item>
                  <Dropdown.Item href="#">2 m</Dropdown.Item>
                  <Dropdown.Item href="#">1,25 m</Dropdown.Item>
                  <Dropdown.Item href="#">70 cm</Dropdown.Item>
                  <Dropdown.Item href="#">23 cm</Dropdown.Item>
                  <Dropdown.Item href="#">13 cm</Dropdown.Item>
                  <Dropdown.Item href="#">9 cm</Dropdown.Item>
                  <Dropdown.Item href="#">5 cm</Dropdown.Item>
                  <Dropdown.Item href="#">3 cm</Dropdown.Item>
                  <Dropdown.Item href="#">1,2 cm</Dropdown.Item>
                  <Dropdown.Item href="#">6 mm</Dropdown.Item>

                  
                </Dropdown.Menu>
              </Dropdown>
                                    </div>
                                </div>
                                <div className="row">
                                <div className="col-2 text-left">Modo</div>
                                    <div className="col-10 text-center">
                                    <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                  Modo
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">CW</Dropdown.Item>
                  <Dropdown.Item href="#">AM</Dropdown.Item>
                  <Dropdown.Item href="#">SSB</Dropdown.Item>
                  <Dropdown.Item href="#">ATV</Dropdown.Item>
                  <Dropdown.Item href="#">SSTV</Dropdown.Item>
                  <Dropdown.Item href="#">PACKET</Dropdown.Item>
                  <Dropdown.Item href="#">APRS</Dropdown.Item>
                  <Dropdown.Item href="#">RTTY</Dropdown.Item>
                  <Dropdown.Item href="#">FM</Dropdown.Item>
                  <Dropdown.Item href="#">FAX</Dropdown.Item>
                  <Dropdown.Item href="#">DV</Dropdown.Item>
                  
                  
                </Dropdown.Menu>
              </Dropdown>
                                    </div>
                                </div>
                                <div className="row">
                                <div className="col-2 text-left">Fecha</div>
                                    <div className="col-10 text-center">
                                        <input type="text" className="form-control" style={{ 'width': '100% !important'}} id="date"  value={this.state.search} onChange={this.handleChange} /> 
                                    </div>
                                </div>
                                <div className="row">
                                <div className="col-2 text-left">Hora</div>
                                    <div className="col-10 text-center">
                                        <input type="text" className="form-control" style={{ 'width': '100% !important'}} id="time"  value={this.state.search} onChange={this.handleChange} /> 
                                    </div>
                                </div>
                                <div className="row">
                                <div className="col-2 text-left">RST</div>
                                    <div className="col-10 text-center">
                                    <div className="row">
                                        <div className="col-3 text-center">
                                            <div className="col-3 text-center">R</div>
                                            <input type="text" className="form-control" id="rst_r"  value={this.state.search} onChange={this.handleChange} /> 
                                        </div>
                                        <div className="col-3 text-center">
                                            <div className="col-3 text-center">S</div>
                                            <input type="text" className="form-control" id="rst_s"  value={this.state.search} onChange={this.handleChange} /> 
                                        </div>
                                        <div className="col-3 text-center">
                                            <div className="col-3 text-center">T</div>
                                            <input type="text" className="form-control"  id="rst_t"  value={this.state.search} onChange={this.handleChange} /> 
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                <div className="col-2 text-left">Prop</div>
                                    <div className="col-10 text-center">
                                        <input type="text" className="form-control" style={{ 'width': '100% !important'}} id="prop"  value={this.state.search} onChange={this.handleChange} /> 
                                    </div>
                                </div>
                                <div className="row">
                                <div className="col-2 text-left">Mensaje</div>
                                    <div className="col-10 text-center">
                                        <input type="text" className="form-control" style={{ 'width': '100% !important'}} id="message"  value={this.state.search} onChange={this.handleChange} /> 
                                    </div>
                                </div>
                                <div className="row">&nbsp;</div>
    
                                <div className="row">
                                    <div className="col-12 text-right">
                                
                                        <Link to={"/results/"+this.state.search}>
                                            <button type="button" class="btn btn-light">Registrar!</button>
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