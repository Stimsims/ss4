import React from 'react';
import styled from 'styled-components';

export default class Text extends React.Component{
    render(){
        switch(this.props.tag){
            case 'h1':
                return <Wrapper align={this.props.align} size={this.props.size} display={this.props.display} color={this.props.color} colorKey={this.props.colorKey}><h1>{this.props.text}</h1></Wrapper>
            case 'h2':
                return <Wrapper align={this.props.align} size={this.props.size} display={this.props.display} color={this.props.color} colorKey={this.props.colorKey}><h2>{this.props.text}</h2></Wrapper>
            case 'h3':
                return <Wrapper align={this.props.align} size={this.props.size} display={this.props.display} color={this.props.color} colorKey={this.props.colorKey}><h3>{this.props.text}</h3></Wrapper>
            case 'h4':
                return <Wrapper align={this.props.align} size={this.props.size} display={this.props.display} color={this.props.color} colorKey={this.props.colorKey}><h4>{this.props.text}</h4></Wrapper>
            case 'h5':
                return <Wrapper align={this.props.align} size={this.props.size} display={this.props.display} color={this.props.color} colorKey={this.props.colorKey}><h5>{this.props.text}</h5></Wrapper>
            case 'h6':
                return <Wrapper align={this.props.align} size={this.props.size} display={this.props.display} color={this.props.color} colorKey={this.props.colorKey}><h6>{this.props.text}</h6></Wrapper>
            default:
                return <Wrapper align={this.props.align} size={this.props.size} display={this.props.display} color={this.props.color} colorKey={this.props.colorKey}><p>{this.props.text}</p></Wrapper>
        }
    }
}

const Wrapper = styled.span`
    display: ${props => props.display?props.display:'inline-block'};
    margin: auto;
    h1, h2, h3, h4, h5, h6, p{
        display: ${props => props.display?props.display:'inline-block'};
        text-align: ${props => props.align?props.align:'center'};
        color: ${props => {
            if(props.color){
                return props.color;
            }else if(props.colorKey){
                return props.theme[props.theme.theme][props.colorKey];
            }else{
                return props.theme[props.theme.theme].text;
            }
        }};
        font-size: ${props => props.size? props.size:'1em'};
    }
`