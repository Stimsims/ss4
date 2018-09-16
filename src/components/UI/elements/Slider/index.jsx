import React from 'react';
import Slider, { Range } from 'rc-slider';
// We can just import Slider or Range to reduce bundle size
// import Slider from 'rc-slider/lib/Slider';
// import Range from 'rc-slider/lib/Range';
import 'rc-slider/assets/index.css';
import styled from 'styled-components';

class Input extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        // this.state = {
        //     value: 50
        // }
    }
    handleChange(value){
        console.log('Slider input handleChange ', value);
        // this.setState({
        //     value
        // })
        this.props.onInput(this.props.id, value);
    }
    render(){
        return <Flex>
            <Left><p style={{display:'inline', lineHeight: '36px', paddingRight: '10px'}}>{this.props.label}</p></Left>
            <Right><Slider min={0} max={100} defaultValue={this.props.value} onAfterChange={this.handleChange}/></Right>
        {/* <Range  count={1} value={[50]} onChange={this.handleChange}/> */}
      </Flex>
    }
}
Input.displayName='Slider';
export default Input;

const Flex = styled.div`
    display: flex;
    height:36px;
    display: column;
    align-items: center;
`
const Left = styled.div`
    align-self: flex-start;
`
const Right = styled.div`
    flex: 1;
    align-self: flex-end;
    top:50%;
    transform: translateY(-50%);
`