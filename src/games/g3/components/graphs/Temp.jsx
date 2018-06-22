import React from 'react';
import Line from './../../../../components/UI/graphs/Line.jsx';
import Adapter from './../../../../utilities/adapterParallel.js';
import Legend from 'chartist-plugin-legend';
import Axis from 'chartist-plugin-axistitle';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import styled from 'styled-components';
import chartist from 'chartist';
if (typeof window === 'undefined') {
    global.window = {}
  }
class Graph extends React.Component {
    constructor(props){
        super(props);
        let order = ['s1', 's2'];
        this.state={
            order,
            options: {
                showPoint: false,
                chartPadding: {
                  top: 10,
                    right: 20,
                    bottom: 170,
                    left: 20
                },
               
            },
            data: {
                labels: [1,2,3, 1,2,3],
                series:[
                  [1,2,3, 1,2,3]
                ]
              },
            adapter: new Adapter(props.data, 'Temperature', 'time', ['temp'])
        }
    }
     componentDidMount(){
        let o2 = Object.assign({ 
            axisX: {
                //type: chartist.FixedScaleAxis,
                // divisor: 4,
                // high:10,
                // low:0
                labelInterpolationFnc: (current, index, all) => {
                    if(all.length > 0){
                        console.log("label interp: " + current + ", " + index 
                        +  " index: " + Math.floor(all.length/4));
                        console.log(all);
                        if(index%Math.round(all.length/4)==0){
                            return current;
                        }
                    }
                }
            },
            axisY: {
                type: chartist.FixedScaleAxis,
                divisor: 4,
                // high:100,
                // low:0
            },
            plugins: [
                    Legend({
                        position: 'top',
                        classNames: ['ct-myclass', 'ct-myclass2'],
                        legendNames: [{name: 'Temperature', series: ['temp']}]
                    }),
                    Axis({
                        axisX: {
                            axisTitle: 'Time (mins)',
                            axisClass: 'ct-axis-title',
                            offset: {x: 0,y: 40},
                            textAnchor: 'middle'
                        },
                        axisY: {
                            axisTitle: 'Temperature (celsius)',
                            axisClass: 'ct-axis-title',
                            offset: {x: 0,y: -10},
                            flipTitle: false
                        }
                    })
                ]
            }, 
            this.state.options);
        this.setState({
            options: o2
        })
    }
    componentDidUpdate(){
        console.log("temp data");
        console.log(this.props.data);
        this.state.adapter.updateData(this.props.data);
    }
    render() {
        console.log("rendering temp graph");
      return (
        <Container>
          <Line data={this.state.adapter.getSeries()} options={this.state.options} />
        </Container>
      )
    }
}

const mapStateToProps = (state) => {
    return{
        data: state.simulation.tempData
    }
}

export default connect(mapStateToProps)(Graph);

const Container = styled.div`
    height: 400px;
    width: 100%;
`