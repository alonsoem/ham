import React from 'react';

import '../node_modules/bootstrap-css-only/css/bootstrap.css';



export default class solarConditions extends  React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name:"",
            category:"",
            qth_country:"",
            qth_province:"",
            qth_city:"",
            signal:""
        };
    }
    
    componentDidMount() {
        this.setState({signal:this.props.match.params.signal});
        this.setState({name:this.props.match.params.name});
        this.setState({category:this.props.match.params.category});
        this.setState({qth_country:this.props.match.params.country});
        this.setState({qth_province:this.props.match.params.province});
        this.setState({qth_city:this.props.match.params.city});
        
    }

    render() {
 

        return (
            <div className="container-fluid table-scroll-vertical">
            
            <div class="card-header bgdiv text-white">
                <h1>Resultados</h1> 
            </div>


            <p>&nbsp;</p>

                        <div class="card">
                            <div class="card-header">
                                <div class="row">
                                    <div class="col-9">{this.state.signal} - {this.state.name}</div>
                                    <div class="col-3"><span class=" text-white badge rounded-pill bg-dark">{this.state.category}</span></div>
                                </div>
                                 
                            </div>
                            <div class="card-body ">

                                {this.state.qth_city}<br/>
                                {this.state.qth_province}<br/>
                                <img src="static/flags/gif/ar.gif" alt={this.state.qth_country + ' flag'} />&nbsp;{this.state.qth_country}
                            </div>

                        </div>
            </div>
            


        );


    }

}