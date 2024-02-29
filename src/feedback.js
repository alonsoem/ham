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
            this.notifyError("¡El mensaje es muy corto!. Intentalo nuevamente.");
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
        postFeedback({comments:this.state.comment.replace("/(\r\n|\n|\r)/gm", "")})
            .then(response=>
                {
                    console.log("OK");
                    console.log(response.status);
                    this.notify("Gracias! Tu comentario fue enviado.");
                    this.setState({comment:""});
            }
                
                )
            .catch((error)=>
                {
                    console.log("ERROR");
                    console.error({ error });
                    this.notifyError("Ocurrió un error al actualizar. Intentalo nuevamente.");}
            );    
    }

    componentDidMount() {
        this.update();
        
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
                  return "bg-base-card";
                case 2:
                    return "bg-success";
                case 3:
                    return "bg-secondary";
                default:
                    return "";
              } 
        }

        const OneFeedBack=(data)=>{
            
                   return (                 
                                        
            <div class={"card-body text-left card quique m-1 "+showStatus(data.feedback.status)} >
                <p class="fs-0 ">"{data.feedback.comment.charAt(0).toUpperCase() + data.feedback.comment.substring(0,100).slice(1)}"...</p>
            </div>);

            
            
            

        }

        const OneFeedBackWithResponse=(data)=>{
            return (
            <div class="card quique">
                                    
                                        
            <div class={"card-body text-left card quique m-1 "+showStatus(data.feedback.status)} >
                <p class="fs-0 ">"{data.feedback.comment.charAt(0).toUpperCase() + data.feedback.comment.substring(0,100).slice(1)}"...</p>
            </div>

            <div class="card-body">{data.feedback.answer}</div>
             </div>
            );
            

        }

        return (

            <div >
                 
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
                    
                                <div  >
                                    
                                    {oneFeedback.status===1?
                                        <OneFeedBack feedback={oneFeedback} />
                                            
                                    :  <OneFeedBackWithResponse feedback={oneFeedback} />
                                    }
                                    
                                   
                                
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