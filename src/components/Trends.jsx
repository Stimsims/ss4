import React from 'react';
import ReactDOM from 'react-dom';
import Line from './UI/graphs/Line.jsx';
//import {get} from 'lodash';
import Adapter from './../utilities/adapterParallel.js';
import Legend from 'chartist-plugin-legend';
import Axis from 'chartist-plugin-axistitle';
import Trends from './../../data/trends.json';
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
        let labels = [
            'math', 
            "physics", "chemistry", "biology", 
            "science"
        ]
        let xfn = (function(){
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
          axisX: {
            labelInterpolationFnc: xfn
          }
        }
        this.state={
            options,
            labels,
            adapter: new Adapter(Trends, 'Math', 'Month', [
                'math: (Worldwide)', "physics: (Worldwide)", "chemistry: (Worldwide)", 
                "biology: (Worldwide)", "science: (Worldwide)"
            ])
        }
    }

    render() {
      return (
        <Container>
          <Line data={this.state.adapter} options={this.state.options} 
          title={'Search Trends'} legend={this.state.labels} 
          titleX={'Time (mins)'} titleY={'Goals'} />
        </Container>
      )
    }
}

const Container = styled.div`
  margin-top:70px;
    height: 100vh;
`