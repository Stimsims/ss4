import React from 'react';
import styled from 'styled-components';
import * as MyLog from 'MyLog';
import PropTypes from 'prop-types';

export default class Wig extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Wiggle>
                    {this.props.children}
            </Wiggle>
        )
    }
}
Wig.displayName='Wiggle';
const Wiggle = styled.div`
    display: inline-block;
    background-color: red;
    transition: all 2s ease;
    animation: shake 0.82s cubic-bezier(.36,.07,.19,.97);
    animation-delay: 2s;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
    @keyframes shake {
        10%, 90% {
          transform: translate3d(-1px, 0, 0);
        }
        
        20%, 80% {
          transform: translate3d(2px, 0, 0);
        }
      
        30%, 50%, 70% {
          transform: translate3d(-4px, 0, 0);
        }
      
        40%, 60% {
          transform: translate3d(4px, 0, 0);
        }
      }

`