import React from 'react';
import {getSolar} from "./api/api";
import {Button, Card,Table} from "react-bootstrap";
import '../node_modules/bootstrap-css-only/css/bootstrap.css';



export default class solarConditions extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            calculatedConditions:[],
            calculatedVHFConditions:[],
            resto:[],

        };
    }


    update = () => {
        getSolar({})
            .then((data) => {
                 const {calculatedconditions,calculatedvhfconditions,...resto}=data;
                 this.setState({resto:resto, calculatedConditions:calculatedconditions.band, calculatedVHFConditions:calculatedvhfconditions.phenomenon})
                })
             
            
            .catch(() => this.setState({error: 'Algo anduvo mal! Volvé a internar'}));
    }

    componentDidMount() {
        
    }





    render() {


  

        return (
            <div className="container-fluid table-scroll-vertical">
            
            <div class="card-header bgdiv text-white">
                <h1>Buscar indicativos</h1> 
            </div>

            <div class="row">
            <div class="col-12">
                <Card>
                    

                    <Card.Body>
                    <div class="row">
                        <div class="col-9">
                            <input type="text" class="w-100"></input>
                        </div>
                        
                        <div class="col-3">
                            <Button>Buscar</Button>
                        </div>
                    </div>
                        
             
                    </Card.Body>
                </Card>
                </div>
           
            </div>




            <div class="row text-center p-4 ">
                <div class="col-4 col-sm-4 text-center">
                <button type="button" class="btn btn-primary">Primary</button>
                </div>
                <div class="col-4 col-sm-4 justify-content-center">
                <button type="button" class="btn btn-primary">Primary</button>
                </div>

                <div class="col-4 col-sm-4 justify-content-center" >
                <button type="button" class="btn btn-primary">Primary</button>
                </div>

            </div>

            <div class="row text-center p-4 ">
                <div class="col-4 col-sm-4 text-center">
                <button type="button" class="btn btn-primary">Primary</button>
                </div>
                <div class="col-4 col-sm-4 justify-content-center">
                <button type="button" class="btn btn-primary">Primary</button>
                </div>

                <div class="col-4 col-sm-4 justify-content-center" >
                <button type="button" class="btn btn-primary">Primary</button>
                </div>

            </div><div class="row text-center p-4">
                <div class="col-4 col-sm-4 text-center">
                <button type="button" class="btn btn-primary">Primary</button>
                </div>
                <div class="col-4 col-sm-4 justify-content-center">
                <button type="button" class="btn btn-primary">Primary</button>
                </div>

                <div class="col-4 col-sm-4 justify-content-center" >
                <button type="button" class="btn btn-primary">Primary</button>
                </div>

            </div>


            </div>
            


        );


    }

}