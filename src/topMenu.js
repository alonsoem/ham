
import 'react-bootstrap-typeahead/css/Typeahead.css';
import React from "react";




const TopMenu = () => {



  return (
    <ul class="nav bg-light" >
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="/v2/">Inicio</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/v2/tools">Herramientas</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/v2/repeaters">Repetidoras</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/v2/updates" >Actualizaciones</a>
  </li>
</ul>
  );
};

export default TopMenu;