//import "./styles.css";
import {Form, Row} from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import { useState ,useEffect} from "react";

import '../node_modules/bootstrap-css-only/css/bootstrap.css';
import TopMenu from './topMenu';
import NewMemberForm from "./newMemberForm.js";



export default function FormRequest(props) {

  

  const [formState, setFormState] = useState(false);

  const history = useHistory();
  

 

  useEffect (() => {

        
  },[formState]);




   

  function resetForm(){

    setFormState(true);
  }

  const DisplayConditional = (props) =>{
    if (!formState){
      return (<NewMemberForm callBack={props.resetForm} />);
    }else{
      return (
        <div className="container text-center col-8  p-3">
          <img src="static/checkBig.png" className="m-2"/>
          <h5>Gracias por ayudarnos a crecer!</h5>
          <p>En breve podrás encontrar tu contribución en el listado general.</p>
        </div>
        );

    }
  }

 

  return (

    <div>


    <TopMenu />     
                
                <div className="card-header bgdiv text-white">
                    <h1>Nuevo</h1> 
                </div>
    
                <div className="container-fluid table-scroll-vertical col-10">




<div className="card m-4">
    <div className="card-body">
      {
       <DisplayConditional resetForm={resetForm} />
      }

      
  
    </div></div>

  </div></div>
  );
}