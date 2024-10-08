import React from 'react';
import {getRepeaters} from "./api/api";
import { Link } from 'react-router-dom';
import '../node_modules/bootstrap-css-only/css/bootstrap.css';


import AsyncExample from './asyncSearchBox.js';



export default class results extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results:{},          
            repeaters:[],          
            paisId:null,
            value:"",
        };
        
    }

  

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

    convertUnicode(input){
        return input.replace(/\\+u([0-9a-fA-F]{4})/g, (a,b) =>
        String.fromCharCode(parseInt(b, 16)));
    }
    

    handleChange= (value) => {
        if (value.length>0){
            console.log(this.convertUnicode(value[0].localidad));
            this.update(this.convertUnicode(value[0].localidad));
        }else{
            this.setState({repeaters:[]});
        }
      }

    render() {
       
        const cabeceraCondicionalCard = ()=>{
            if (this.state.repeaters){
                return "<div className=\"card\"><div className=\"card-body\">";
            }
        }
        const pieCondicionalCard= ()=>{
            if (this.state.repeaters){
                return "</div></div>";
            }
            
        }
        return (
            <div>
                  <div className="card-header bgdiv text-white">
                <h1>Repetidoras</h1> 
            </div>
            
            <div className="container-fluid table-scroll-vertical">
            
          

            <p>&nbsp;</p>

            <div style={{'width': '100%', 'height': '100%', 'background-color': 'rgba(0,0,255,0.1)'}}>
                        <div className="card" style={{'background-color':'#439139ef'}}>
                            <div className="card-body " >
                            <div className="row col-12 col-xs-12">
                                    
                                    <div className="col-10 col-xs-5">Indique una localidad en Argentina <img src="/static/flags/gif/ar.gif" alt="" />, Chile <img src="/static/flags/gif/cl.gif" alt="" /> o Uruguay <img src="/static/flags/gif/uy.gif" alt="" /> para ver las repetidoras disponibles.</div>
                                    <div className="col-2 col-xs-1 m-auto">
                                    <Link to={"/newRepeater/"}>
                                        
                                        <button type="button" className="btn btn-danger">Agregar</button>
                                        
                                    </Link>
                                    </div>
                                
                            </div>

                                
                             
                              
                                <div className="row">&nbsp;</div>
                                <div className="row">
                                    <div className="col-12 text-center">
                                    <AsyncExample selectedValue={this.handleChange} />
                                    </div>
                                </div>
                                <div className="row">&nbsp;</div>
    
                               
                           
                            </div>

                        </div>
                    </div>

      








                    <div className="row">&nbsp;</div>
                    {cabeceraCondicionalCard}
            
                    
                        {    
                                this.state.repeaters.map((each)=>(
                            
                                    <div className="card">
                                        <div className="card-header match">
                                            <div className="row">
                                                <div className="col-9">{each.titular}</div>
                                                
                                            </div>
                                            <div className="row">
                                                <div className="col-12">{each.signal}</div>
                                            
                                            </div>
                                        </div>

                                        
                                            <p>&nbsp;</p>
                                            
                                            <div className="col-12">
                                                <div className="card bg-light">
                                                <div className="card-body">

                                                <div className="row">
                                                    <div className="col-12">{each.localidad}</div>
                                                </div>
                                                
                                                    <div className="row">
                                                        <div className="col-12">{each.provincia}</div>
                                                    </div>
                                                
                                                    <div className="row">
                                                        <div className="col-12">{each.pais}</div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>


                                       {each.nodes.map((node)=>(
                                            <div className="card-body ">

                                                    <div className="row">
                                                        <div className="col-6">
                                                            RECEPCION:
                                                        </div>
                                                        <div className="col-6">
                                                            {node.rx} Mhz
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-6">
                                                        TRANSMISION:
                                                        </div>
                                                        <div className="col-6">
                                                            {node.tx} Mhz
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-6">
                                                        TONO:
                                                        </div>
                                                        <div className="col-6">
                                                            {node.tone} Hz
                                                        </div>
                                                    </div>   
                                            
                                            </div>
                                        ))}
                                    </div>
                                    
                                    
                                ))

                                
                                

                            
                       }

{pieCondicionalCard}           
</div>
                           
             
            </div>
                




            
            
            
            

        );


    }

}