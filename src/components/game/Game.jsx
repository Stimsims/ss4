import React from 'react'
import nerdamer from 'nerdamer/all';
//import Katex from './../UI/math/Katex.jsx';
//import {ResponsiveContainer, LineChart, ScatterChart, Scatter, ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import container from './../UI/elements/Container.jsx';
import accordion from './../UI/elements/Accordion.jsx';
import styled from 'styled-components';
import GameLibs from 'mygamelibs';
import GameMenu from './GameMenu.jsx';

class Game extends React.Component{
    constructor(props){
        super(props);
     //   console.log("game constructor, sample game: ", this.props.game);
        this.state = {
            checkIn:{
                katex: null,
                recharts: null
            },
            tools: {
                views:{
                    ...GameLibs.views,
                    container,
                    styled,
                    accordion,
                    nerdamer
                }
            }
        }
    }
    componentWillMount(){
        this.importKatex();
        this.importGraph();
    }
    areToolsReady(){
       // console.log("game tools ready? ");
        let ready = true;
        let keys = Object.keys(this.state.checkIn);
        keys.map(k => {
            if(!this.state.checkIn[k]){
                ready = false;
            }
        })
      //  console.log("game tools ready? " + ready, this.state);
        return ready;
    }
    importKatex(){
        import('./../UI/math/Katex.jsx' /* webpackChunkName: "mykatex" */ )
        .then(r=>{
            console.log("game tools katex checking in", r);
            this.setState({
                checkIn:{
                    ...this.state.checkIn,
                    katex: true
                },
                tools:{
                    ...this.state.tools,
                    views:{
                        ...this.state.tools.views,
                        katex: r.default
                    }
                }
            })
        })
        .catch(e=>{
            console.log("game tools error");
            this.setState({
                error: 'failed to fetch katex'
            })
        })
    }
    importGraph(){
        import('recharts' /* webpackChunkName: "mygraph" */ )
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
            console.log("game tools error");
            this.setState({
                error: 'failed to fetch graph'
            })
        })
    }

    render(){
       // console.log('rendering game with tools: ', this.state);
        if(this.areToolsReady()){
            return(
                <div>
                    <this.props.game tools={this.state.tools} />
                </div>
            )
        }else{
            return <p>loading tools...</p>
        }

    }
}
export default Game;
