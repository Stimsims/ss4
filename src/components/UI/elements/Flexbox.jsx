import React from 'react';
import styled from 'styled-components';

export default class Flex extends React.Component{
    render(){
        return <Box height={this.props.height} width={this.props.width} 
                direction={this.props.direction}>
                {this.props.children}
            </Box>
    }
}

const Box = styled.div`
    width: ${props => props.width? props.width:'inherit'}
    height: ${props => props.height? props.height:'inherit'}
    display: flex;
    flex-direction: ${props => props.direction? props.direction:'row'}
`