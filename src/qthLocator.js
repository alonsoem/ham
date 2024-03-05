import React, { useState } from 'react';
import './index.css';
import TopMenu from './topMenu';
import { useEffect,useRef} from "react";
import { Marker,Popup,MapContainer,TileLayer,Polygon} from 'react-leaflet';
import { useMapEvent} from 'react-leaflet/hooks';




export default function QthLocator (props) {
    

    const [position,setPosition] = useState([-34.735875875962634, -58.24512750615829]);
    const [maidenPosition,setMaidenPosition] = useState("");
    
    const mapRef = useRef(null);
    const markerRef = useRef(null);
      
    const str_chr_up = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";                          // Constants.
    const str_chr_lo = "abcdefghijklmnopqrstuvwxyz";
    const str_num = "0123456789";
      
     
const handleChangeMaiden = (event) =>{
  setMaidenPosition(event.target.value);
  
}
 


      function LocationMarker() {
        const map = useMapEvent('click', (e) => {
          setPosition([  e.latlng.lat,  e.latlng.lng]);
          map.setView(e.latlng);
          
          openPopup();
        })
      }


        useEffect(() => {
          console.log(position);
          openPopup();
        // eslint-disable-next-line
      }, [position]);
        

       
      
     
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


    const gotoMaiden= ()=>{
      setPosition(getPositionFromMaiden());
    
    }

      const getPositionFromMaiden= ()=>{
        var lat;
        var lon;
        const qth=maidenPosition;
        console.log(qth);

        lat = str_chr_up.indexOf(qth.charAt(1)) * 10;               // 2nd digit: 10deg latitude slot.
        lon = str_chr_up.indexOf(qth.charAt(0)) * 20;               // 1st digit: 20deg longitude slot.
        lat += str_num.indexOf(qth.charAt(3)) * 1;                  // 4th digit: 1deg latitude slot.
        lon += str_num.indexOf(qth.charAt(2)) * 2;                  // 3rd digit: 2deg longitude slot.
        console.log(lat);
        console.log(lon);
        // eslint-disable-next-line
        if (qth.length == 6)
        {
            lat += str_chr_lo.indexOf(qth.charAt(5)) * 2.5 / 60;    // 6th digit: 2.5min latitude slot.
            lon += str_chr_lo.indexOf(qth.charAt(4)) * 5 / 60;      // 5th digit: 5min longitude slot.
        }
    // eslint-disable-next-line
        if (qth.length == 4)                                        // Get coordinates of the center of the square.
        {
            lat += 0.5 * 1;
            lon += 0.5 * 2;
        }
        else
        {
            lat += 0.5 * 2.5 / 60;
            lon += 0.5 * 5 / 60;
        }

        lat -= 90;                                                  // Locator lat/lon origin shift.
        lon -= 180;
        console.log(lat);
        console.log(lon);

        return ([lat,lon]);
        
       
      
      }


       
      function maidenHead  () {
        var lat =position[0];
        var lon =position[1];
        var qth;

       


        lat+= 90;
                                                          // Locator lat/lon shift.
        lon += 180;

        qth = str_chr_up.charAt(Math.floor(lon / 20));              // 1st digit: 20deg longitude slot.
        qth += str_chr_up.charAt(Math.floor(lat / 10));             // 2nd digit: 10deg latitude slot.
        qth += str_num.charAt(Math.floor((lon % 20) / 2));          // 3rd digit: 2deg longitude slot.
        qth += str_num.charAt(Math.floor((lat % 10) / 1));          // 4th digit: 1deg latitude slot.
        qth += str_chr_lo.charAt(Math.floor((lon % 2) * (60 / 5))); // 5th digit: 5min longitude slot.
        qth += str_chr_lo.charAt(Math.floor((lat % 1) * (60 / 2.5)));  // 6th digit: 2.5min latitude slot.
        return qth;
       }

       

       function MaidenPointer  (){
        return position === null ? null : (
         <Marker position={position} ref={markerRef} >
           <Popup>
               <div class="card">
                 <div className={"card-header"}>QTH locator</div>
                 <div class="card-body">
                   <p>{maidenHead()}</p>
                   <p>{"Latitud:  " +position[0]}</p>
                   <p>{"Longitud: " +position[1]}</p>
 
                 </div>
                 
               </div>
               
               
           </Popup>
         </Marker>
       )
     }

    const fillBlueOptions = { fillColor: 'blue' }

    const polygon = [
      [-34.77100056063446, -58.24264590502138],
      [-34.74588160035689, -58.18196406936771],
      [ -34.7127006147566, -58.2300848634208],
      [ -34.72905214813102, -58.29981846865683]
    ]

        return (
            
          <div >

          <TopMenu />
          
                      <div class="card-header bgdiv text-white">
                        <h1>Ubicación de QTH</h1> 
                      </div>

                      <div className="container-fluid  m-0 p-0 align-center">
                        <div style={{ position: 'fixed',width:'100%',top:'20%',zIndex:10000, margin:'auto'}} >
                          <div class="input-group  w-50 ml-auto mr-auto">
                            
                            
                            <input type="text" value={maidenPosition}  class="form-control  " onChange={handleChangeMaiden}  /> 
                              <div class="input-group-append">
                                <button class="btn btn-outline-secondary bg-success" onClick={gotoMaiden} type="button">UBICAR</button>
                              </div>
                          </div>
                        </div>
                        

 
                        <MapContainer ref={mapRef} id="map" center={position} zoom={13}  zoomControl={false} >
                          <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                          />
                          
                          
                          <LocationMarker />
                          <MaidenPointer />
                          <Polygon pathOptions={fillBlueOptions} positions={polygon} />
                          
        
                        </MapContainer>

                        
                      </div>
          </div>

                       
        );
}