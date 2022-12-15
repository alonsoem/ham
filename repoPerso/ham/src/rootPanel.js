import React from 'react';
import {getSolar} from "./api/api";
import {Card,Table} from "react-bootstrap";
import '../node_modules/bootstrap-css-only/css/bootstrap.css';
import * as json from "fxparser";



export default class RootPanel extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            solarData:[],

        };
    }


    update = () => {
        getSolar({})
            .then((data) => {
                const { XMLParser } = require("fast-xml-parser");

                const options = {
                    ignoreAttributes: false,
                    attributeNamePrefix : "@_",
                    allowBooleanAttributes: true
                };
                const parser = new XMLParser(options);


                let jObj = parser.parse(data);
                console.log(json.parse(jObj))
                this.setState({solarData: json.parse(jObj).solar.calculatedConditions});

                //this.setState({solarData: data.solar});

                }
            )
            .catch(() => this.setState({error: 'Algo anduvo mal! Volvé a internar'}));
    }

    componentDidMount() {

        this.update();

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log (this.state.solarData);
}


    render() {

        return (
            <div className="container-fluid table-scroll-vertical">
                <div className="row">
                    <div className="col col-6 col-sm-12 col-md-6 col-xl-5">
                <Card>
                    <Card.Header>HF Band Info</Card.Header>

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


                    {this.state.solarData.map(each=> (
                        <tr>
                            <td>NU</td>
                            <td>NU</td>
                            <td>NU</td>
                        </tr>

                    ))}


                        <tr >
                            <td>80-40</td>
                            <td>Mal</td>
                            <td>OK</td>
                        </tr>
                        <tr >
                            <td>80-40</td>
                            <td>Mal</td>
                            <td>OK</td>
                        </tr><tr >
                            <td>80-40</td>
                            <td>Mal</td>
                            <td>OK</td>
                        </tr><tr >
                            <td>80-40</td>
                            <td>Mal</td>
                            <td>OK</td>
                        </tr>



                    </tbody>
                </Table>
                    </Card.Body>
                </Card>

                    </div></div>

                <div className="row">
                    <div className="col col-6 col-sm-12 col-md-6 col-xl-5">

                <Card>
                    <Card.Header>Solar Predictions</Card.Header>

                    <Card.Body>
                            [GRAFICA]

                    </Card.Body>
                </Card>
                    </div></div>
                    <div className="row">
                        <div className="col col-6 col-sm-12 col-md-6 col-xl-5">
                <Card>
                    <Card.Header>Other solar Conditions</Card.Header>
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


                            <tr >
                                <td>80-40</td>
                                <td>Mal</td>
                                <td>OK</td>
                            </tr>
                            <tr >
                                <td>80-40</td>
                                <td>Mal</td>
                                <td>OK</td>
                            </tr><tr >
                                <td>80-40</td>
                                <td>Mal</td>
                                <td>OK</td>
                            </tr><tr >
                                <td>80-40</td>
                                <td>Mal</td>
                                <td>OK</td>
                            </tr>



                            </tbody>
                        </Table>

                    </Card.Body>
                </Card>
                        </div></div>

            </div>


        );


    }

}