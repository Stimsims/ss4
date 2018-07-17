import React from 'react';
import ReactDOM from 'react-dom';
import ChartistGraph from 'react-chartist';
import styled from "styled-components";
import Legend from 'chartist-plugin-legend';
import Axis from 'chartist-plugin-axistitle';

//import Legend from 'chartist-plugin-legend';
// import Axis from 'chartist-plugin-axistitle';
import {lineScaleUp, heightUp, fadeIn, widthRight, translate} from './animations.js';
import {colors} from './../../constants.js';
import {genStyles} from './styles.js';
import './main.css';
import {getAxisLabels} from './utilities.js';

// import Chartist from 'chartist';
if (typeof window === 'undefined') {
  global.window = {}
}
//interface props.title, props.titleX, props.titleY, props.legend
/*
        return {
            name: this.label,
            data: [{x, y}]
        }
  let labels = ['math', "physics", "chemistry", "biology", "science"]
    <Line data={this.state.adapter} options={this.state.options} 
    title={'Search Trends'} legend={this.state.labels} 
    titleX={'Time (mins)'} titleY={'Goals'} />
*/
export default class Pie extends React.Component {
  constructor(props){
    super(props);
    
    //let chart = <ChartistGraph  data={props.data} listener={listeners} options={props.options} type={'Line'} />;
    //listener={this.state.listeners} options={this.props.options}
    console.log('line graph');
    console.log(props);
    console.log("props ops");
    console.log(props.options);
    let plugins = [];
    let defaults = {
      showPoint: false,
      showGrid: false,
      chartPadding: {
        top: 10,
          right: 20,
          bottom: 180,
          left: 20
      },
      plugins
    }
    
    if(props.legend){
            let names = getAxisLabels(props.legend);
            plugins.push(Legend({
                position: 'top',
                classNames: ['ct-myclass'],
                legendNames: names
            }))
    }
    if(props.titleX || props.titleY){
      let axis = {};
      if(props.titleX){
        axis.axisX = {
          axisTitle: `${props.titleX}`,
          axisClass: 'ct-axis-title',
          offset: {
              x: 0,
              y: 0
          },
          textAnchor: 'middle'
        }
      }
      if(props.titleY){
        axis.axisY = {
          axisTitle: `${props.titleY}`,
          axisClass: 'ct-axis-title',
          offset: {
              x: 0,
              y: 20
          },
          textAnchor: 'middle'
        }
      }
      plugins.push(Axis(axis));
    }
    let newOpt = Object.assign(defaults, props.options);
    console.log("newOpt");
    console.log(newOpt);

    this.state={
      options: newOpt,
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
        <h4 style={titleStyle}>{this.props.title}</h4>
        <ChartistGraph  data={this.props.data} listener={this.state.listeners} options={this.state.options} type={'Line'} />
      </this.state.container>
    )
  }
}


const titleStyle ={
  color: 'white',
  textAlign: 'center',
  marginBottom: '0px'
}