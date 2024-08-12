import React from 'react';

import '../node_modules/bootstrap-css-only/css/bootstrap.css';
import TopMenu from './topMenu';


export default class solarConditions extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            

        };
    }






    render() {


      

        return (
            <div >



              <div class="card-header bgdiv text-white">
                <h1>Ejemplo de un Comunicado</h1> 
                </div>
            <p>&nbsp;</p>
            <div className="container-fluid table-scroll-vertical">
            <div class="row">
    <div class="col-sm-12">
      <div class="card">
             
      <div class="card-body">
                         

      <h2>Preparativos</h2>

<p>
    Conecte la antena de la banda que quiera utilizar al conector del equipo y sintonice la frecuencia 
    dentro de la porci&oacute;n de la banda que se quiera utilizar y para la cual se tenga habilitaci&oacute;n.
</p>


<p>
Hacer una escucha de unos segundos en dicha frecuencia comprobando que se encuentra libre de estaciones transmitiendo.
Si no se escucha a nadie transmitiendo se interroga si la frecuencia se encuentra ocupada, repitiendo tres veces la siguiente frase dejando un breve intervalo entre cada repetici&oacute;n, por ejemplo:<br/><br/>
<b>INTERROGO SI LA FRECUENCIA SE ENCUENTRA OCUPADA.</b><br/>
<br/>
Tambi&eacute;n se puede incluir la se&ntilde;al distintiva para la interrogaci&oacute;n: Por ejemplo:<br/><br/>

<b>LU4DP, MI NOMBRE ES PEDRO INTERROGANDO SI LA FRECUENCIA ESTA OCUPADA</b>

</p>

<h2>El comunicado</h2>

<p>
En caso de no obtener respuesta, tenemos una fecuencia libre y se proceder&aacute; a hacer el llamado, repitiendo 3 veces sin pausa, la siguiente frase<br/><br/>
Por ejemplo para un llamado en 40 metros:<br/><br/>
<b>CQ CQ CQ 40 METROS, LIMA UNIFORM CUATRO DELTA PAPA, MI NOMBRE ES PEDRO, LLAMADO GENERAL EN LA BANDA DE 40 METROS. <br/><br/>

CQ CQ CQ 40 METROS, LIMA UNIFORM CUATRO DELTA PAPA, MI NOMBRE ES PEDRO, LLAMADO GENERAL EN LA BANDA DE 40 METROS. <br/><br/>

CQ CQ CQ 40 METROS, LIMA UNIFORM CUATRO DELTA PAPA, MI NOMBRE ES PEDRO, LLAMADO GENERAL EN LA BANDA DE 40 METROS, AGRADEZCO RESPUESTA Y QUEDO ATENTO.</b><br/><br/>

Si luego de repetir varias veces no se obtiene respuesta, se puede reintentar o simplemente cambiar de frecuencia.
</p>

<p>
En caso de respondernos, escucharemos algo como: <br/><br/><b>LU4DP PEDRO.., AQUI LU... [SE&Ntilde;AL DISTINTIVA DE QUIEN RESPONDE], MI NOMBRE ES...</b><br/><br/>

Al responder seguiremos el mismo patr&oacute;n, primero responderemos con la distintiva de la otra persona ( la que nos llama, o la que nos paso el cambio )  y luego nuestra licencia.
<br/><br/>
<b>[DISTINTIVA] DE LU4DP, AQUI PEDRO GRACIAS POR RESPONDER LA LLAMADA...</b> (contin&uacute;a la conversaci&oacute;n)

</p>

</div></div></div></div>

            </div>
            </div>
        );


    }

}