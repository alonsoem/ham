import React from 'react';
import {getResults} from "./api/api";
import TopMenu  from "./topMenu";
import '../node_modules/bootstrap-css-only/css/bootstrap.css';


import AsyncExample from './asyncSignals.js';



export default class results extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result:null,          
            updating:true,
            paisId:null,
            value:"",
        };
        
    }

  

    update = (newValue) => {
        getResults({"indicativo":newValue})
            .then((data) => {   
                    this.setState({result:data.indicativos[0]});
                    console.log (data.indicativos[0]);
                    
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
            this.update(this.convertUnicode(value[0].indicativo));
        }else{
            this.setState({result:{}});
        }
      }

      handleUpdate= (value) => {
        this.setState({updating:value});
        console.log(value);
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
        const showResult=()=>{

            if (this.state.result && !this.state.updating){
                return (
            <div className="card">
        
            <div className={"card-header match"}>
                <div className="row">
                    <div className="col-9">{this.state.result.indicativo}</div>
                    <div className="col-3 text-right"><span className=" text-white badge rounded-pill bg-dark">{this.state.result.categoria}</span></div>
                </div>
                <div className="row">
                    <div className="col-8 text-left">{this.state.result.nombre}</div>
                    <div className="col-4  text-right">
                        <a href={"https://www.qrz.com/db/"+this.state.result.indicativo} ><img src="/static/qrz_logo.png" alt="Link en QRZ" title="Link en QRZ.com" /></a>
                        
                        <a href={"https://logdeargentina.com.ar/php/otro_b_resp.php?qrz="+this.state.result.indicativo} ><img src="/v2/static/lda_30t.png" alt="Link en Log de Argentina" title="Link en QRZ" /></a>
                    </div>
                    
                </div>
            </div>
            <div className="card-body ">
                {this.state.result.ciudad}<br/>
                {this.state.result.provincia}<br/>
                <img src={countryFlag(this.state.result.pais)} alt={this.state.result.pais + ' flag'} />&nbsp;{this.state.result.pais}
            </div>

        </div>);

        }
        
        }
       

        return (
            <div>

                  <div className="card-header bgdiv text-white">
                <h1>Buscar indicativo</h1> 
            </div>
            
            <div className="container-fluid table-scroll-vertical">
            
          

            <p>&nbsp;</p>

            <div style={{'width': '100%', 'height': '100%', 'background-color': 'rgba(0,0,255,0.1)'}}>
                        <div className="card" style={{'background-color':'#439139ef'}}>
                            <div className="card-body " >
                                <div className="row">
                                    <div className="col-12">
                                        Indique una localidad en Argentina <img src="/static/flags/gif/ar.gif" alt="" />, Chile <img src="/static/flags/gif/cl.gif" alt="" /> o Uruguay <img src="/static/flags/gif/uy.gif" alt="" /> para ver las repetidoras disponibles.
                                    </div>
                                </div>

                                
                             
                              
                                <div className="row">&nbsp;</div>
                                <div className="row">
                                    <div className="col-12 text-center">
                                    <AsyncExample selectedValue={this.handleChange} updating={this.handleUpdate} />
                                    </div>
                                </div>
                                <div className="row">&nbsp;</div>
    
                               
                           
                            </div>

                        </div>
                    </div>

      








                    <div className="row">&nbsp;</div>
                    
            
                    
                        { showResult()}
        
</div>
                           
             
            </div>
                




            
            
            
            

        );


    }

}