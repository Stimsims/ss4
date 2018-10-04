//a modal that gets the course and assignment information
import React from 'react';
import Modal from './../UI/elements/Modal.jsx';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {listFilesByAppProp, getFile, listFilesByName, exportFile, 
    createReport, createAFile, editFile, structureBody} from './../apis/DriveInterface.js';
import {submitAssignment, gradeAssignment, turnInAssignment, createAssignment, 
    createCourse, listCourses, listCourseWork, listSubmissions} from './../apis/ClassInterface.js';

class Submit extends React.Component{
    render(){
        return (
            <p>Submit</p>
        )
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
