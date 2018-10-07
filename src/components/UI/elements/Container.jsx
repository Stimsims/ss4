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
       // console.log("rendering game a");
       return (
        <Box z={this.props.z} colorKey={this.props.colorKey}  height={this.props.height} 
            color={this.props.color} width={this.props.width} 
            padding={this.props.padding} flex={this.props.flex} margin={this.props.margin} 
            overflow={this.props.overflow} display={this.props.display}>
            {this.props.children}
        </Box>
        )       

    }
}

export default UiBg;

const Box = styled.div`
    position: ${props => props.position? props.position: 'relative'};
    display: ${props => props.display? props.display: 'block'};
    width: ${props => props.width? props.width:'inherit'};
    margin: ${props => props.margin? props.margin:'0 0 0 0'};
    height: ${props => props.height? props.height:'inherit'};
    z-index:${props => props.z? props.z: '1'};
    padding: ${props => props.padding? props.padding:'0 0 0 0'};
    background-color: ${props => {
        if(props.color){
            return props.color;
        }else if(props.colorKey){
            return props.theme[props.colorKey]
        }else{
            return props.theme.neutral
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