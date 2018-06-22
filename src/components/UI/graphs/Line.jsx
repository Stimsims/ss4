import React from 'react';
import ReactDOM from 'react-dom';
import ChartistGraph from 'react-chartist';
import styled from "styled-components";

//import Legend from 'chartist-plugin-legend';
// import Axis from 'chartist-plugin-axistitle';
import {lineScaleUp, heightUp, fadeIn, widthRight, translate} from './animations.js';
import {colors} from './../../constants.js';
import {genStyles} from './styles.js';
import './main.css';

// import Chartist from 'chartist';
 
export default class Pie extends React.Component {
  constructor(props){
    super(props);
    
    //let chart = <ChartistGraph  data={props.data} listener={listeners} options={props.options} type={'Line'} />;
    //listener={this.state.listeners} options={this.props.options}
    console.log('line graph');
    console.log(props);
    this.state={
      container: genStyles(this.props.data),
      data: {
        labels: [1,2,3],
        series:[
          [1,2,3]
        ]
      }
    }
  }
  
  render() {

    // console.log('line graph');
    // console.log(this.props);
    return (
      <this.state.container className="chartContainer">
        <ChartistGraph  data={this.props.data} listener={this.state.listeners} options={this.props.options} type={'Line'} />
        {/* <ChartistGraph data={this.props.data} options={this.props.options} type={type} /> */}
      </this.state.container>
    )
  }
}


