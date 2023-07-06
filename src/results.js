import React from 'react';
import {getResults,getPrefix,getPrefixInverse} from "./api/api";
import TopMenu from "./topMenu";
import '../node_modules/bootstrap-css-only/css/bootstrap.css';



export default class results extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prefix:"",
            results:{},
            indicativos:[],
            signal:"",
            prefixInfo:[],
            prefixLoading:true,
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
            this.setState({prefixInfo:data.prefix});
            this.setState({prefixLoading:false});
            })
        .catch(() => this.setState({error: 'Algo anduvo mal! Volvé a intentar'}));

    }

    prefixInfo = (countryId) => {
        
        getPrefix({"countryId":countryId})
            .then((data) => {
                this.setState({pais:data.country});
                this.setState({paisId:data.countryId});
                this.setState({prefixInfo:data.prefix});
                this.setState({prefixLoading:false});
                console.log("s1: "+data.prefix);

                }
                )
            .catch((response) => {
                this.setState({error: 'Erorr:'+response});
                console.log("E:"+response);
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
        const countryCircleFlag = (country) =>{
            switch(country) {
                case 'Argentina':
                  return window.location.origin +"/static/circle-flags/ar.png";
                case 'Brasil':
                    return window.location.origin +"/static/circle-flags/br.png";
                case 'Perú':
                    return window.location.origin +"/static/circle-flags/pe.png";
                case 'Uruguay':
                    return window.location.origin +"/static/circle-flags/uy.png";        
                case 'Chile':
                    return window.location.origin +"/static/circle-flags/cl.png";
                case 'Ecuador':
                    return window.location.origin +"/static/circle-flags/ec.png";                    
                case 'Estados Unidos':
                        return window.location.origin +"/static/circle-flags/us.png";                      
                default:
                    return "";
              }
        }

        const printPrefixInfo =()=>{
            if (this.state.prefixLoading) {
                
               
                return <p className="card-text placeholder-glow">
      <span className="placeholder col-7"></span>
      <span className="placeholder col-4"></span>
      <span className="placeholder col-4"></span>
      <span className="placeholder col-6"></span>
      <span className="placeholder col-8"></span>
    </p>
                
            }else{
                if (this.state.prefixInfo ===undefined){
                    return <div>Aún no tenemos informacion sobre este indicativo.</div>
                }else{
                    return <div className="row">
                                <div className="col-4 col-xs-5">
                                    <img src={countryCircleFlag(this.state.pais)}  alt="Flag" />
                                </div>
                                <div className="col-8 col-xs-7">
                                    <p>Es un indicativo de <b>{this.state.pais}</b>.  <br/>
                                    Los indicativos de este país comienzan con: <b>{this.state.prefixInfo.toString()}</b></p>
                                    <p>Para mas informacion consulta este <a href='https://www.itu.int/pub/T-SP-OB.1154-2018/es' >sitio</a> de la UIT.</p>
                                </div>
                            </div>
                }
            
        
            }
            
        }
  

        return (
            <div>

<TopMenu />
            <div className="card-header bgdiv text-white">
                <h1>Resultados</h1> 
            </div>
            <div className="container-fluid table-scroll-vertical">
            
            

            <p>&nbsp;</p>

            <div className="card">
                <div className="card-header">
                     <h4>Buscaste "{this.state.signal}" </h4> 
                </div>
          
                <div className="card-body">
                        <div className="card">
                        <div className="card-body">
                                {printPrefixInfo()}
                                </div>
                           
                        </div>

                    
                        {this.state.indicativos.length===0 ? 
                        
                            <div className="card">
                                <div className="card-header">
                                    No encontramos ningun indicativo relacionado con la busqueda.
                                </div>
                                
                            </div> 
                            
                            : null
                            
                        }
                        {
                            
                        
                        this.state.indicativos.map((each)=>(
                            
                            <div className="card">
                                
                                <div className={"card-header "+(each.indicativo.toUpperCase()===this.state.signal.toUpperCase()? "match":"")}>
                                    <div className="row">
                                        <div className="col-9">{each.indicativo}</div>
                                        <div className="col-3 text-right"><span className=" text-white badge rounded-pill bg-dark">{each.categoria}</span></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-8 text-left">{each.nombre}</div>
                                        <div className="col-4  text-right">
                                            <a href={"https://www.qrz.com/db/"+each.indicativo} ><img src="/static/qrz_logo.png" alt="Link en QRZ" title="Link en QRZ.com" /></a>
                                            
                                            <a href={"https://logdeargentina.com.ar/php/otro_b_resp.php?qrz="+each.indicativo} ><img src="/v2/static/lda_30t.png" alt="Link en Log de Argentina" title="Link en QRZ" /></a>
                                        </div>
                                        
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
            </div>


        );


    }

}
