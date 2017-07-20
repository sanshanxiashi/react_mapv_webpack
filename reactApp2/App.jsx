import React from 'react';
//import {visfunc} from '../js/d3vis'
import {visfunc} from './draw_map'
import { Alert, Collapse, Panel } from 'react-bootstrap';

class App extends React.Component{

    constructor() {
        super();
       // this.renderChart = this.renderChart.bind(this);
    }


    componentDidMount(prevProps){

        console.log("DidUpdate");
        this.renderChart();
    }


    renderChart(){
        console.log(this);
        visfunc();



    }


    render(){
        debugger;
        return (
            <div className="chart-container">
            </div>
        )
    }

}

export default  App;