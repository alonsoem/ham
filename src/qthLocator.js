import React, { useState } from 'react';
import './index.css';
import TopMenu from './topMenu';
import { useEffect,useRef} from "react";
import { Marker,Popup,MapContainer,TileLayer } from 'react-leaflet';
import { useMapEvent} from 'react-leaflet/hooks';



export default function QthLocator (props) {
    

    const [position,setPosition] = useState([-34.735875875962634, -58.24512750615829]);
    const mapRef = useRef(null);
    const markerRef = useRef(null);
      
      
     

 
      function LocationMarker() {
        const map = useMapEvent('click', (e) => {
          setPosition([  e.latlng.lat,  e.latlng.lng]);
          map.setView(e.latlng);
          
          openPopup();
        })


        useEffect(() => {
          console.log(position);
          openPopup();
        // eslint-disable-next-line
      }, [position]);
        

       
      
        return position === null ? null : (
          <Marker position={position} ref={markerRef} >
            <Popup>{position}</Popup>
          </Marker>
        )
      }

      function openPopup(){
          const map = mapRef.current;
          if (!map) {
            return;
          }

          map.flyTo(position);

          const marker = markerRef.current;
          if (marker) {
            marker.openPopup();
          }
      }


       
      


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
                            <input type="text" value={position}  class="form-control mr-4 "  /> 
                          </div>
                        </div>
                        

 
                        <MapContainer ref={mapRef} id="map" center={position} zoom={13}  zoomControl={false} >
                          <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                          />
                          
                          
                          <LocationMarker />
                          
                          
        
                        </MapContainer>

                        
                      </div>
          </div>

                       
        );
}