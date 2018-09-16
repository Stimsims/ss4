import React from 'react';
import styled from 'styled-components';

export default class Textbox extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Box width={this.props.width} padding={this.props.padding} index={this.props.index}>
                {this.props.children}
            </Box>
        )
    }
}

const Box = styled.div`
    position: relative;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.8);
    transition: 0.3s;
    border-radius: 5px;
    background-color ${props=> {
        let i = props.index % props.theme[props.theme.theme].bgCount;
        console.log(`bg color index ${props.index} count ${props.theme[props.theme.theme].bgCount} i ${i}`);
        switch(i){
            case 1:
                return props.theme[props.theme.theme].bg2;
            case 2:
                return props.theme[props.theme.theme].bg3;
            case 3:
                return props.theme[props.theme.theme].bg4;
            case 4:
                return props.theme[props.theme.theme].bg5;
            case 5:
                return props.theme[props.theme.theme].bg6;
            case 0:
            default:
                return props.theme[props.theme.theme].bg1;
        }
    }};
    width: ${props=>props.width?props.width:'100%'};
    margin: 10px 0px;
    padding: ${props=>props.padding?props.padding:'10px'};
    @media only screen and (min-width: ${props => props.theme[props.theme.theme].mediaMinWidth}) {
        padding: ${props=>props.padding?props.padding:'10px 20px'};
    }
`