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
                                
       
             <h2>21-07-2023: Ahora podés cargar Qso!</h2>
       
       <ul>
           <li>Ahora podrás enviar contactos a Log de Argentina desde la aplicación.</li>
           <li>Podes enviar comentarios para que tomemos en cuenta lo que necesites de la aplicación.</li>
           <li>Podes agregar nuevos radioaficionados a nuestra base de datos!.</li>
           <li>Se incluyeron nuevos paises a la base de datos!</li>
           <li>Se ampliaron los prefijos de paises de América.</li>
           
           
       </ul>
       
       
       </div></div>
      <div class="card mt-3">
             
      <div class="card-body">
                         

      <h2>Mejoramos la presentación en pantalla</h2>

<ul>
    <li>Ahora podrás navegar entre herramientas, buscadores de repetidoras y de señales distintivas desde la parte superior de la pantalla.</li>
    <li>El acceso al bloc de notas estará siempre visible para que lo puedas usar aun cuando estés en medio de una consulta.</li>
    <li>Ahora podés volver de las pantallas con el botón de regreso de Android y/o también navegando las opciones del menú superior</li>
    <li>Ahora toda la aplicación luce igual para que te sea más comodo usarla.</li>
    <li>¡Más cambios vienen en camino! ¡Esperamos que disfrutes la app!</li>
</ul>


</div></div></div></div>

            </div>
            </div>
        );


    }

}