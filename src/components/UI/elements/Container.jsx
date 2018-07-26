import React from 'react'
import styled from "styled-components";
import colors from './../Colors.js';

class UiBg extends React.Component{
    constructor(props){
        super(props);
        //if fill is true, fills 100% of space
        //takes zindex as a prop, defaults to 1
        //overflow property as prop, defaults to scroll
      //  console.log("Container UI constructor props", props);
    }
    render(){
       // console.log("rendering game a");
       if(this.props.fixed){
        return (
            <Bg z={this.props.z} colorKey={this.props.colorKey} color={this.props.color} width={this.props.width} height={this.props.height}
                padding={this.props.padding} margin={this.props.margin} overflow={this.props.overflow}>
                {this.props.children}
            </Bg>
        )  
       }else{
        return (
            <Box z={this.props.z} colorKey={this.props.colorKey}  height={this.props.height} color={this.props.color} width={this.props.width} 
                padding={this.props.padding} margin={this.props.margin} overflow={this.props.overflow}>
                {this.props.children}
            </Box>
        )  
       }
                   

    }
}

export default UiBg;


const Bg = styled.div`
    position:fixed;
    top: 0;
    left:0;
    bottom:0;
    right:0;
    width: 100vw;
    height: 100vh;
    width: ${props => props.width? props.width:'inherit'};
    margin: ${props => props.margin? props.margin:'0 0 0 0'};
    padding: ${props => props.padding? props.padding:'0 0 0 0'};
    z-index: ${props => props.z? props.z:1};
    overflow: ${props => props.overflow? props.overflow:'scroll-y'}
    background-color: ${props => {
        if(props.color){
            return props.color;
        }else if(props.colorKey){
            return props.theme[props.theme.theme][props.colorKey]
        }else{
            return props.theme[props.theme.theme].neutral
        }
        //props.color? props.color:props.theme[props.theme.theme].neutral
    }}
`
const Box = styled.div`
    position: relative;
    width: ${props => props.width? props.width:'100%'};
    margin: ${props => props.margin? props.margin:'0 0 0 0'};
    height: ${props => props.height? props.height:'100%'};
    padding: ${props => props.padding? props.padding:'0 0 0 0'};
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

//background-color: #330033;
//lime #C6FF00   green #B2FF59   yellow #FFEB3B
//dark blue #1A237E   dark cyan  #006064

/*
const PostBox = styled.div`
  width: 50%;
  background-color: rgb(255,255,255,0.5);
  margin-top: 100px;
  margin-left: 55px;
`
*/