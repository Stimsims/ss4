import React from 'react';
import styled from 'styled-components';

export default class Text extends React.Component{
    wrapText(text){
        return <Wrapper lineHeight={this.props.lineHeight} position={this.props.position} padding={this.props.padding} 
                    margin={this.props.margin} zIndex={this.props.zIndex}
                    align={this.props.align} size={this.props.size} height={this.props.height} width={this.props.width}
                    display={this.props.display} color={this.props.color} colorKey={this.props.colorKey}>
                        {text}
                </Wrapper>
    }
    render(){
        switch(this.props.tag){
            case 'h1':
                return this.wrapText(<h1 className={'my-text'}>{this.props.text}</h1>);
            case 'h2':
                return this.wrapText(<h2 className={'my-text'}>{this.props.text}</h2>);
            case 'h3':
                return this.wrapText(<h3 className={'my-text'}>{this.props.text}</h3>);
            case 'h4':
                return this.wrapText(<h4 className={'my-text'}>{this.props.text}</h4>);
            case 'h5':
                return this.wrapText(<h5 className={'my-text'}>{this.props.text}</h5>);
            case 'h6':
                return this.wrapText(<h6 className={'my-text'}>{this.props.text}</h6>);
            default:
                return this.wrapText(<p className={'my-text'}>{this.props.text}</p>);
        }
    }
}

const Wrapper = styled.span`

    .my-text{
        margin: 0;
        display: ${props => props.display?props.display:'inline-block'};
        position: ${props => props.position? props.position: 'static'};
    
        margin: 0;
        z-index: ${props => props.zIndex?props.zIndex: '1'};
        height: ${props => props.height? props.height: 'auto'};
        width: ${props => props.width? props.width: 'auto'};
        text-align: ${props => props.align?props.align:'center'};
        line-height: ${props=>props.lineHeight?props.lineHeight:'normal'};
        display: ${props => props.display?props.display:'inline-block'};
        text-align: ${props => props.align?props.align:'center'};
        color: ${props => {
           // return 'pink';
            if(props.color){
                return props.color;
            }else if(props.colorKey){
                return props.theme[props.theme.theme][props.colorKey];
            }else{
                return props.theme[props.theme.theme].text;
            }
        }};
        padding: ${props => props.padding? props.padding: '5px'};
        
        @media only screen and (min-width: ${props => props.theme[props.theme.theme].mediaMinWidth}) {
            padding: ${props => props.padding? props.padding: '10px'};
        }
    }
`
//font-size: ${props => props.size? props.size:'1em'};