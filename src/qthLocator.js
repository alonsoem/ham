import React, { useState } from 'react';
import './index.css';
import TopMenu from './topMenu';
import { useEffect } from "react";
import { Marker,Popup,MapContainer,TileLayer } from 'react-leaflet';





export default function QthLocator (props) {
    const [maidenhead, setMaiden] = useState("");

    const position = [-34.735875875962634, -58.24512750615829];

    const handleOnChangeMaiden = (event) =>{
      setMaiden(event.target.value);
    }

      useEffect(() => {
          //updateBands();
        // eslint-disable-next-line
      }, []);



        return (
            
          <div >

          <TopMenu />
          
                      <div class="card-header bgdiv text-white">
                        <h1>Ubicación de QTH</h1> 
                      </div>

                      <div className="container-fluid  m-0 p-0 ">
                        <div style={{ position: 'fixed',width:'100%',top:'23%',zIndex:10000, margin:'auto'}} >
                          <div class="input-group m-2 w-50 ml-auto mr-auto">
                            <span class="input-group-text" id="inputGroup-sizing-default">UBICACIÓN</span>
                            <input type="text" value={maidenhead} onChange={handleOnChangeMaiden} class="form-control mr-4 "  /> 
                          </div>
                        </div>
                        

 
                        <MapContainer id="map" center={position} zoom={13}  zoomControl={false}>
                          <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                          />
                          <Marker position={position}>
                            <Popup>
                              A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                          </Marker>
                        </MapContainer>

                        
                      </div>
          </div>

                
        
                
                                                
                                            
                                   
        );


    

}