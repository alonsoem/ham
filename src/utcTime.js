import React from "react";
import {getUtcTime} from "./api/api";
import '../node_modules/bootstrap-css-only/css/bootstrap.css';


export default class utcTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        utcTime:"00:00:00",
        localTime: "00:00:00",

    };
}

  update = () => {
    getUtcTime({})
        .then((data) => {
          const {hour}=data;
          
          


          

          
          setInterval(() => {
            const localTime = new Date();
            this.setState({ localTime: localTime.toLocaleTimeString("es-AR")})
            const hourDiff =  parseInt(hour) -parseInt(localTime.getHours());
    
            

            let updatedTIme = new Date(localTime.getTime() + hourDiff * 60 * 60 * 1000);
            this.setState({utcTime:updatedTIme.toLocaleTimeString()});

          }, 1000)

          console.log (data);
            
        })

         
        
        .catch(() => this.setState({error: 'Algo anduvo mal! Volvé a internar'}));
}


componentDidMount() {
    this.update();

}

  render() {
      return (
        <div className="container-fluid table-scroll-vertical">
<div class="jumbotron jumbotron-fluid" >
  <div class="container-fluid" >
  </div>    
      <div class="container" >
    <h1 class="display-4">Hora UTC</h1>
    <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
    </div>
  
</div>
        
     
     
     <div class="container">
     
<div class="row">
    <div class="col-sm-12">
      <div class="card">
            <div class="card-header">
                Hora UTC
            </div>
          
      <div class="card-body">
        <h5 class="card-title">La hora UTC o GMT. Independiente de tu ubicacion</h5>
        <p class="card-text display-2">{this.state.utcTime}</p>
      </div>
     </div>   
    </div>
   
</div>
<p>&nbsp;</p>

<div class="row">
    <div class="col-sm-12">
      <div class="card">    
            <div class="card-header">
                Hora Local
            </div>
            <div class="card-body">
                <h5 class="card-title">Hora Local relativa a tu posicion en el mundo</h5>
                <p class="card-text  display-2">{this.state.localTime}</p>
            </div>
      </div>   
    </div>
   
</div>

</div>

<div class="row">1-1</div>

<footer class="footer">
      <div class="container">
         <button type="button" class="btn btn-secondary btn-lg btn-block">Volver</button>
      </div>
    </footer>

          </div>
      );
    }
  }