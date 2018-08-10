import React from 'react';
import styled from 'styled-components';

export default class Text extends React.Component{
    wrapText(text){
        return <Wrapper position={this.props.position} padding={this.props.padding} margin={this.props.margin} zIndex={this.props.zIndex}
                    align={this.props.align} size={this.props.size} height={this.props.height} width={this.props.width}
                    display={this.props.display} color={this.props.color} colorKey={this.props.colorKey}>
                        {text}
                </Wrapper>
    }
    render(){
        switch(this.props.tag){
            case 'h1':
                return this.wrapText(<h1>{this.props.text}</h1>);
            case 'h2':
                return this.wrapText(<h2>{this.props.text}</h2>);
            case 'h3':
                return this.wrapText(<h3>{this.props.text}</h3>);
            case 'h4':
                return this.wrapText(<h4>{this.props.text}</h4>);
            case 'h5':
                return this.wrapText(<h5>{this.props.text}</h5>);
            case 'h6':
                return this.wrapText(<h6>{this.props.text}</h6>);
            default:
                return this.wrapText(<p>{this.props.text}</p>);
        }
    }
}

const Wrapper = styled.span`
    display: ${props => props.display?props.display:'inline-block'};
    position: ${props => props.position? props.position: 'static'};
    height: ${props => props.height? props.height: 'auto'};
    width: ${props => props.width? props.width: 'auto'};
    text-align: ${props => props.align?props.align:'center'};
    margin: 0;
    z-index: ${props => props.zIndex?props.zIndex: '1'};
    h1, h2, h3, h4, h5, h6, p{
        margin: 0;
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
        padding: ${props => props.padding? props.padding: '5px'};
        font-size: ${props => props.size? props.size:'1em'};
        @media only screen and (min-width: ${props => props.theme[props.theme.theme].mediaMinWidth}) {
            padding: 10px;
        }
    }
`