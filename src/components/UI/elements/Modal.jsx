import React from 'react'; //modes - centered
import styled from 'styled-components';
import Wiggle from './../animations/Wiggle.jsx';
import SlideSide from './../animations/SlideSide.jsx';

export default class Modal extends React.Component{

    render(){
        return(
            // <SlideSide  offset={0} duration={1000} childDelay={150}>
                <Discrete>
                    <Wiggle>
                        <Mod>
                            {this.props.children}
                        </Mod>
                    </Wiggle>
                </Discrete>
            // </SlideSide>
        )
    }
}

const Mod = styled.div`  
    background-color: blue;
    
`

const Discrete = styled.div`
    background-color: red;
    position: absolute;
    z-index: 1000;
    bottom: 10px;
    right: 10px;
    width: 200px;
    height: auto;
`
