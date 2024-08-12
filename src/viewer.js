import React from 'react';
import '../node_modules/bootstrap-css-only/css/bootstrap.css';
import './tools.css';


export default class tools extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
          title:"",
          file:"",        
        };
    }


    componentDidMount() {
      this.setState({title:this.props.match.params.title,file:this.props.match.params.file});
      
    }

    render() {


       
        return (
          <div>



            <div class="card-header bgdiv text-white">
                <h1>{this.state.title}</h1> 
            </div>
            <div className="container-fluid table-scroll-vertical ">
             
            
              
              


            <p>&nbsp;</p>
                     

            <div className="container">

            <div className="caja">
            <div className="box">
              <img src={"https://ham.qrits.com.ar/static/content/"+this.state.file} alt="Cargando imagen..." title={this.state.title} />

</div>
</div>
              
            </div>





            </div>




<p>&nbsp;</p>
<p>&nbsp;</p>
  </div>

  

        );


    }

}