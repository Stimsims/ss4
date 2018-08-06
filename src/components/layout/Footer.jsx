import React from 'react';
import styled from 'styled-components';

export default class Footer extends React.Component{
    render(){
        return(
            <Foot onMouseOver={()=>{console.log('footer ghover')}}>Footer</Foot>
        )
    }
}

const Foot = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: red;
    color: white;
    text-align: center;
    z-index: 999;
`