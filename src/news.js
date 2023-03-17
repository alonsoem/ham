import React from 'react';

import '../node_modules/bootstrap-css-only/css/bootstrap.css';


export default class news extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            

        };
    }






    render() {


      

        return (
            <div >

<nav class="navbar navbar-light bg-light">
  <div class="container">
    Somos Radioaficionados
  </div>
</nav>

              <div class="card-header bgdiv text-white">
                <h1>¡Novedades!</h1> 
                </div>
            <p>&nbsp;</p>
            <div className="container-fluid table-scroll-vertical">
            <div class="row">
    <div class="col-sm-12">
      <div class="card">
             
      <div class="card-body">
                         

      <h2>Actualizamos la pantalla de presentación</h2>

<ul>
    <li>Ahora podras navegar entre herramientas, buscadores de repetidoras y de señales distintivas desde la parte superior de la pantalla.</li>
    <li>El acceso al bloc de notas estara siempre visible para que lo puedas acceder aun cuando estes en medio de una consulta.</li>
    <li>Ahora podras volver de las pantallas con el boton de regreso de Android y/o tambien navegando las opciones.</li>
    <li>Ahora toda la aplicacion luce igual.</li>
    <li> Estamos marcando un estilo que no sea confuso para su uso y que nos permita luego mejorar la aplicacion con nuevos contenidos y funcione mas rápido.</li>
</ul>


</div></div></div></div>

            </div>
            </div>
        );


    }

}