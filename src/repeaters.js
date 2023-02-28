import React from 'react';
import {getRepeaters} from "./api/api";

import '../node_modules/bootstrap-css-only/css/bootstrap.css';



export default class results extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results:{},          
            repeaters:[],          
            paisId:null,
            value:""
        };
        this.handleChangeValue = this.handleChangeValue.bind(this);
    }


    handleChangeValue = (event) => {
        this.setState({ value: event.target.value });
        this.update(event.target.value);
        console.log (this.state.repeaters);
      };

    

    update = (newValue) => {
        getRepeaters({"local":newValue})
            .then((data) => {   
                    //this.setState({results:data});
                    this.setState({repeaters:data.repetidoras});
                })
             
            
            .catch(() => this.setState({error: 'Algo anduvo mal! Volvé a intentar'}));
    }




    componentDidMount() {
             
    }


    render() {
       

        return (
            <div className="container-fluid table-scroll-vertical">
            
            <div className="card-header bgdiv text-white">
                <h1>Repetidoras</h1> 
            </div>

            <p>&nbsp;</p>




            <div style={{'width': '100%', 'height': '100%', 'background-color': 'rgba(0,0,255,0.1)'}}>
                        <div class="card" style={{'background-color':'#439139ef'}}>
                            <div class="card-body " >
                                <div className="row">
                                    <div className="col-12">
                                        Indique una localidad en Argentina <img src="/static/flags/gif/ar.gif" alt="" /> para ver las repetidoras disponibles.
                                    </div>
                                </div>

                                
                             
                              
                                <div className="row">&nbsp;</div>
                                <div className="row">
                                    <div className="col-12 text-center">
                                        <input type="text" className="form-control" style={{ 'width': '100% !important'}} id="searchValue"  onChange={this.handleChangeValue} value={this.state.value} /> 
                                    </div>
                                </div>
                                
    
                               
                           
                            </div>

                        </div>
                    </div>

      









            <div className="card">
                
          
                <div className="card-body">
                        <div className="card">
                            <div className="card-body">
                           

                          
                        {
                            
                        
                                
                                this.state.repeaters.map((each)=>(
                            
                                    <div className="card">
                                        <div className="card-header">
                                            <div className="row">
                                                <div className="col-9">{each.titular}</div>
                                                
                                            </div>
                                            <div className="row">
                                                <div className="col-12">{each.signal}</div>
                                            
                                            </div>
                                        </div>
                                        <div className="card-body ">
                                            <div className="row">
                                                <div className="col-6">
                                                    RECEPCION: {each.rx}<br/>
                                                    TRANSMISION: {each.tx}<br/>
                                                    TONO: {each.tone}<br/>
                                                </div>
                                                <div className="col-6">
                                                <div className="row">
                                                     <div className="col-9">{each.provincia}</div>
                                                    <div className="col-3">{each.localidad}</div>
                                                </div>
                                                {each.pais}<br/>
                                                </div>
                                                
                                                
                                            </div>
                                            
                                            
                                            
                                        </div>
        
                                    </div>
        
        
                                ))
                                

                            
                       }

                       
</div>
                           
                       </div>
                </div>
            </div>
                




            

            </div>
            


        );


    }

}