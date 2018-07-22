import React from 'react'
import styled from "styled-components";
import colors from './../Colors.js';

class UiBg extends React.Component{
    constructor(props){
        super(props);
        //if fill is true, fills 100% of space
        //takes zindex as a prop, defaults to 1
        //overflow property as prop, defaults to scroll
        console.log("Container UI constructor props", props);
        // let view = null;
        // if(!props.fill){
        //     view = styled.div`
        //         width: ${props => props.width? props.width:'100%'};
        //         margin: ${props => props.margin? props.margin:'0 0 0 0'}
        //         background-color: ${props => props.color? props.color:props.theme[props.theme.theme].neutral}
        //     `
        // }else{
        //     view = styled.div`
        //         position:fixed;
        //         top: 0;
        //         left:0;
        //         bottom:0;
        //         right:0;
        //         width: ${props => props.width? props.width:'inherit'};
        //         margin: ${props => props.margin? props.margin:'0 0 0 0'}
        //         z-index: ${props => props.z? props.z:1};
        //         overflow: ${props => props.overflow? props.overflow:'scroll-y'}
        //         background-color: ${props => props.color? props.color:props.theme[props.theme.theme].neutral}
        //     `
                
        // }
        // this.state = {
        //     view
        // }
    }
    render(){
       // console.log("rendering game a");
       if(this.props.fill){
        return (
            <Bg z={this.props.z} color={this.props.color} width={this.props.width} 
                margin={this.props.margin} overflow={this.props.overflow}>
                {this.props.children}
            </Bg>
        )  
       }else{
        return (
            <Box z={this.props.z} color={this.props.color} width={this.props.width} 
                margin={this.props.margin} overflow={this.props.overflow}>
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
    width: ${props => props.width? props.width:'inherit'};
    margin: ${props => props.margin? props.margin:'0 0 0 0'}
    z-index: ${props => props.z? props.z:1};
    overflow: ${props => props.overflow? props.overflow:'scroll-y'}
    background-color: ${props => props.color? props.color:props.theme[props.theme.theme].neutral}
`
const Box = styled.div`
    width: ${props => props.width? props.width:'100%'};
    margin: ${props => props.margin? props.margin:'0 0 0 0'}
    background-color: ${props => props.color? props.color:props.theme[props.theme.theme].neutral}
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