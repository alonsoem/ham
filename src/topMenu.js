
import 'react-bootstrap-typeahead/css/Typeahead.css';
import React from "react";




const TopMenu = () => {
  


  return (
    <ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="/">Inicio</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/tools">Herramientas</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/repeaters">Repetidoras</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/updates" >Actualizaciones-</a>
  </li>
</ul>
  );
};

export default TopMenu;