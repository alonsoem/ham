import React from 'react';
import './index.css';
import TopMenu from './topMenu';
import {Form} from "react-bootstrap";
import { useState,useEffect } from "react";
import { getBands,getBandFrequencies } from './api/api';


export default function BandPlan (props) {
    const [bandName, setBandName] = useState("");
    const [band, setBand] = useState(null);
    const [mode, setMode] = useState(null);

    const [bands, setBands] = useState([]);
    const [freqs, setFreqs] = useState([]);
    //const [scale, setScale] = useState(1);
    
      const handleChangeBand = (event)=>{
        setMode(null);

        setBand(bands[event.target.value]);

        //let index = event.target.selectedIndex;
        //setBandName(event.target.options[index].text);
      }
/*
      const handleFreqScale = (event)=>{
        setScale(event.target.value);
      }
  */   
    
      const updateBands= ()=>{
        
        getBands()
            .then((response) => {
                var bandsById=[];
                response.bands.forEach(each => {
                    bandsById[each.id]=each;    
                })
                

              setBands(bandsById);
              
              
          })
          .catch((response) => console.log(response));
      
      }
      const updateFreqs= ()=>{
        
        getBandFrequencies({bandId:band.id})
            .then((response) => {
              setFreqs(response.ranges);
               
          })
          .catch((response) => console.log(response));
      
      }

     
      useEffect(() => {
          updateBands();
        // eslint-disable-next-line
      }, []);

      useEffect(() => {
        if (band){
            updateFreqs();
        }
        
      // eslint-disable-next-line
    }, [band]);

    useEffect(() => {
        if (band && mode){
            updateFreqs();
        }
        
      // eslint-disable-next-line
    }, [mode,band]);

    const showBandScaleFromId=(id)=>{
        switch (id){
            case 0:
                return "(en Khz)";
                break;
            case 1:
                return "(en Mhz)";
                break;
            case 2:
                return "(en Ghz)";
                break;
        }
    }
    
        return (
            <div>


<TopMenu />     
            
            <div className="card-header bgdiv text-white">
                <h1>Plan de bandas Argentina</h1> 
            </div>

            <div className="container-fluid table-scroll-vertical">

<p>&nbsp;</p>
            
                    <div style={{'width': '100%', 'height': '100%', 'background-color': 'rgba(0,0,255,0.1)'}}>
                        <div className="card "  >
                            <div className="card-body" >
                                <div class="card bandPlan"  >
                                    <div class="card-body">
                                    <div className="row">
                                    <div className="col-12">
                                        Consulte el plan de bandas Argentino publicado por Enacom
                                    </div>
                                    <div className="col-12 text-right">
                                        Para mas información descargá el <a href='https://www.enacom.gob.ar/multimedia/noticias/archivos/201811/archivo_20181105083108_1322.pdf' >plan de bandas</a>  de ENACOM.
                                        
                                    </div>
                                    
                                </div>

                                
                                <div className="row">&nbsp;</div>
                                <div className="row">
                                    <div className="col-6 text-left">
                                    
                                        <Form.Group className="mb-3" controlId="bandValue">
                                            <Form.Label>Banda</Form.Label>
                                            
                                            <select id="band" class="form-select" onChange={handleChangeBand} >
                                                <option selected disabled value="">Elija una banda...</option>
                                                {bands.reduce((acc, cur) =>{
                                                    if (!acc[cur.id]){
                                                        acc[cur.id]={id:cur.id,name:cur.name};
                                                    }
                                                    return acc;
                                                    }, [])                                                                     
                                                .map(band=>{
                                                    return <option value={band.id}>{band.name}</option>
                                                })}
                                            </select>
                                            
                                        </Form.Group>
                                        
                                        </div>
                                        
                                    {/*
                                    <div className="col-6 text-left">
                                    
                                        <Form.Group className="mb-3" controlId="modeValue">
                                            <Form.Label>Modo</Form.Label>
                                            
                                            <select id="mode" class="form-select" onChange={handleChangeMode} >
                                                <option selected disabled value="">Elija un modo...</option>
                                                {modes.map(each=>{
                                                    return <option value={each.id}>{each.mode}</option>
                                                })}
                                            </select>
                                           
                                        </Form.Group>
                                        
                                    </div>
                                        
                                        <div className="col-6 text-left">
                                            <Form.Group className="mb-3" controlId="modeValue">
                                                <Form.Label>Ver Frecuencias en:</Form.Label>
                                                <select id="freqScale" class="form-select" onChange={handleFreqScale} >
                                                    <option selected value="1">Khz</option>
                                                    <option value="0.001">Mhz</option>
                                                    <option value="0.000001">Ghz</option>
                                                </select>
                                            </Form.Group>
                                        </div>
                                        */}
                                    
                                </div>
                                    </div>
                                </div>

                                <div className="row">&nbsp;</div>

                                <div className="row">
                                    <div className="col-12 text-left bg-white p-2">
                                    <table class="table table-striped bandPlanTable " style={{border: '2px solid black'}}>
                                        <thead >

                                            <tr >
                                                <td class="bandPlanTable" colspan="6" >BANDA DE {band.name.toUpperCase()}</td>                                               
                                            </tr>
                                            <tr >
                                                <td class="bandPlanTable" colspan="2" >
                                                        FRECUENCIAS {showBandScaleFromId(band.scale)}
                                                </td>
                                                <td class="bandPlanTable align-middle"  rowspan="2">DESTINOS</td>
                                                <td class="bandPlanTable" colspan="3"  >CATEGORIA</td>
                                            </tr>
                                            <tr >
                                                <td class="bandPlanTable" >DESDE</td>
                                                <td class="bandPlanTable" >HASTA</td>
                                                <td class="bandPlanTable" >N</td>
                                                <td class="bandPlanTable" >G</td>
                                                <td class="bandPlanTable" >S</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                    {
                                        
                                        freqs.map(each=>{

                                            return (
                                                <tr >
                                                    <td style={{border: '2px solid black'}} class="text-center">{(each.from)}</td>
                                                    <td style={{border: '2px solid black'}} class="text-center">{(each.to)}</td>
                                                    <td style={{border: '2px solid black'}} class="text-left">{[...new Set(each.modes)].join(" - ")}</td>
                                                    <td style={{border: '2px solid black'}} class="text-center">{each.novicio===1?"X":""}</td>
                                                    <td style={{border: '2px solid black'}} class="text-center">{each.general===1?"X":""}</td>
                                                    <td style={{border: '2px solid black'}} class="text-center">{each.superior===1?"X":""}</td>

                                                </tr>

                                            )
                                        })

                                        
                                    }
                                    </tbody>
                                    </table>
                                   
                                    </div>
                                </div>
    
                                
                           
                            </div>

                        </div>
                    </div>

                    
                    
            </div>
            
        </div>

        );


    

}