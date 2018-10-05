//a modal that gets the course and assignment information
import React from 'react';
import Modal from './../UI/elements/Modal.jsx';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {listFilesByAppProp, getFile, listFilesByName, exportFile, 
    createReport, createAFile, editFile, structureBody} from './../apis/DriveInterface.js';
import {submitAssignment, gradeAssignment, turnInAssignment, createAssignment, 
    createCourse, listCourses, listCourseWork, listSubmissions} from './../apis/ClassInterface.js';

export default class Submit extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }
    componentDidUpdate(prevProps){
        //document identified by id
        //if the id changes, reset the state to not open
        let id1 = this.props.document?this.props.document.id:null;
        let id2 = prevProps.document?prevProps.document.id:null;
        if(id1 && id1 !== id2){
            this.setState({
                open: false
            })
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
                createReport('submit1', 'submitname', [
                    {tag: 'h1', text: 'Defered promise', textDecoration: 'underline', textAlign: 'center', fontStyle: 'bold'}
                ])
                .then(r => {
                    console.log(`defere promise resolved, report results`, r);
                    results = {...results, ...r};
                    //attach to submission, turn in

                })
                .catch(e => {
                    console.warn(`failed to create report and submit assignment`, e);
                })
            }else{
                console.warn(`submitAssignment some weird combo of params happened with submit assignment courseId: ${courseId} courseWorkId: ${courseWorkId}`)
            }
        }catch(e){
            console.log(`submitAssignment failed, error `, e);
        }
        
    }
    renderCourseWork(){
        //I0_1538696432802
        if(this.state.courseWorkId){
            return <p>assignment: {this.state.courseWorkId}</p>
        }else if(this.state.courseWorks){
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
        if(this.state.courseId){
            return <p>course: {this.state.courseId}</p>
        }else if(this.state.courses){
            return this.state.courses.map(c => {
                return <button onClick={() => {
                    this.submitAssignment(c.id);
            }}>Course {c.name}: {c.description}</button>
            })
        }
        return null;
    }
    renderSubmissions(){
        //TODO render submissions, get submission ID, set grade and attachments
    }
    renderForm(){
        if(this.state.open){
            return <button onClick={()=>{
                this.setState({
                    open: true
                })
                this.submitAssignment();
            }}>submit assignment</button>
        }else{
            return (
                <div>
                    {this.renderCourses()}
                    -------------------------
                    {this.renderCourseWork()}
                </div>
            )
        }
    }
    render(){
    
        if(this.props.document){
            return <Mod>
                {this.renderForm()}
            </Mod>
        }else{
            return null;
        }
    }
}

const Mod = styled.div`
    background-color: red;
    position: absolute;
    z-index: 1000;
    bottom: 10px;
    right: 10px;
    width: 200px;
    height: auto;
`
