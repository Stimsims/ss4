import React from 'react';

export default class Choice extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.props.onChoice(this.props.id);
    }
    render(){
        return(
            <button>{this.props.text}</button>
        )
    }
}