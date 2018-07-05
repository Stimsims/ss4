import React from 'react';
import { bindActionCreators } from 'redux';

export default class Button extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        let o = {
            kId: this.props.kId,
            vId: this.props.vId
        };
        console.log('button input');
        console.log(o);
        this.props.onInput(o);
    }
    render(){
        if(this.props.disabled){
            return(
                <button onClick={this.handleClick} disabled> {this.props.text}</button>
            )
        }else{
            return(
                <button onClick={this.handleClick}> {this.props.text}</button>
            )
        }

    }
}