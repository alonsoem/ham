import { AsyncTypeahead } from 'react-bootstrap-typeahead'; // ES2015
import 'react-bootstrap-typeahead/css/Typeahead.css';
import React,{useState} from "react";

import {getRepeatersLocals} from "./api/api";



const AsyncExample = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);

  const handleSearch= (newValue) => {
    setIsLoading(true);
      getRepeatersLocals({"local":newValue})
          .then((data) => {   
                  setOptions(data.localidades);
                  setIsLoading(false);
              })
           
          
          //.catch(() => this.setState({error: 'Algo anduvo mal! Volvé a intentar'}));
        
        
  }

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

  // Bypass client-side filtering by returning `true`. Results are already
  // filtered by the search endpoint, so no need to do it again.
  const filterBy = () => true;
function handleChange(selectedOptions) {
  props.selectedValue(selectedOptions);
}

  return (
    <AsyncTypeahead
      filterBy={filterBy}
      id="async-example"
      isLoading={isLoading}
      labelKey="localidad"
      minLength={2}
      onSearch={handleSearch}
      onChange={handleChange}
      options={options}
      placeholder="Indica una localidad..."
      emptyLabel="No se encontraron resultados."
      searchText="Buscando..."
      renderMenuItemChildren={(option: Item) => (
        <>
         <img
            alt={option.pais}
            src={countryFlag(option.pais)}
            style={{
              
              marginRight: '10px',
              
            }}
          />
          <span>{option.localidad}</span>
        </>
      )}
    />
  );
};

export default AsyncExample;