//import "./styles.css";
import {Form, Row} from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import { useState,useEffect } from "react";
import {newMember,getCountries} from "./api/api";
import { ToastContainer, toast } from 'react-toastify';
import '../node_modules/bootstrap-css-only/css/bootstrap.css';
import TopMenu from './topMenu';



export default function FormRequest(props) {

  
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [signal, setSignal] = useState("");
  const [errors, setErrors] = useState([]);
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState(null);
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");

  const history = useHistory();
  

  useEffect (() => {
    getAllCountries();
    
    
  },[]);

  const handleChangeName= (event) => {
    setName(event.target.value);
  };     

  const handleChangeSignal  = (event) => {
    setSignal(event.target.value);
  };

  const handleChangeCategory  = (event) => {
    setCategory(event.target.value);
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
    
    

    //setError(errorToDisplay);
    notifyError(errorToDisplay);
  }

  const handleAxiosError = (response) => {
    let errorToDisplay = "OCURRIO UN ERROR! VERIFIQUE NUEVAMENTE A LA BREVEDAD";

    errorToDisplay = response;


    //setError(errorToDisplay);
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

    newMember({
        signal: signal,
        name:name,
        category:category,
        country:country,
        province:province,
        city:city,
        
        })       
        .then((response) => {
            //eslint-disable-next-line
            if (response.status.state=="OK"){
              history.push('/');  
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
               <Form.Group className="mb-3" controlId="nameValue">
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
               <Form.Group className="mb-3" controlId="categoryValue">
                 <Form.Label>CATEGORIA</Form.Label>
                 <Form.Control  onChange={handleChangeCategory} value={category}
                                className={
                                  hasError("category")
                                        ? "form-control is-invalid"
                                        : "form-control"
                                }/>
                   <div
                       className={
                        hasError("category")
                               ? "invalid-feedback"
                               : "visually-hidden"
                       }
                   >
                    Escribir al menos 3 digitos de un indicativo válido
                   </div>

               </Form.Group>
             </Row>


             <Row className="mb-3">
               <Form.Group className="mb-3" controlId="countryValue">
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
                    Seleccione una banda válida
                   </div>

               </Form.Group>
             </Row>


          
             <Row className="mb-3">
               <Form.Group className="mb-3" controlId="rovinceValue">
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
                    Escribir al menos 3 digitos de un indicativo válido
                   </div>

               </Form.Group>
             </Row>

             <Row className="mb-3">
               <Form.Group className="mb-3" controlId="cityValue">
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