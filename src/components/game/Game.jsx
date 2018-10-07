import React from 'react'
import styled from 'styled-components';
import GameLibs from 'mygamelibs';
import {connect} from 'react-redux';
import {listFilesByAppProp, getFile, listFilesByName, exportFile, 
    createReport, createAFile, editFile, structureBody} from './../apis/DriveInterface.js';
import {listCourses, listCourseWork, listSubmissions} from './../apis/ClassInterface.js';
import {writeToSheet, addChart, getSheet} from './../apis/Sheets.js';
import Toast from './../UI/elements/Toast.jsx';
import Submit from './Submit.jsx';

class Game extends React.Component{
    constructor(props){
        super(props);
        console.log("game constructor props", props);
      //  this.createReport = this.createReport.bind(this);
        this.testReport = this.testReport.bind(this);
        this.submitAssignment = this.submitAssignment.bind(this);
        this.state = {
            checkIn:{
               // katex: false,
                recharts: false,
                mathlibs: false
            },
            tools: {
                //ReactGA,
                info:{
                    filename: props.filename,
                    gamename: props.gamename
                },
                views:{
                    ...GameLibs.views,
                    styled,
                },
                utils:{
                    ...GameLibs.utilities
                },
                simulation:{
                    ...GameLibs.simulation
                },
                settings: {
                    ...this.props.settings
                },
                createReport: this.submitAssignment,
                createAssignment: this.submitAssignment,
                submitAssignment: this.submitAssignment
            }
        }
    }
    submitAssignment(document){
        console.log(`game submitAssignemnt called with document`, document);
        this.setState({
            document
        })
    }
    testReport(){
        console.log(`testReport starting`);
        createReport('testgame', 'testname', [])
        .then(r => {
            console.log(`testReport result`, r);
            this.setState({
                toast: <Toast message={`report created`} id={`${Math.random()}`} />
            })
        })
        .catch(e => {
            console.log(`testReport error`, e);
            if(e && e.status === 401 && e.result.error){
                //login required
                this.setState({
                    toast: <Toast message={`error: ${e.result.error.message}`} id={`${Math.random()}`} />
                })
            }
        })
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
            console.error("game tools error");
            this.setState({
                error: 'failed to fetch graph'
            })
        })
    }
    
    //handles saving a report to the cloud
    render(){
        if(this.areToolsReady()){
            return(
                <div style={{width: '100%', height: '100%'}}>

                    <this.props.game tools={this.state.tools} />
                    {this.state.toast}
                    <Submit document={this.state.document} />
                </div>
            )
        }else{
            return <div>
                <p>loading tools...</p>
            </div>
        }

    }
}
//export default Game;

const mapStateToProps = (state, props) => {
    console.log(`website game mapStateToProps state`, state);
    return {
        //init: state.sim.initialized
    }
}
export default connect(mapStateToProps)(Game);