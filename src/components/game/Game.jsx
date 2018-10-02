import React from 'react'
import styled from 'styled-components';
import GameLibs from 'mygamelibs';
import {connect} from 'react-redux';
import {listFilesByAppProp, getFile, listFilesByName, exportFile, createAFile, editFile, structureBody} from './../apis/DriveInterface.js';
import {submitAssignment, gradeAssignment, turnInAssignment, createAssignment, createCourse, listCourses, listCourseWork, listSubmissions} from './../apis/ClassInterface.js';
import {writeToSheet, addChart, getSheet} from './../apis/Sheets.js';
import Toast from './../UI/elements/Toast.jsx';

class Game extends React.Component{
    constructor(props){
        super(props);
        console.log("game constructor props", props);
        this.createReport = this.createReport.bind(this);
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
                createAssignment: this.createAssignment,
                submitAssignment: this.submitAssignment
            }
        }
    }
    submitAssignment(courseId, courseWorkId, submissionId){
        let results = {}
        console.log(`submitAssignment called, courseId ${courseId} workId ${courseWorkId} submission ${submissionId}`);
        try{
            if(!courseId){
                listCourses()
                .then(r => {
                    console.log(`submitAssignment course list result`, r);
                    this.setState({
                        courses: r.result.courses
                    })
                })
            }else if(!courseWorkId){
                results.courseId = courseId;
                listCourseWork(courseId)
                .then(r => {
                    console.log(`submitAssignment coursework list result`, r);
                    this.setState({
                        courses: null,
                        courseWorks: r.result.courseWork
                    })
                })
            }else if(!submissionId){
                results.courseWorkId = courseWorkId;
                listSubmissions(courseId, courseWorkId)
                .then(s => {
                    console.log(`submitAssignment submissions list result`, s);
                    //returns none on teacher account, available on student account
                    //has assignedGrade, courseId, courseWorkId, id, userId, state: TURNED_IN
                    let sub = s.result.studentSubmissions[0].id;
                    this.setState({
                        courseWorks: null
                    })
                    this.submitAssignment(courseId, courseWorkId, sub);
                })
            }else if(courseId && courseWorkId && submissionId){
                results.courseWorkId = courseWorkId;
                this.createReport('submit1', 'submitname', [
                    {tag: 'h1', text: 'Defered promise', textDecoration: 'underline', textAlign: 'center', fontStyle: 'bold'}
                ])
                .then(r => {
                    console.log(`defere promise resolved, report results`, r);
                    results = {...results, ...r};
                    //attach to submission, turn in

                })
            }else{
                console.warn(`submitAssignment some weird combo of params happened with submit assignment courseId: ${courseId} courseWorkId: ${courseWorkId}`)
            }
        }catch(e){
            console.log(`submitAssignment failed, error `, e);
        }
        
    }
    //chartId:1216131842
    createReport(game, name, elements){
        //Goal: create document and get the weblink
        console.log(`createReport game ${game} filename ${name}`, elements);
        return new Promise((resolve, reject) => {
           // let body = structureBody(elements);
            let results = {
                reportId: null, reportLink: null
            }
            createAFile('application/vnd.google-apps.document', 'text/html', name + "rand1", 
                'webViewLink, webContentLink', {gamegrade: '80'})
            .then(r => {
                console.log(`create file result`, r);
                results.reportId = r.result.id;
                results.reportLink = r.result.webViewLink;
                return editFile(r.result.id, structureBody(elements));
            })
            .then(ef => {
                console.log(`edit file result`, ef);
                this.setState({
                    toast: <Toast message={`report created`} id={this.state.tools.utils.ids.guid()} />
                })
                resolve(results);
            })
            .catch(e => {
                console.log(`createReport error`, e);
                if(e.status === 401 && e.result.error){
                    //login required
                    this.setState({
                        toast: <Toast message={`error: ${e.result.error.message}`} id={this.state.tools.utils.ids.guid()} />
                    })
                }
                reject(e);
            })
        });
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
    renderCourseWork(){
        if(this.state.courseWorks){
            return this.state.courseWorks.map(c => {
                return <button onClick={() => {
                    this.submitAssignment(c.courseId, c.id);
            }}>Coursework {c.title}</button>
            })
        }
        return null;
    }
    renderCourses(){
        //can only create coursework from teacher account, not student account
        if(this.state.courses){
            return this.state.courses.map(c => {
                return <button onClick={() => {
                    this.submitAssignment(c.id);
                    // createAssignment(c.id, this.props.gamename + " assignment2")
                    // .then(r => {
                    //     console.log(`createAssignment create coursework result`, r);
                    //     this.setState({
                    //         courseWorkId: r.result.courseWorkId, courses: null
                    //     })
                    // })
                    // .catch(e => {
                    //     console.log(`createAssignment create coursework error`, e);
                    //     this.setState({
                    //         courses: null
                    //     })
                    // })
            }}>Course {c.name}: {c.description}</button>
            })
        }
        return null;
    }
    renderSubmissions(){
        //TODO render submissions, get submission ID, set grade and attachments
    }
    //handles saving a report to the cloud
    render(){
        if(this.areToolsReady()){
            return(
                <div style={{width: '100%', height: '100%'}}>
                    <this.props.game tools={this.state.tools} />
                    {this.state.toast}
                </div>
            )
        }else{
            return <div>
                <p>loading tools...</p>
                <button onClick={()=>{this.submitAssignment()}}>submit assignment</button>
                <div>
                    {this.renderCourses()}
                    -------------------------
                    {this.renderCourseWork()}
                </div>
                {this.state.toast}
                {/* <button onClick={()=>{
                    console.log(`Toast parent state`, this.state);
                    let counter = this.state.counter;
                    if(!counter) counter = 1;
                    this.setState({
                    message: `hello ${this.state.counter}`,
                    counter: counter+1
                })}}>display toast</button>
                <Toast message={this.state.message} /> */}
            </div>
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