import React from 'react';
import styled from 'styled-components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import MyLog from 'MyLog';
import PropTypes from 'prop-types';

const calcTime = (offset = 0, duration = 0, childDelay = 0, childLength = 0) => {
    let time = offset + duration + childDelay*childLength;
    // MyLog('log', `Slidedown offset ${offset} duration ${duration} delay ${childDelay} 
    // child length ${childLength} time ${time}`);
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
            <Slide right={this.props.right} offset={this.props.offset} duration={this.props.duration} childDelay={this.props.childDelay} 
                    childLength={this.props.children.length+1}>
                <ReactCSSTransitionGroup
                    transitionName="slide-side"
                    transitionAppear={true}
                    transitionEnter={true}
                    transitionLeave={true}
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
    padding: 0;
    margin: 0;
    span{
        display: inline-block;
        width:100%;
        padding: 0; margin: 0;
    }

    span .slide-side-enter{
        transform: translate(${props=>props.right?'1000px':'-1000px'}, 0px);
       
    }
    span .slide-side-enter-active{
        transform: translate(0px, 0px);
        transition-property: all;
        transition-timing-function: ease-out;
        transition-duration: ${props => props.duration}ms;
    }

    span .slide-side-appear{
        transform: translate(${props=>props.right?'1000px':'-1000px'}, 0px);
        opacity: 0;
    }
    span .slide-side-appear-active{
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
            //console.log("nth child " + val);
            return val;
        }}
    }

    span .slide-side-leave{
        transform: translate(0px, 0px);
    }
    span .slide-side-leave-active{
        transition-property: all;
        transition-timing-function: ease-out;
        transition-duration: ${props => props.duration}ms;
        transform: translate(${props=>props.right?'1000px':'-1000px'}, 0px);
    }

`
