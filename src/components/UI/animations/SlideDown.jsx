import React from 'react';
import styled from 'styled-components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import MyLog from 'MyLog';
import PropTypes from 'prop-types';

const calcTime = (offset = 0, duration = 0, childDelay = 0, childLength = 0) => {
    let time = offset + duration + childDelay*childLength;
    MyLog('log', `Slidedown offset ${offset} duration ${duration} delay ${childDelay} 
    child length ${childLength} time ${time}`);
    return time > 0? time:1000;
}
export default class SlideDown extends React.Component{
    constructor(props){
        super(props);
        // let offset = props.offset? props.offset:0;
        // let duration = props.duration? props.duration:0;
        // let childDelay = props.childDelay? props.childDelay:0;
        //validate input ranges
        //let time = offset + duration + childDelay*this.props.children.length;
        let time = calcTime(props.offset, props.duration, props.childDelay, props.children.length+1);
        
        this.state={
            time
        }
    }
    render(){
        return (
            <Slide offset={this.props.offset} duration={this.props.duration} childDelay={this.props.childDelay} 
                    childLength={this.props.children.length+1}>
                <ReactCSSTransitionGroup
                    transitionName="slide-down"
                    transitionAppear={true}
                    transitionEnter={true}
                    transitionAppearTimeout={this.state.time}
                    transitionEnterTimeout={this.state.time}
                    transitionLeaveTimeout={this.state.time}
                    >
                    {this.props.children}
                </ReactCSSTransitionGroup>
            </Slide>
        )
    }
}
SlideDown.displayName='SlideDown';

SlideDown.PropTypes = {
    offset: PropTypes.number,
    duration: PropTypes.number,
    childDelay: PropTypes.number
}

const Slide = styled.div`
    span div {
        opacity: 1;
    }
    span{
        display: inline-block;
        width:100%;
    }

    span .slide-down-enter{
        transform: translate(0px, -1000px);
        background-color:green;
    }
    span .slide-down-enter-active{
        transform: translate(0px, 0px);
        background-color: orange !important;
    }

    span .slide-down-appear{
        transform: translate(0px, -1000px);
        opacity: 0;
    }
    span .slide-down-appear-active{
        transform: translate(0px, 0px);
        opacity: 1;
        transition-property: all;
        transition-timing-function: ease-out;
        transition-duration: ${props => props.duration}ms;
        ${props => {
            let val = ``;
            for(let i = 1; i<=props.childLength; i++){
                val += `&:nth-child(${i}){
                    transition-delay: ${props.childDelay*i}ms;
                }`;
            }
            console.log("nth child " + val);
            return val;
        }}
    }

    span .slide-down-leave{
        transform: translate(0px, 0px);
    }
    span .slide-down-leave-active{
        transform: translate(0px, -1000px);
    }

`

/*
transition-property: all;
        transition-duration: ${props => calcTime(props.offset, props.duration, props.childDelay, props.childLength)}ms;

    span .slide-down-appear-active{
        transform: translate(0px, 0px);
        background-color: blue;
        transition: all  ${props => calcTime(props.offset, props.duration, props.childDelay, props.childLength)}ms;
    }


    ${props => {
        let val = ``;
        for(let i = 0; i<2; i++){
            val += `span div:nth-child(${i}){
                transition-delay: ${props.childDelay*i}ms;
            }`;
            console.log("nth child " + val);
            
        }
        return val;
    }}

    span .slide-down-enter{
        transform: translate(0px, -1000px);
        background-color: red !important;
    }
    span .slide-down-enter-active{
        transform: translate(0px, 0px);
        background-color: blue !important;
    }
*/