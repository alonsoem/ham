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
                <h1>Results</h1> 
            </div>

            <p>&nbsp;</p>

            <div class="card">
                <div class="card-header">
                     <h4>Buscaste LU1EQ</h4> 
                </div>
          
                <div class="card-body">
                        <div class="card">Parece ser un indicativo de Argentina [flag]. <p>Los indicativos de argentina comienza con: LU, LV, AX...</p></div>

                        <div class="card">
                            <div class="card-header">
                                LU1EQE - Enrique Alonso
                            </div>
                            <div class="card-body">
                                Categoria: SUPERIOR <br/>

                                qth: BErazategui<br/>
                                Provincia de buenos aires<br/>
                                Argentina<br/>
                            </div>

                        </div>

                        <div class="card">
                            <div class="card-header">
                                LU1EQP - Pablo Quiroz
                            </div>
                            <div class="card-body">
                                Categoria: NOVICIO<br/>

                                qth: BErazategui<br/>
                                Provincia de buenos aires<br/>
                                Argentina<br/>
                            </div>

                        </div>
                        <div class="card">
                            <div class="card-header">
                                LU1EQA - Jorge abdul
                            </div>
                            <div class="card-body">
                                Categoria: NOVICO<br/>

                                qth: Quilmes<br/>
                                Provincia de buenos aires<br/>
                                Argentina<br/>
                            </div>

                        </div>
                </div>
            </div>
                




            

            </div>
            


        );


    }

}