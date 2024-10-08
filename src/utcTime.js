import React from "react";
import {getUtcTime} from "./api/api";

export default class utcTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        utcTime:"00:00:00",
        utcDate:"-",
        localTime: "00:00:00",
        localDate: "-",

    };
}

  update = () => {
    getUtcTime({})
        .then((data) => {
          const {hour,day,month,year}=data;
          
          var newDate=new Date(year +"/"+month+"/"+day);
          



          

          
          setInterval(() => {
            const localTime = new Date();
            this.setState({ localTime: localTime.toLocaleTimeString("es-AR"), localDate: localTime.toLocaleDateString("es-AR")})
            const hourDiff =  parseInt(hour) -parseInt(localTime.getHours());
    
            

            let updatedTIme = new Date(localTime.getTime() + hourDiff * 60 * 60 * 1000);
            this.setState({utcTime:updatedTIme.toLocaleTimeString("es-AR"), utcDate:newDate.toLocaleDateString("es-AR")});

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
        <div>


          <div class="card-header bgdiv text-white">
              <h1>Hora UTC</h1> 
          </div>

<p>&nbsp;</p>
        <div className="container-fluid table-scroll-vertical">

<div class="row">
    <div class="col-sm-12">
      <div class="card">
   
          
      <div class="card-body">

              
     <div class="container">
     
<div class="row">
    <div class="col-sm-12">
      <div class="card">
            <div class="card-header">
                Hora UTC
            </div>
          
      <div class="card-body">
        <h5 class="card-title">O GMT, independiente de tu ubicación.</h5>
        <p class="card-text text-center">
          <span class="display-4 text-size-responsive">{this.state.utcTime}</span>
           <br/>

          <span class="display-6">{this.state.utcDate}</span>
          </p>
        
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
                <h5 class="card-title">Hora relativa a tu posición en el mundo.</h5>
                <p class="card-text text-center">
          <span class="display-4 text-size-responsive">{this.state.localTime}</span>
           <br/>

          <span class="display-6">{this.state.localDate}</span>
          </p>
              
            </div>
      </div>   
    </div>
   
</div>

</div>
          
</div></div></div></div>
          </div>
          </div>
      );
    }
  }