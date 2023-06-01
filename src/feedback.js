import React from 'react';
import '../node_modules/bootstrap-css-only/css/bootstrap.css';
import { getFeedback,postFeedback } from './api/api';
import TopMenu from './topMenu';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





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
        event.preventDefault();
        if (this.state.comment.length>5){
            this.submit();

            
        }else{
            this.notifyError("El mensaje no puede ser tan corto!");
        }
        
    };

    notifyError = (message) => {
        toast.error(message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: 'colored',
        });
      }

      notify = (message) => {
        toast.success(message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: 'colored',
        });
      }

    submit = () => {
        postFeedback({comments:this.state.comment})
            .then(()=>
                {this.notify("Gracias! Tu comentario fue enviado.");}
                )
            .catch(()=>
                {this.notifyError("Ocurrió un error al actualizar. Intentalo nuevamente.");}
            );    
    }

    componentDidMount() {
        this.update();
        console.log (this.state.feedbacks);
    }
       

    update = () => {
        getFeedback({})
            .then((data) => {
                    //revisar como controlar la respuesta si no me da 
                    if (data.feedbacks){
                        this.setState({feedbacks:data.feedbacks});
                    }
                })
            .catch(() => this.setState({error: 'Algo anduvo mal! Volvé a intentar'}));
    }


    render() {

        const showStatus= (status)=>{
            switch(status) {
                case 1:
                  return "bg-light";
                case 2:
                    return "bg-success";
                case 3:
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
                        <div className="card greenLight" >
                            <div class="card-body " >
                                <div className="row">
                                    <div className="col-12">
                                        Danos tus comentarios sobre nuevas funcionalidades, información, o links que quieras que agreguemos. También las quejas son bienvenidas!
                                    </div>
                                </div>

                                
                                <div className="row">&nbsp;</div>

                                <form onSubmit={this.handleSubmit}>
                                <div className="row">
                                    <div className="col-12 text-center">
                                    <div class="form-group">
                                        
                                        <textarea class="form-control" id="comment"  rows="3" onChange={this.handleChange} value={this.state.comment}></textarea>
                                    </div>
                                    </div>
                                </div>
                                <div className="row">&nbsp;</div>
    
                                <div className="row">
                                    <div className="col-12 text-right">
                                            <button type="submit"  class="btn btn-light">Enviar</button>
                                    </div>
                                </div>
                                </form>
                           
                            </div>

                        </div>
                    </div>


                    <div>&nbsp;</div>

                    <div className="card">

                    <div class="card-header text-center" >Últimos comentarios</div>
                    <div class="card-body bg-noColor" >    

                    <div class="container block text-center ">
                    
                    {
                        this.state.feedbacks.length>0
                        ?
                            this.state.feedbacks.map((oneFeedback)=>(
                    
                                <div class={"card quique "+showStatus(oneFeedback.status)} >
                                    <div class="card-body text-left">
                                        <p class="fs-0 ">{oneFeedback.comment}</p>
                                    </div>
                                </div>   
                            ))
                        :
                        <p>NO HAY NADA POR AQUI...</p>
                            
                    }
                        
                        
                    
                    
                    </div>

                    </div>

                    </div>

                    <div>&nbsp;</div>
            </div>
            <ToastContainer />
        </div>

        );


    }

}