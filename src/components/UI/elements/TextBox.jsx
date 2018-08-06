import React from 'react';
import styled from 'styled-components';

export default class Textbox extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Box index={this.props.index}>
                {this.props.children}
            </Box>
        )
    }
}

const Box = styled.div`
    position: relative;
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
    padding: 0px;
    width: 100%;
    margin: 10px 0px;
    @media only screen and (min-width: ${props => props.theme[props.theme.theme].mediaMinWidth}) {
        padding: 10px;
    }
`