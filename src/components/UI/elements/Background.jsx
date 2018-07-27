import React from 'react'
import styled from "styled-components";

class UiBg extends React.Component{
    constructor(props){
        super(props);
        //if fill is true, fills 100% of space
        //takes zindex as a prop, defaults to 1
        //overflow property as prop, defaults to scroll
      //  console.log("Container UI constructor props", props);
    }
    render(){
        return (
            <Bg z={this.props.z} colorKey={this.props.colorKey} color={this.props.color} fixed={this.props.fixed}
                padding={this.props.padding} overflow={this.props.overflow} display={this.props.display}
                top={this.props.top} bottom={this.props.bottom} left={this.props.left} right={this.props.right}>
                {this.props.children}
            </Bg>
        ) 
    }
}

export default UiBg;


const Bg = styled.div`
    position: ${props => props.fixed? 'fixed': 'absolute'};
    display: ${props => props.display? props.display: 'block'};
    top: 0;
    left:0;
    bottom:0;
    right:0;
    margin: 0;
    width: ${props => props.width? props.width:'inherit'};
    height: ${props => props.height? props.height:'inherit'};
    padding: ${props => props.padding? props.padding:'0 0 0 0'};
    z-index: ${props => props.z? props.z:-999};
    background-color: ${props => {
        if(props.color){
            return props.color;
        }else if(props.colorKey){
            return props.theme[props.theme.theme][props.colorKey]
        }else{
            return props.theme[props.theme.theme].neutral
        }
    }}
`