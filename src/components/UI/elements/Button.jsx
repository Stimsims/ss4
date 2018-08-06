import React from 'react';
import styled from 'styled-components';

class Button extends React.Component{
    constructor(props){
        super(props);
        this.handleInput = this.handleInput.bind(this);
    }
    handleInput(e){
        //fire event if available
        //pass input up to parents
        this.props.onInput(e);
     //   console.log("button clicked");
    }
    render(){
        return(
            <Btn onClick={this.handleInput}>{this.props.children}</Btn>
        )
    }
}

export default Button;

const Btn = styled.button`
    padding: 10px;
    color: white;
    background-color: ${props=>props.theme[props.theme.theme].accent};
    border-radius: 5px;
    outline: 0;
    border: 0;
    text-decoration: none;
    display: inline-block;
    transition: all 0.3s ease;
    a{
        color: white !important;
    }
    &:hover{
        background-color: ${props=>props.theme[props.theme.theme].accentD};
    }
`