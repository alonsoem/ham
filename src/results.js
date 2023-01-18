import React from 'react';
import {getResults,getPrefix,getPrefixInverse} from "./api/api";

import '../node_modules/bootstrap-css-only/css/bootstrap.css';



export default class results extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prefix:"",
            results:{},
            indicativos:[],
            signal:"",
            prefixInfo:undefined,
            pais:"",
            paisId:null,
        };
    }


    update = (signal) => {
        getResults({"indicativo":signal})
            .then((data) => {
                
                
                this.setState({results:data});
                     if(data.indicativos.length>0){
                        this.setState({indicativos:data.indicativos});
                        this.setState({pais:data.indicativos[0].pais});
                        this.setState({paisId:data.indicativos[0].paisId});
                        this.prefixInfo (data.indicativos[0].paisId);
                     }else{
                        this.inversePrefixInfo (signal);
                     }
                })
             
            
            .catch(() => this.setState({error: 'Algo anduvo mal! Volvé a intentar'}));
    }


    inversePrefixInfo = (signal)=>{
        getPrefixInverse({"signal":signal})
        .then((data) => {
            this.setState({pais:data.country});
            this.setState({paisId:data.countryId});

            let prefix =data.prefix;
            if(data.prefix.length===0) {prefix="Aún No conocemos este prefijo, Probá con otro..."}
            //if(data.prefixl.length>0) {prefix=}
                        
            this.setState({prefixInfo:prefix});
            console.log("S2: "+data.prefix);
            })
        .catch(() => this.setState({error: 'Algo anduvo mal! Volvé a intentar'}));

    }

    prefixInfo = (countryId) => {
        
        getPrefix({"countryId":countryId})
            .then((data) => {
                this.setState({pais:data.country});
                this.setState({paisId:data.countryId});
                this.setState({prefixInfo:data.prefix});
                console.log("s1: "+data.prefix);

                }
                )
            .catch((response) => {
                this.setState({error: 'Erorr:'+response});
                console.log(response);
            }
            );
    }


    componentDidMount() {
        this.setState({signal:this.props.match.params.signal});
        this.update(this.props.match.params.signal);

        //this.prefixInfo(this.state.indicativos[0].paisId);
        //console.log(this.state.indicativos[0]);
        
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
                case 'Ecuador':
                    return window.location.origin +"/static/flags/gif/ec.gif";                    
                default:
                    return "";
              }
        }

        const printPrefixInfo =()=>{

            //undefined = muestra spinner
            //Si tiene valor: [] - No hay informacion sobre el indicativo...
            //Si tiene


             
            console.log(this.state.prefixInfo);
    
            if (this.state.prefixInfo!==undefined) {
                
                return <div >Parece ser un indicativo de {this.state.pais}.  <br/>
                <p>Los indicativos de {this.state.pais} comienzan con: {this.state.prefixInfo.toString()}</p>
                <p>Para mas informacion consulta este documento de la UIT: <a href='https://www.itu.int/dms_pub/itu-t/opb/sp/T-SP-OB.1154-2018-OAS-PDF-S.pdf' >Link</a></p>
                </div>
            
            }else{
                return <p class="spinner-border"></p>
        
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
                        <div className="card">
                                {printPrefixInfo()}
                           
                        </div>


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