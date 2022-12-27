import React from 'react';
import '../node_modules/bootstrap-css-only/css/bootstrap.css';


export default class updates extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            

        };
    }






    render() {


      

        return (
            <div className="container-fluid table-scroll-vertical bgdiv">
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
      <th scope="col">Fuente</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><img src="static/flags/gif/ar.gif" alt="Argentina flag" /></th>
      <td>Argentina</td>
      <td>07-11-2022</td>
      <td><a href="https://www.enacom.gob.ar/listado-de-radioaficionados_p316">
            Enacom
         </a>
      </td>
    
    </tr>
    <tr>
      <th scope="row"><img src="static/flags/gif/br.gif"  alt="Brasil flag"/></th>
      <td>Brasil</td>
      <td>03-10-2022</td>
      <td><a href="https://www.anatel.gov.br/dadosabertos/paineis_de_dados/outorga_e_licenciamento/estacoes_licenciadas.zip">
            Anatel
         </a>
      </td>
    </tr>
    <tr>
      <th scope="row"><img src="static/flags/gif/cl.gif" alt="Chile flag" /></th>
      <td>Chile</td>
      <td>25-11-2022</td>
      <td><a href="https://www.subtel.gob.cl/inicio-concesionario/servicios-de-telecomunicaciones/servicios-de-radio-aficionados/">
            Subtel
         </a>
      </td>
    </tr>
    <tr>
      <th scope="row"><img src="static/flags/gif/uy.gif" alt="Uruguay flag"/></th>
      <td>Uruguay</td>
      <td>03-11-2022</td>
      <td><a href="https://www.gub.uy/unidad-reguladora-servicios-comunicaciones/datos-y-estadisticas/datos/registro-radioaficionados">
            URSEC
         </a>
      </td>
      
    </tr>
        <tr>
      <th scope="row"><img src="static/flags/gif/pe.gif" alt="Perú flag"/></th>
      <td>Per&uacute;</td>
      <td>11-11-2022</td>
      <td><a href="https://www.gob.pe/institucion/mtc/informes-publicaciones/396528-radioaficionados-con-autorizacion-vigente-direccion-de-servicios-en-telecomunicaciones-dgat">
            DGAT
         </a>
      </td>
      
    </tr>
  </tbody>
</table>

            </div>


        );


    }

}