//import "./styles.css";
import {Form, Row} from "react-bootstrap";
import { useState } from "react";
import {newMember} from "./api/api";
import { ToastContainer, toast } from 'react-toastify';
import '../node_modules/bootstrap-css-only/css/bootstrap.css';
import TopMenu from './topMenu';


export default function FormRequest(props) {

  
  const [name, setName] = useState("");
  const [signal, setSignal] = useState("");
  const [errors, setErrors] = useState([]);
  
  
            
          
  

  const handleChangeName= (event) => {
    setName(event.target.value);
  };     

  const handleChangeSignal  = (event) => {
    setSignal(event.target.value);
  };


  
  const handleAPIError= (response)=> {
    let errorToDisplay = "OCURRIO UN ERROR! VERIFIQUE NUEVAMENTE A LA BREVEDAD";

    // eslint-disable-next-line
    if (response.response=="Not Confirmed" ) {
      errorToDisplay = "NO SE PUDO CONFIRMAR EL QSO, VERIFIQUE LOS DATOS.";
    }

    //setError(errorToDisplay);
    notifyError(errorToDisplay);
  }

  const handleAxiosError = (response) => {
    let errorToDisplay = "OCURRIO UN ERROR! VERIFIQUE NUEVAMENTE A LA BREVEDAD";

    // eslint-disable-next-line
    if (response.message=="Network Error") {
      errorToDisplay = "Error de red!. Reintente a la brevedad";
    }

    //setError(errorToDisplay);
    notifyError(errorToDisplay);
  }

  /*const tryQsl = (str) =>{
    getQsl({qso:str})
    .then((response)=>this.setState({qsl:response}))
    .catch((responseError) => this.handleAPIError(responseError));
  }*/

  const notify = (message) => {
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

 const notifyError = (message) => {
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

  const submit = () =>{

    newMember({
        signal: signal,
        name:name,
        
        })       
        .then((response) => {
            //eslint-disable-next-line
            if (response.response=="OK"){
                notify("NUEVO RADIOAFICIONADO AGREGADO!");
                
                var url = "http://lu4dq.qrits.com.ar/api/qslCreator.php?qso="+response.document+"&chk="+response.chk;
                props.qslHook(url);
                
            }else{
                handleAPIError(response);
            }         
        })
        .catch((response) => handleAxiosError(response));

  }


  const handleSubmit = (event) => {
    event.preventDefault();
    var errors = [];

    // Check name of Rule
    if (signal.length<=3) {
        errors.push("signal");
    }

    // Check description of Rule
    if (name.length <= 3) {
        errors.push("frequency");
    }


    

    setErrors(errors);

    if (errors.length > 0) {
        return false;
    } else {
        submit();
    }
  }

   
  const hasError= (key) => {
        return errors.indexOf(key) !== -1;
  }



  return (

    <div>


    <TopMenu />     
                
                <div className="card-header bgdiv text-white">
                    <h1>Nuevo</h1> 
                </div>
    
                <div className="container-fluid table-scroll-vertical">




<div className="card m-4">
    <div className="card-body">

       <form onSubmit={handleSubmit} className="row g-3 needs-validation">
           <div>
           <ToastContainer />
               <div className="row rowForm">
                               <div className="col-12">
                               <h5>Registra un nuevo radioaficionado</h5>
                               </div>
                           </div>

                           <div className="row">&nbsp;</div>


                        
                           
                           <div className="row">&nbsp;</div>

           
             <Row className="mb-3">
               <Form.Group className="mb-3" controlId="signalValue">
                 <Form.Label>SEÑAL DISTINTIVA</Form.Label>
                 <Form.Control  onChange={handleChangeSignal} value={signal}
                                className={
                                  hasError("signal")
                                        ? "form-control is-invalid"
                                        : "form-control"
                                }/>
                   <div
                       className={
                        hasError("signal")
                               ? "invalid-feedback"
                               : "visually-hidden"
                       }
                   >
                    Escribir al menos 3 digitos de un indicativo válido
                   </div>

               </Form.Group>
             </Row>


             <Row className="mb-3">
               <Form.Group className="mb-3" controlId="signalValue">
                 <Form.Label>NOMBRE</Form.Label>
                 <Form.Control  onChange={handleChangeName} value={name}
                                className={
                                  hasError("name")
                                        ? "form-control is-invalid"
                                        : "form-control"
                                }/>
                   <div
                       className={
                        hasError("name")
                               ? "invalid-feedback"
                               : "visually-hidden"
                       }
                   >
                    Escribir al menos 3 digitos de un indicativo válido
                   </div>

               </Form.Group>
             </Row>
   
              
             <Row className="mb-3">
               <Form.Group className="mb-3" controlId="signalValue">
                 <Form.Label>CATEGORIA</Form.Label>
                 <Form.Control  onChange={handleChangeSignal} value={signal}
                                className={
                                  hasError("signal")
                                        ? "form-control is-invalid"
                                        : "form-control"
                                }/>
                   <div
                       className={
                        hasError("signal")
                               ? "invalid-feedback"
                               : "visually-hidden"
                       }
                   >
                    Escribir al menos 3 digitos de un indicativo válido
                   </div>

               </Form.Group>
             </Row>

            <Row className="mb-3">
               <Form.Group className="mb-3" controlId="signalValue">
                 <Form.Label>PAIS</Form.Label>
                 <Form.Control  onChange={handleChangeSignal} value={signal}
                                className={
                                  hasError("signal")
                                        ? "form-control is-invalid"
                                        : "form-control"
                                }/>
                   <div
                       className={
                        hasError("signal")
                               ? "invalid-feedback"
                               : "visually-hidden"
                       }
                   >
                    Escribir al menos 3 digitos de un indicativo válido
                   </div>

               </Form.Group>
             </Row>

             <Row className="mb-3">
               <Form.Group className="mb-3" controlId="signalValue">
                 <Form.Label>PROVINCIA</Form.Label>
                 <Form.Control  onChange={handleChangeSignal} value={signal}
                                className={
                                  hasError("signal")
                                        ? "form-control is-invalid"
                                        : "form-control"
                                }/>
                   <div
                       className={
                        hasError("signal")
                               ? "invalid-feedback"
                               : "visually-hidden"
                       }
                   >
                    Escribir al menos 3 digitos de un indicativo válido
                   </div>

               </Form.Group>
             </Row>

             <Row className="mb-3">
               <Form.Group className="mb-3" controlId="signalValue">
                 <Form.Label>CIUDAD</Form.Label>
                 <Form.Control  onChange={handleChangeSignal} value={signal}
                                className={
                                  hasError("signal")
                                        ? "form-control is-invalid"
                                        : "form-control"
                                }/>
                   <div
                       className={
                        hasError("signal")
                               ? "invalid-feedback"
                               : "visually-hidden"
                       }
                   >
                    Escribir al menos 3 digitos de un indicativo válido
                   </div>

               </Form.Group>
             </Row>


                           
                       
                           <div className="row">&nbsp;</div>

                           <div className="row">
                               <div className="col-12 text-right">
                                       <button type="submit" className="btn btn-success">Agregar</button>
                               </div>
                           </div>
           </div>
           
    </form>
  
    </div></div>

  </div></div>
  );
}