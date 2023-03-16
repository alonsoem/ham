import React from 'react';
import { Link } from 'react-router-dom';
import TopMenu from './topMenu';
import '../node_modules/bootstrap-css-only/css/bootstrap.css';





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
                                        <input type="text" className="form-control" style={{ 'width': '100% !important'}} id="band"  value={this.state.search} onChange={this.handleChange} /> 
                                    </div>
                                </div>
                                <div className="row">
                                <div className="col-2 text-left">Modo</div>
                                    <div className="col-10 text-center">
                                        <input type="text" className="form-control" style={{ 'width': '100% !important'}} id="mode"  value={this.state.search} onChange={this.handleChange} /> 
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
                                        <input type="text" className="form-control" style={{ 'width': '100% !important'}} id="rst"  value={this.state.search} onChange={this.handleChange} /> 
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