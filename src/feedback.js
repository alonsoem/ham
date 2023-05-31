import React from 'react';
import '../node_modules/bootstrap-css-only/css/bootstrap.css';
import { getFeedback,postFeedback } from './api/api';
import TopMenu from './topMenu';





export default class landing extends  React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comment:"",
            feedbacks:[],

        };
    }
    
    handleChange = (event) => {
        this.setState({comment:event.target.value});
    };


    handleSubmit = (event) => {
        postFeedback({comments:this.state.comment});
    };

    componentDidMount() {
               this.update();
    }
       

    update = () => {
        getFeedback({})
            .then((data) => {
                    this.setState({feedbacks:data.feedbacks});
                })
            .catch(() => this.setState({error: 'Algo anduvo mal! Volvé a intentar'}));
    }


    render() {

        const showStatus= (status)=>{
            switch(status) {
                case "1":
                  return "bg-light";
                case "2":
                    return "bg-success";
                case "3":
                    return "bg-secondary";
                default:
                    return "";
              } 
        }
        return (

            <div >
                 
                <nav class="navbar navbar-light bg-light">
                <div class="container">
                    Somos Radioaficionados
                </div>
                </nav>
<TopMenu />     
            
            <div class="card-header bgdiv text-white">
                <h1>Sugerencias</h1> 
            </div>

            <div className="container-fluid table-scroll-vertical">

<p>&nbsp;</p>
            
                    <div style={{'width': '100%', 'height': '100%', 'background-color': 'rgba(0,0,255,0.1)'}}>
                        <div class="card" style={{'background-color':'#439139ef'}}>
                            <div class="card-body " >
                                <div className="row">
                                    <div className="col-12">
                                        Danos tus comentarios sobre nuevas funcionalidades, informacion, o links que quieras que agreguemos. Tambien las quejas son bienvenidas!
                                    </div>
                                </div>

                                <div className="row">&nbsp;</div>
                             
                               
                                <div className="row">&nbsp;</div>

                                <form onSubmit={this.handleSubmit}>
                                <div className="row">
                                    <div className="col-12 text-center">
                                    <div class="form-group">
                                        <label for="exampleFormControlTextarea1">Tus comentarios</label>
                                        <textarea class="form-control" id="comment"  rows="3" onChange={this.handleChange} value={this.state.comment}></textarea>
                                    </div>
                                    </div>
                                </div>
                                <div className="row">&nbsp;</div>
    
                                <div className="row">
                                    <div className="col-12 text-right">
                                
                                        
                                            <button type="submit" class="btn btn-light">Enviar</button>
                                        
                                    </div>
                                </div>
                                </form>
                           
                            </div>

                        </div>
                    </div>


                    <div>&nbsp;</div>

                    <div className="container block">
                    
                    {this.state.feedbacks.map((oneFeedback)=>(
                    
                        <div class={"card quique "+showStatus(oneFeedback.status)} >
                            <div class="card-body text-left">
                                <p class="fs-0 ">{oneFeedback.comment}</p>
                            </div>
                        </div>   
              

                        
                    ))}
                    
                    </div>
            </div>
            
        </div>

        );


    }

}