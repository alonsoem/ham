import React from 'react';

import TopMenu from './topMenu';

export default class updates extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {

        return (
          <div>

<TopMenu />

          <div class="card-header bgdiv text-white">
              <h1>Actualizaciones</h1> 
          </div>
            <div className="container-fluid table-scroll-vertical main">

<p>&nbsp;</p>
<div class="row">
    <div class="col-sm-12">
      <div class="card">
      <div class="card-body ">
        <h6 class="card-title">
          <p>Esta aplicaci&oacute;n muestra informaci&oacute;n sobre licencias de radioaficionados de distintos paises. En cada pa&iacute;s un ente oficial se encarga de llevar el registro y nosotros usamos esos registros para mostrarlos en este servicio.<br/>
        Aqu&iacute; mostramos cuando fue la &uacute;ltima vez que se publicaron los datos que aqui les ofrecemos.
        </p>
        </h6>
        
<div class="fs-6">
        <table class="table table-striped responsive ">
  <thead>
    <tr>
      <th  scope="col">Pa&iacute;s</th>
      <th  scope="col">Ult. Actualizaci&oacute;n</th>
      <th  scope="col">Fuente</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><img src="static/flags/gif/ar.gif" alt="Argentina flag" />Argentina</th>
      <td>10-07-2024</td>
      <td><a href="https://www.enacom.gob.ar/listado-de-radioaficionados_p316">
            Enacom
         </a>
      </td>
    
    </tr>
    <tr>
      <th scope="row"><img src="static/flags/gif/br.gif"  alt="Brasil flag"/>Brasil</th>
      <td>07-07-2023</td>
      <td><a href="https://dados.gov.br/dados/conjuntos-dados/estacoes-licenciadas-no-servico-de-radioamador">
            Anatel
         </a>
      </td>
    </tr>
    <tr>
      <th scope="row"><img src="static/flags/gif/cl.gif" alt="Chile flag" />Chile</th>
      <td>25-10-2023</td>
      <td><a href="https://www.subtel.gob.cl/inicio-concesionario/servicios-de-telecomunicaciones/servicios-de-radio-aficionados/">
            Subtel
         </a>
      </td>
    </tr>
    <tr>
      <th scope="row"><img src="static/flags/gif/uy.gif" alt="Uruguay flag"/>Uruguay</th>
      <td>25-07-2023</td>
      <td><a href="https://www.gub.uy/unidad-reguladora-servicios-comunicaciones/datos-y-estadisticas/datos/registro-radioaficionados">
            URSEC
         </a>
      </td>
      
    </tr>
        <tr>
      <th scope="row"><img src="static/flags/gif/pe.gif" alt="Perú flag"/>Perú</th>
      <td>11-11-2022</td>
      <td><a href="https://www.gob.pe/institucion/mtc/informes-publicaciones/396528-radioaficionados-con-autorizacion-vigente-direccion-de-servicios-en-telecomunicaciones-dgat">
            DGAT
         </a>
      </td>
      
    </tr>
    <tr>
      <th scope="row"><img src="static/flags/gif/ec.gif" alt="Ecuador flag"/>Ecuador</th>
      <td>18-01-2023</td>
      <td><a href="https://www.arcotel.gob.ec/radioaficionados/">
            ARCOTEL
         </a>
      </td>
      
    </tr>

    <tr>
      <th scope="row"><img src="static/flags/gif/ca.gif" alt="Canada flag"/>Canadá</th>
      <td>18-07-2023</td>
      <td><a href="https://ised-isde.canada.ca/site/amateur-radio-operator-certificate-services/en/downloads">
            CANADA GOV
         </a>
      </td>
      
    </tr>
    <tr>
      <th scope="row"><img src="static/flags/gif/us.gif" alt="US flag"/>Estados Unidos</th>
      <td>02-08-2023</td>
      <td><a href="https://wireless2.fcc.gov/UlsApp/UlsSearch/searchAdvanced.jsp">
            FCC
         </a>
      </td>
      
    </tr>
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

}
