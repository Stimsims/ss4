import React from 'react';
import styled from 'styled-components';

class Footer extends React.Component{
    render(){
        return(
            <Footer>Footer</Footer>
        )
    }
}

const Footer = styled.div`
    position: fixed;
    height: 30px;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: red;
    color: white;
    text-align: center;
`