import React from 'react';
import {getResults} from "./api/api";

import '../node_modules/bootstrap-css-only/css/bootstrap.css';



export default class results extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prefix:"",
            results:{},
            indicativos:[],
            signal:"",
        };
    }


    update = (signal) => {
        getResults({"indicativo":signal})
            .then((data) => {
                
                
                this.setState({results:data});
                 this.setState({indicativos:data.indicativos});
                 console.log(data);
                })
             
            
            .catch(() => this.setState({error: 'Algo anduvo mal! Volvé a internar'}));
    }

    componentDidMount() {
        this.setState({signal:this.props.match.params.signal});
        this.update(this.props.match.params.signal);
        
    }





    render() {
        const countryFlag = (country) =>{
            switch(country) {
                case 'Argentina':
                  return window.location.origin +"/static/flags/gif/ar.gif";
                case 'Brasil':
                    return window.location.origin +"/static/flags/gif/br.gif";
                case 'Perú':
                    return window.location.origin +"/static/flags/gif/pe.gif";
                case 'Uruguay':
                    return window.location.origin +"/static/flags/gif/uy.gif";        
                case 'Chile':
                    return window.location.origin +"/static/flags/gif/cl.gif";
                default:
                    return "";
              }
        }

  

        return (
            <div className="container-fluid table-scroll-vertical">
            
            <div className="card-header bgdiv text-white">
                <h1>Resultados</h1> 
            </div>

            <p>&nbsp;</p>

            <div className="card">
                <div className="card-header">
                     <h4>Buscaste "{this.state.signal}" </h4> 
                </div>
          
                <div className="card-body">
                        <div className="card">Parece ser un indicativo de Argentina [flag]. <p>Los indicativos de argentina comienza con: LU, LV, AX...</p> <p>Mas info en UIT <a href="https://www.itu.int/dms_pub/itu-t/opb/sp/T-SP-OB.1154-2018-OAS-PDF-S.pdf" >Link</a></p></div>


                        {this.state.indicativos.map((each)=>(
                            
                            <div className="card">
                                <div className="card-header">
                                    <div className="row">
                                        <div className="col-9">{each.indicativo}</div>
                                        <div className="col-3"><span className=" text-white badge rounded-pill bg-dark">{each.categoria}</span></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">{each.nombre}</div>
                                    
                                    </div>
                                </div>
                                <div className="card-body ">
                                    {each.ciudad}<br/>
                                    {each.provincia}<br/>
                                    <img src={countryFlag(each.pais)} alt={each.pais + ' flag'} />&nbsp;{each.pais}
                                </div>

                            </div>


                        ))
                       }
                </div>
            </div>
                




            

            </div>
            


        );


    }

}