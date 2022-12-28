import React from 'react';
import '../node_modules/bootstrap-css-only/css/bootstrap.css';


export default class tools extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
        
        };
    }

    render() {


       
        return (
            <div className="container-fluid table-scroll-vertical ">
              

                     
<div class="jumbotron jumbotron-fluid bgdiv" >
  <div class="container-fluid" >
  </div>    
      <div class="container" >
    <h1 class="display-4">Herramientas</h1>
    <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
    </div>
  
</div>
        
     
     
<div class="row">
    <div class="col-sm-4">
      <div class="card">
      <div class="card-body">
        <h5 class="card-title">Codigo Fonetico</h5>
        <p class="card-text">...</p>
        <a href="http://ham.qrits.com.ar/app-pages/viewer.php?img=codigo-ICAO.png" class="btn btn-primary">Ir</a>
      </div>
     </div>   
    </div>
    
    <div class="col-sm-4">
     <div class="card">
      <div class="card-body">
        <h5 class="card-title">Sufijos Argentina</h5>
        <p class="card-text">...</p>
        <a href="http://ham.qrits.com.ar/app-pages/viewer.php?img=sufijos-argentina.webp" class="btn btn-primary">Ir</a>
      </div>
     </div>
    </div>      
  
    <div class="col-sm-4">
     <div class="card">
      <div class="card-body">
        <h5 class="card-title">Sufijos Uruguay</h5>
        <p class="card-text">...</p>
        <a href="http://ham.qrits.com.ar/app-pages/viewer.php?img=sufijos-uruguay.gif" class="btn btn-primary">Ir</a>
      </div>
    </div>
  </div>      
  
</div>

       <div class="row">
  <div class="col-sm-4">
      <div class="card">
      <div class="card-body">
        <h5 class="card-title">Prefijos Chile</h5>
        <p class="card-text">...</p>
        <a href="http://ham.qrits.com.ar/app-pages/viewer.php?img=prefijos-chile.jpg" class="btn btn-primary">Ir</a>
      </div>
    </div>   
    </div>
    <div class="col-sm-4">
     <div class="card">
      <div class="card-body">
        <h5 class="card-title">Prefijos Brasil</h5>
        <p class="card-text">...</p>
        <a href="http://ham.qrits.com.ar/app-pages/viewer.php?img=prefijos-brasil.jpg" class="btn btn-primary">Ir</a>
      </div>
    </div>
  
  </div>      
  
    <div class="col-sm-4">
     <div class="card">
      <div class="card-body">
        <h5 class="card-title">Codigo Morse</h5>
        <p class="card-text">...</p>
        <a href="http://ham.qrits.com.ar/app-pages/viewer.php?img=morse.jpg" class="btn btn-primary">Ir</a>
      </div>
    </div>
  
  </div>      
  </div>
  
       <div class="row">
  <div class="col-sm-4">
      <div class="card">
      <div class="card-body">
        <h5 class="card-title">Codigo RST</h5>
        <p class="card-text">...</p>
        <a href="http://ham.qrits.com.ar/app-pages/viewer.php?img=rst.jpg" class="btn btn-primary">Ir</a>
      </div>
    </div>   
    </div>
    <div class="col-sm-4">
     <div class="card">
      <div class="card-body">
        <h5 class="card-title">codigo Q</h5>
        <p class="card-text">...</p>
        <a href="http://ham.qrits.com.ar/app-pages/viewer.php?img=codigoQ.jpg" class="btn btn-primary">Ir</a>
      </div>
    </div>
  
  </div>      
  
    <div class="col-sm-4">
     <div class="card">
      <div class="card-body">
        <h5 class="card-title">Bandas y frecuencias</h5>
        <p class="card-text">...</p>
        <a href="http://ham.qrits.com.ar/app-pages/viewer.php?img=bandas.png" class="btn btn-primary">Ir</a>
      </div>
    </div>
  
  </div>      
  </div>
  
         <div class="row">
  <div class="col-sm-4">
      <div class="card">
      <div class="card-body">
        <h5 class="card-title">Hora UTC</h5>
        <p class="card-text">...</p>
        <a href="/utc" class="btn btn-primary">Ir</a>
      </div>
    </div>   
    </div>
    <div class="col-sm-4">
     <div class="card">
      <div class="card-body">
        <h5 class="card-title">Llamado CQ</h5>
        <p class="card-text">...</p>
        <a href="/cqcall" class="btn btn-primary">Ir</a>
      </div>
    </div>
  
  </div>      
  
    <div class="col-sm-4">
     <div class="card">
      <div class="card-body">
        <h5 class="card-title">Condiciones Solares</h5>
        <p class="card-text">...</p>
        <a href="/solarConditions" class="btn btn-primary">Ir</a>
      </div>
    </div>
  
  </div>      
  </div>
            </div>


        );


    }

}