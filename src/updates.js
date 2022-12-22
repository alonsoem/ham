import React from 'react';

import {Card,Table} from "react-bootstrap";
import '../node_modules/bootstrap-css-only/css/bootstrap.css';


export default class updates extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            

        };
    }






    render() {


      

        return (
            <div className="container-fluid table-scroll-vertical">
                    <h1>&Uacute;ltimas actualizaciones</h1>
        <p>Esta aplicaci&oacute;n muestra informaci&oacute;n sobre licencias de radioaficionados de distintos paises. En cada pa&iacute;s un ente oficial se encarga de llevar el registro y nosotros usamos esos registros para mostrarlos en este servicio.<br/>
        Aqu&iacute; mostramos cuando fue la &uacute;ltima vez que se publicaron los datos que aqui les ofrecemos.
        </p>
        
        
        <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Pa&iacute;s</th>
      <th scope="col">Ult. Actualizaci&oacute;n</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><img src="static/flags/gif/ar.gif" /></th>
      <td>Argentina</td>
      <td>07-11-2022</td>
    
    </tr>
    <tr>
      <th scope="row"><img src="static/flags/gif/br.gif" /></th>
      <td>Brasil</td>
      <td>03-10-2022</td>
    </tr>
    <tr>
      <th scope="row"><img src="static/flags/gif/cl.gif" /></th>
      <td>Chile</td>
      <td>25-11-2022</td>
    </tr>
    <tr>
      <th scope="row"><img src="static/flags/gif/uy.gif" /></th>
      <td>Uruguay</td>
      <td>03-11-2022</td>
      
    </tr>
        <tr>
      <th scope="row"><img src="static/flags/gif/pe.gif" /></th>
      <td>Per&uacute;</td>
      <td>11-11-2022</td>
      
    </tr>
  </tbody>
</table>

            </div>


        );


    }

}