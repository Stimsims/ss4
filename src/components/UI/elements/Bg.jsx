import React from 'react'
import styled from "styled-components";

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
  background-color: #330033;
  z-index: -999999;
  display: flex;
  overflow:hidden;
  padding-top: 10px;
  div{
      flex:1;
  }
`

//background-color: #330033;