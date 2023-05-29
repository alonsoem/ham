
import 'react-bootstrap-typeahead/css/Typeahead.css';
import React from "react";




const TopMenu = () => {



  return (
    <ul className="nav bg-light" >
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="/v2/">Inicio</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/v2/tools">Herramientas</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/v2/repeaters">Repetidoras</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/v2/updates" >Actualizaciones</a>
  </li>
</ul>
  );
};

export default TopMenu;