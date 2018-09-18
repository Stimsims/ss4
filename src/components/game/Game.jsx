import React from 'react'
import styled from 'styled-components';
import GameLibs from 'mygamelibs';
import {connect} from 'react-redux';

class Game extends React.Component{
    constructor(props){
        super(props);
        console.log("game constructor props", props);
        this.state = {
            checkIn:{
               // katex: false,
                recharts: false,
                mathlibs: false
            },
            tools: {
                //ReactGA,
                views:{
                    ...GameLibs.views,
                    styled,
                },
                utils:{
                    ...GameLibs.utilities
                },
                simulation:{
                    ...GameLibs.simulation
                }
            }
        }
    }
    componentWillMount(){
         this.importGraph();
         this.importMath();
    }
    areToolsReady(){
        let ready = true;
        let keys = Object.keys(this.state.checkIn);
        keys.map(k => {
            if(!this.state.checkIn[k]){
                ready = false;
            }
        })
        return ready;
    }
    importMath(){
        import('MathLibs' /* webpackChunkName: 'MathLibs' */)
        .then(res => {
            console.log('imported MathLibs', res);
            this.setState({
                    checkIn:{
                        ...this.state.checkIn,
                        mathlibs: true
                    },
                    tools:{
                        ...this.state.tools,
                        math: res.default
                    }
                })
            })
        .catch(e => {
            console.log('error importing MathLibs', e);
        })
    }

    importGraph(){
        import('recharts' /* webpackChunkName: "myRecharts" */ )
        .then(r=>{
                console.log("game tools graph checking in, ", r);
                let {ResponsiveContainer, LineChart, ScatterChart, Scatter, ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} = r;
                this.setState({
                    //katex: Katex,
                    checkIn:{
                        ...this.state.checkIn,
                        recharts: true
                    },
                    tools:{
                        ...this.state.tools,
                        views:{
                            ...this.state.tools.views,
                            recharts: {
                                ResponsiveContainer,
                                LineChart,
                                ScatterChart,
                                Scatter,
                                ComposedChart,
                                Line,
                                Area,
                                Bar,
                                XAxis,
                                YAxis,
                                CartesianGrid,
                                Tooltip,
                                Legend
                            },
                        }
                    }
                })
        })
        .catch(e=>{
            console.e("game tools error");
            this.setState({
                error: 'failed to fetch graph'
            })
        })
    }

    render(){
        if(this.areToolsReady()){
            return(
                <this.props.game tools={this.state.tools} />
            )
        }else{
            return <p>loading tools...</p>
        }

    }
}
//export default Game;

const mapStateToProps = (state, props) => {
    return {
        init: state.sim.initialized
    }
}
export default connect(mapStateToProps)(Game);