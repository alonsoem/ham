import React from 'react';
import {getSolar} from "./api/api";
import {Card,Table} from "react-bootstrap";
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
        this.update();
    }





    render() {


        var other = this.state.resto;
        var otherOut = [];
        Object.keys(other).forEach((key) =>{
          otherOut.push(
                    <tr>
                        <td>{key}</td>
                        <td>{other[key]}</td>
                    </tr>
                    );
        });


        function semaphore (value){
            switch(value) {
                case 'Good':
                  return <span class="font-weight-bold text-success">{value}</span>;
                case 'Poor':
                    return <span class="font-weight-bold fw-bold text-danger">{value}</span>;
                case 'Fair':
                        return <span class="font-weight-bold fw-bold text-dark">{value}</span>;
                case 'Bad':
                        return "<>{value}<>";                
                default:
                    return "<>{value}<>";
              }
        }


        const groupByName = this.state.calculatedConditions.reduce((groupBy, item) => {
            const { name } = item;
            groupBy[name] = groupBy[name] ?? [];
            groupBy[name].push({time: item.time, status:item.status});
            return groupBy;
          }, {});
          console.log(groupByName);
        
          var hfStatus = [];
          Object.keys(groupByName).forEach((key) =>{
                              
              hfStatus.push(          
  
              <tr >
                  <td>{key}</td>
                  <td>{semaphore(groupByName[key][0].status)}</td>    
                  <td>{semaphore(groupByName[key][1].status)}</td>                 
                  
             </tr>
              )
          })

        return (
            <div className="container-fluid table-scroll-vertical">
            <div class="row">
    <div class="col-sm-12">
      <div class="card">
            <div class="card-header bgdiv text-white">
                <h1>Condiciones Solares</h1> 
            </div>
          
      <div class="card-body">
                
                <div className="row d-flex justify-content-center ">
                    <div className="p-3  col col-12 col-sm-12 col-md-6 col-xl-5">
                <Card>
                    <Card.Header>Condiciones bandas HF</Card.Header>

                    <Card.Body>
                <Table striped  hover >
                    <thead>
                    <tr>
                        <th>Band</th>
                        <th>Day</th>
                        <th>Night</th>
                    </tr>
                    </thead>
                    <tbody >

                    {hfStatus.map(item => item)}


                    </tbody>
                </Table>
                    </Card.Body>
                </Card>

                    </div></div>

                   

                <div className="row d-flex justify-content-center">
                    <div className="p-3  col col-12 col-sm-12 col-md-6 col-xl-5">
                <Card>
                    <Card.Header>Otros Datos</Card.Header>

                    <Card.Body>
                <Table striped  hover >
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Value</th>
                    </tr>
                    </thead>
                    <tbody >
                    {otherOut.map(item => item)}

                    </tbody>
                </Table>
                    </Card.Body>
                </Card>

                    </div></div>

                    <div className="row d-flex justify-content-center">
                        <div className=" p-3 col col-12 col-sm-12 col-md-6 col-xl-5">
                        <Card>
                    <Card.Header>Condiciones VHF</Card.Header>

                    <Card.Body>
                <Table striped  hover >
                    <thead>
                    <tr>
                        <th>Location</th>
                        <th>Phenomenon</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody >

                       {
                        this.state.calculatedVHFConditions.map((each)=>(
                            
                            <tr >
                                <td>{each.location}</td>
                                <td>{each.name}</td>
                                <td>{each.status}</td>
                            </tr>

                        )
                        )
                       }


                    </tbody>
                </Table>
                    </Card.Body>
                </Card>
                        </div></div>


                        
                <div className="row d-flex justify-content-center">
                    <div className=" p-3 col col-6 col-sm-12 col-md-6 col-xl-5">

                <Card>
                    <Card.Header>Solar Predictions</Card.Header>

                    <Card.Body>
                            Proximamente...

                    </Card.Body>
                </Card>
                    </div></div>


            
                    </div></div></div></div>
            
            
            
            </div>
            


        );


    }

}