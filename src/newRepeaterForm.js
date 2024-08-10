//import "./styles.css";
import {Form} from "react-bootstrap";
import { useState,useEffect } from "react";
import {newRepeater,getCountries} from "./api/api";
import { ToastContainer, toast } from 'react-toastify';
import '../node_modules/bootstrap-css-only/css/bootstrap.css';



export default function FormRequest(props) {

  
  const [name, setName] = useState("");
  const [tx, setTx] = useState(0);
  const [rx, setRx] = useState(0);
  const [subtone, setSubtone] = useState(0);
  const [signal, setSignal] = useState("");
  const [errors, setErrors] = useState([]);
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState(null);
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  


  useEffect (() => {
    getAllCountries();
        
  },[]);

  const handleChangeName= (event) => {
    setName(event.target.value);
  };     

  const handleChangeSignal  = (event) => {
    setSignal(event.target.value);
  };

  const handleChangeRx  = (event) => {
    setRx(event.target.value);
  };
  const handleChangeTx  = (event) => {
    setTx(event.target.value);
  };
  const handleChangeSubtone  = (event) => {
    setSubtone(event.target.value);
  };

  const handleChangeCountry  = (event) => {
    setCountry(event.target.value);
  };
  
  const handleChangeProvince  = (event) => {
    setProvince(event.target.value);

  };  
  const handleChangeCity  = (event) => {
    setCity(event.target.value);
  };
  
  const handleAPIError= (response)=> {
    let errorToDisplay = "OCURRIO UN ERROR! VERIFIQUE NUEVAMENTE A LA BREVEDAD";
    console.log(response);
    
    // eslint-disable-next-line
    if (response.status.errorCode=1062){
      errorToDisplay = "Ya existe alguien registrado con esa señal distintiva.";

    }else{
      errorToDisplay = response.status.message;
    }
  
    notifyError(errorToDisplay);
  }

  const handleAxiosError = (response) => {
    let errorToDisplay = "OCURRIO UN ERROR! VERIFIQUE NUEVAMENTE A LA BREVEDAD";
    errorToDisplay = response;
    notifyError(errorToDisplay);
  }
  

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

    newRepeater({
        signal: signal,
        name:name,
        rx:rx,
        tx:tx,
        subtone:subtone,
        country:country,
        province:province,
        city:city,
        
        })       
        .then((response) => {
            //eslint-disable-next-line
            if (response.status.state=="OK"){
              props.callBack();
              notify("NUEVO RADIOAFICIONADO AGREGADO!");
            }else{
                handleAPIError(response);
            }         
        })
        .catch((response) => handleAxiosError(response));

  }


  const getAllCountries = () => {
    getCountries()
        .then((data) => {
            
            console.log(data);
            setCountries(data.countries);
            })
         
        
        .catch(() => this.setState({error: 'Algo anduvo mal! Volvé a intentar'}));
}

  const handleSubmit = (event) => {
    event.preventDefault();
    var errors = [];

    // Check name of Rule
    if (signal.length<4) {
        errors.push("signal");
    }

    
    if (name.length < 4) {
        errors.push("name");
    }

    if ((rx==null)){
      errors.push("rx");
    }else{
      if(isNaN(rx)){
        errors.push("rx");
      }else{
        if (rx.length===0){
          errors.push("rx");
          
        }else{
          if (rx===0){
            errors.push("rx");
          }
        }
      }
    }
    if ((tx==null)){
      errors.push("tx");
    }else{
      if(isNaN(tx)){
        errors.push("tx");
      }else{
        if (tx.length===0){
          errors.push("tx");
          
        }else{
          if (tx===0){
            errors.push("tx");
          }
        }
      }
    }

    if ((subtone==null)){
      errors.push("subtone");
    }else{
      if(isNaN(subtone)){
        errors.push("subtone");
      }else{
        if (subtone.length===0){
          errors.push("subtone");
          
        }else{
          if (subtone===0){
            errors.push("subtone");
          }
        }
      }
    }

      if (country===null) {
        errors.push("country");
     }

     

      if (province.length <= 4) {
        errors.push("province");
     }
     if (city.length <= 4) {
      errors.push("city");
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
    <div className="p-0 col-12  ">  
      <form onSubmit={handleSubmit} className="needs-validation">

      <ToastContainer />
        <div className="row rowForm mb-4 col-12">
          <div className="mb-2">
            <h5>Registra una nueva repetidora del servicio de radioaficionados</h5>
          </div>
          <p>Los nuevos registros deberán ser validados antes de figurar en los listados.</p>
        </div>

                    

    
      <div className="mb-2 col-12 container">
        <Form.Group className="mb-2" controlId="signalValue">
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
             Escribir al menos 4 digitos de un indicativo válido
            </div>

        </Form.Group>
      </div>


      <div className="mb-2 col-12 container">
        <Form.Group className="mb-2" controlId="nameValue">
          <Form.Label>NOMBRE DEL TITULAR</Form.Label>
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
             Un nombre completo no puede tener menos de 4 dígitos.
            </div>

        </Form.Group>
      </div>

       
      <div className="mb-2 col-12 container">
        <Form.Group className="mb-2" controlId="categoryValue" type="number">
          <Form.Label>TX (Frecuencia de Transmisión de la repetidora)</Form.Label>
          <Form.Control  onChange={handleChangeTx} value={tx}
                         className={
                           hasError("tx")
                                 ? "form-control is-invalid"
                                 : "form-control"
                         }/>
            <div
                className={
                 hasError("tx")
                        ? "invalid-feedback"
                        : "visually-hidden"
                }
            >
             Escriba una frecuencia válida
            </div>

        </Form.Group>
      </div>
      <div className="mb-2 col-12 container">
        <Form.Group className="mb-2" controlId="categoryValue">
          <Form.Label>RX (Frecuencia de Recepción de la repetidora)</Form.Label>
          <Form.Control  onChange={handleChangeRx} value={rx}
                         className={
                           hasError("rx")
                                 ? "form-control is-invalid"
                                 : "form-control"
                         }/>
            <div
                className={
                 hasError("rx")
                        ? "invalid-feedback"
                        : "visually-hidden"
                }
            >
             Escriba una frecuencia válida
            </div>

        </Form.Group>
      </div>
      <div className="mb-2 col-12 container">
        <Form.Group className="mb-2" controlId="categoryValue">
          <Form.Label>SUBTONO</Form.Label>
          <Form.Control  onChange={handleChangeSubtone} value={subtone}
                         className={
                           hasError("subtone")
                                 ? "form-control is-invalid"
                                 : "form-control"
                         }/>
            <div
                className={
                 hasError("subtone")
                        ? "invalid-feedback"
                        : "visually-hidden"
                }
            >
             Escriba un subtono válido
            </div>

        </Form.Group>
      </div>


      <div className="mb-2 col-12 container">
        <Form.Group className="mb-2" controlId="countryValue">
          <Form.Label>PAIS</Form.Label>
          
           <select id="country" onChange={handleChangeCountry}
           className={
             hasError("country")
                   ? "form-select is-invalid"
                   : "form-select"
           } >
                                     <option selected disabled value="">Elija un país...</option>
                                     {countries.map((each)=>{
                                         return <option value={each.id}>{each.name}</option>
                                     })}
                                     </select>
            <div
                className={
                 hasError("country")
                        ? "invalid-feedback"
                        : "visually-hidden"
                }
            >
             Seleccione un país válido
            </div>

        </Form.Group>
      </div>


   
      <div className="mb-2 col-12 container">
        <Form.Group className="mb-2" controlId="rovinceValue">
          <Form.Label>PROVINCIA</Form.Label>
          <Form.Control  onChange={handleChangeProvince} value={province}
                         className={
                           hasError("province")
                                 ? "form-control is-invalid"
                                 : "form-control"
                         }/>
            <div
                className={
                 hasError("province")
                        ? "invalid-feedback"
                        : "visually-hidden"
                }
            >
             Escriba el nombre de la provincia de la repetidora
            </div>

        </Form.Group>
      </div>

      <div className="mb-2 col-12 container">
        <Form.Group className="mb-2" controlId="cityValue">
          <Form.Label>CIUDAD</Form.Label>
          <Form.Control  onChange={handleChangeCity} value={city}
                         className={
                           hasError("city")
                                 ? "form-control is-invalid"
                                 : "form-control"
                         }/>
            <div
                className={
                 hasError("city")
                        ? "invalid-feedback"
                        : "visually-hidden"
                }
            >
             Escriba el nombre de la ciudad de la repetidora
            </div>

        </Form.Group>
      </div>


                    
                
                    

    <div className="mb-2 mt-4 col-12 container">
      <div className="text-right">
        <button type="submit" className="btn btn-success">Agregar</button>
      </div>
    </div>
    
    
  </form>
</div>
      
  
  );
}