import React from 'react';
import Trends from './../../data/trends.json';
import styled from 'styled-components';
import Loading from './UI/animations/Loading.jsx';
import Container from './UI/elements/Container.jsx';
import Text from './UI/elements/Text.jsx';
import Table from './/UI/elements/Table.jsx';
//import {ResponsiveContainer, LineChart, Line, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
/*
      "Month": "2004-01",
      "math: (Worldwide)": 35,
      "physics: (Worldwide)": 20,
      "chemistry: (Worldwide)": 21,
      import { error } from 'util';
"biology: (Worldwide)": 18,
      "science: (Worldwide)": 100

      tick={{ fill: 'red' }}
*/
export default class Graph extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            recharts: null,
            error: null
        }
    }
    componentDidMount(){
        import(/* webpackChunkName: "mygraph" */ 'recharts')
            .then(r=>{
                this.setState({
                    recharts: r
                })
            })
            .catch(e=>{
                this.setState({
                    error: 'unable to load graph'
                })
        })
    }
    renderGraph(){
        let {ResponsiveContainer, LineChart, Line, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend} = this.state.recharts;
        return (
            // <p>graph</p>
            // <div style={{display: 'table', height:'100%', width: '95%', margin: 'auto', padding: '10px'}} >
            //     <p style={{display: 'table-row', margin: '0px', textAlign: 'center'}}>Google Search Trends for Subjects</p>
            //     <div style={{display: 'table-row', height:'100%', width:'100%'}}>
            //         <ResponsiveContainer>
            //                 <LineChart data={Trends}
            //                     padding={{top: 0, right: 0, left: 0, bottom: 0}}
            //                     margin={{top: 20, right: 20, left: -20, bottom: 50}}>
            //                     <XAxis dataKey="Month" label={{ value: "Year-Month", offset: 25, angle: 0, position: 'bottom'}} 
            //                     tickFormatter={(t) => {return t.slice(2)}}  angle={-45} textAnchor="end" />
            //                     <YAxis/>
            //                     <CartesianGrid strokeDasharray="1 6"/>
            //                     <Tooltip/>
            //                     <Legend verticalAlign="top" height={36} />
            //                     <Line type="monotone" dot={false} dataKey="math: (Worldwide)" fill='#8884d8' stroke='#8884d8' strokeWidth={3}/>
            //                     <Line type="monotone" dot={false} dataKey="physics: (Worldwide)" stroke="#82ca9d" strokeWidth={3}/>
            //                 </LineChart>
            //         </ResponsiveContainer>
            //     </div>
            // </div>
            <Table heights={[null, '100%']} >
                <p style={{ textAlign: 'center'}}>Google Search Trends for Subjects</p>
                <div style={{height:'97%', width:'95%', margin: 'auto'}}>
                    <ResponsiveContainer>
                            <LineChart data={Trends}
                                padding={{top: 0, right: 0, left: 0, bottom: 0}}
                                margin={{top: 20, right: 20, left: -20, bottom: 50}}>
                                <XAxis dataKey="Month" label={{ value: "Year-Month", offset: 25, angle: 0, position: 'bottom'}} 
                                tickFormatter={(t) => {return t.slice(2)}}  angle={-45} textAnchor="end" />
                                <YAxis/>
                                <CartesianGrid strokeDasharray="1 6"/>
                                <Tooltip/>
                                <Legend verticalAlign="top" height={36} />
                                <Line type="monotone" dot={false} dataKey="math: (Worldwide)" fill='#8884d8' stroke='#8884d8' strokeWidth={3}/>
                                <Line type="monotone" dot={false} dataKey="physics: (Worldwide)" stroke="#82ca9d" strokeWidth={3}/>
                            </LineChart>
                    </ResponsiveContainer>
                </div>
            </Table>
      );
    }
    //runs a loading animation until data and graph are imported
    render () {

        if(this.state.recharts){
            return this.renderGraph();
        }else if(this.state.error){
            return <p>{this.state.error}</p>
        }else{
            return (<Container>
                        <Loading />
                    </Container>)
        }
    }
}


