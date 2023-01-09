import React from 'react';
import {getSolar} from "./api/api";
import {Card,Table} from "react-bootstrap";
import '../node_modules/bootstrap-css-only/css/bootstrap.css';
import { withTranslation } from "react-i18next";



 class solarConditions extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            calculatedConditions:[],
            calculatedVHFConditions:[],
            source:'',
            updated:'',
            resto:[],

        };
    }


    update = () => {
        getSolar({})
            .then((data) => {
                 const {calculatedconditions,calculatedvhfconditions,source,updated,...resto}=data;
                 this.setState({
                    source:source,
                    updated:updated,
                    resto:resto, 
                    calculatedConditions:calculatedconditions.band, 
                    calculatedVHFConditions:calculatedvhfconditions.phenomenon})
                })
             
            
            .catch(() => this.setState({error: 'Algo anduvo mal! Volvé a internar'}));
    }

    componentDidMount() {
        this.update();
    }





    render() {

        const { t } = this.props;


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
                    <Card.Header>{t("title_hf_conditions")}</Card.Header>

                    <Card.Body>
                <Table striped  hover >
                    <thead>
                    <tr>
                        <th>{t("band")}</th>
                        <th>{t("day")}</th>
                        <th>{t("night")}</th>
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
                    <Card.Header>{t("title_other_data")}</Card.Header>

                    <Card.Body>
                <Table striped  hover >
                    <thead>
                    <tr>
                        <th>{t("other_data_name")}</th>
                        <th>{t("other_data_value")}</th>
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
                    <Card.Header>{t("vhf_conditions")}</Card.Header>

                    <Card.Body>
                <Table striped  hover >
                    <thead>
                    <tr>
                        <th>{t("location")}</th>
                        <th>{t("phenomenon")}</th>
                        <th>{t("status")}</th>
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
                    <Card.Header>{t("solar_predictions")}</Card.Header>

                    <Card.Body>
                    {t("next")}

                    </Card.Body>
                </Card>
                    </div></div>



                    <div className="row d-flex justify-content-center">
                    <div className=" p-3 col col-6 col-sm-12 col-md-6 col-xl-5">

                <Card>

                    <Card.Body>
                                <div class="row">
                                    <div class="col-7">{t("source")}:</div>
                                    <div class="col-5">{this.state.source}</div>
                                </div>
                                <div class="row">
                                    <div class="col-7">{t("updated")}:</div>
                                    <div class="col-5">{this.state.updated}</div>
                                </div>

                    </Card.Body>
                </Card>
                    </div></div>

            
                    </div></div></div></div>
            
            
            
            </div>
            


        );


    }

}
export default withTranslation()(solarConditions);