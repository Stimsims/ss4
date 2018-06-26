import React from 'react'
import styled from "styled-components";
import colors from './../Colors.js';

class UiBg extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
       // console.log("rendering game a");
        return (
            <Bg className="bg">
                {this.props.children}
            </Bg>
        )                     

    }
}

export default UiBg;


const Bg = styled.div`
  position:fixed;
  top:0;
  left:0;
  bottom:0;
  right:0;
  background: linear-gradient(${colors.pDark}, ${colors.p});
  z-index: -999999;
  overflow:hidden;
`

//background-color: #330033;
//lime #C6FF00   green #B2FF59   yellow #FFEB3B
//dark blue #1A237E   dark cyan  #006064