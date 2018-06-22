import React from 'react';
import Line from './../../../../components/UI/graphs/Line.jsx';
//import {get} from 'lodash';
import Adapter from './../../../../utilities/adapterParallel.js';
import Legend from 'chartist-plugin-legend';
import Axis from 'chartist-plugin-axistitle';
import Trends from './../../../../../data/trends.json';
import styled from 'styled-components';
//import Chartist from 'chartist';
// import ChartistGraph from 'react-chartist';
 /*
            series: {
                'series-1': {
                  lineSmooth: Chartist.Interpolation.step()
                },
                'math: (Worldwide)': {
                  lineSmooth: Chartist.Interpolation.simple(),
                  showArea: true,
                  showLabel: true
                }
              },
 */

export default class Pie extends React.Component {
    constructor(props){
        super(props);
        let order = ['s1', 's2'];
        
        this.state={
            order,
            adapter: new Adapter(Trends, 'Math', 'Month', ['math: (Worldwide)', 
            "physics: (Worldwide)", "chemistry: (Worldwide)", "biology: (Worldwide)", 
            "science: (Worldwide)"])
        }
    }
     componentDidMount(){
// //         import Legend from 'chartist-plugin-legend';
// // import Axis from 'chartist-plugin-axistitle';
//         let Legend = require('chartist-plugin-legend');
//         let Axis = require('chartist-plugin-axistitle');
        let fn = (function(){
            let map = new Map();
            return function(value){
                let t = value.slice(0, 4);
                if(!map.has(t)){
                    map.set(t, 1);
                    return t;
                }
            }
        })();
        var options = {
            showPoint: false,
            chartPadding: {
              top: 10,
                right: 20,
                bottom: 170,
                left: 20
            },
          axisX: {
            labelInterpolationFnc: fn
          },
          plugins: [
            Legend({
                position: 'top',
                classNames: ['ct-myclass', 'ct-myclass2'],
                legendNames: [{name: 'math: (Worldwide)', series: ['math: (Worldwide)']}, 
                {name: 'ergo', series: ['chemistry: (Worldwide)']}]
            }),
            Axis({
                axisX: {
                    axisTitle: 'Time (mins)',
                    axisClass: 'ct-axis-title',
                    offset: {
                        x: 0,
                        y: 40
                    },
                    textAnchor: 'middle'
                },
                axisY: {
                    axisTitle: 'Goals',
                    axisClass: 'ct-axis-title',
                    offset: {
                        x: 0,
                        y: -10
                    },
                    flipTitle: false
                }
            })
        ]
        };
        this.setState({
            options
        })
    }
    render() {
      return (
        <Container>
          <Line data={this.state.adapter} options={this.state.options} />
        </Container>
      )
    }
}

const Container = styled.div`
    height: 400px;
    width: 100%;
`