import React from 'react';
import {getResults,getPrefix,getPrefixInverse} from "./api/api";
import TopMenu from "./topMenu";
import '../node_modules/bootstrap-css-only/css/bootstrap.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


export default class results extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prefix:"",
            results:{},
            indicativos:undefined,
            signal:"",
            prefixInfo:[],
            prefixLoading:true,
            pais:"",
            paisId:null,
            paisIso:"",
        };
    }

    

    update = (signal) => {
        getResults({"indicativo":signal})
            .then((data) => {
                
                console.log(data);
                this.setState({results:data});
                     if(data.indicativos.length>0){
                        console.log(data.indicativos[0].paisId);
                        this.setState({indicativos:data.indicativos});
                        this.setState({pais:data.indicativos[0].pais});
                        this.setState({paisId:data.indicativos[0].paisId});
                        this.setState({paisIso:data.indicativos[0].paisIso});
                        this.prefixInfo (data.indicativos[0].paisId);
                     }else{
                        this.setState({indicativos:data.indicativos});
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
            this.setState({paisIso:data.iso});
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
        
    }





    render() {

        const countryFlagIso = (countryIsoCode) =>{
            const baseUrl ="/static/flags/gif/";
            console.log(window.location.origin + baseUrl + countryIsoCode + ".gif");
            return window.location.origin + baseUrl + countryIsoCode +".gif";
        }

        const countryIsoCircleFlag = (countryIsoCode) =>{
            console.log ("-"+countryIsoCode+"-");
            const baseUrl ="/static/circle-flags/";
            console.log(window.location.origin + baseUrl + countryIsoCode + ".png");
            return window.location.origin + baseUrl + countryIsoCode +".png";
                
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
                                    <img src={countryIsoCircleFlag(this.state.paisIso)}  alt="Flag" />
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
        const CallSignResults =(props)=>{
            console.log(props.list);
            if (props.list===undefined){
                return (
                    <div className="card">
                            <div className="card-header">
                                <p className="card-text placeholder-glow">
                                    <span className="placeholder col-12"></span>
                                </p>
                            </div>
                    </div>
                    
                )
            } else{
                if (props.list.length===0){
                    return (
                        <div className="card">
                            <div className="card-header">
                                <p>No encontramos ningun indicativo relacionado con la busqueda.</p>

                                <p>Podés hacer click y 
                                        <Link className="ms-1 me-1" to="/newMember">
                                            <button type="button" className="btn btn-success ">Agregar</button>
                                        </Link>
                                    un nuevo radioaficionado.
                                </p>

                            </div>
                        </div>               
                    )
                }else{

                    return (
                        props.list.map((each)=>(
                            
                    <div className="card">
                        
                        <div className={"card-header "+(each.indicativo.toUpperCase()===this.state.signal.toUpperCase()? "match":"")}>
                            <div className="row">
                                <div className="col-9">{each.indicativo}<FontAwesomeIcon icon={faCircleCheck} className="ml-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Validado oficialmente"/></div>
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
                            <img src={countryFlagIso(each.paisIso)} alt={each.pais + ' flag'} />&nbsp;{each.pais}
                        </div>

                    </div>
                           
                    ))
                    )
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

                        <CallSignResults list={this.state.indicativos} />
                       
                        {
                            
                        
                       
                       }
                </div>
            </div>
                




            

            </div>
            </div>


        );


    }

}
