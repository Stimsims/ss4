import React from 'react';
import styled from 'styled-components';
import Text from './../Text.jsx';
import PropTypes from 'prop-types';

export default class Score extends React.PureComponent{
    getScore(score){
        
        try{
            let res = 0;
            if(typeof score === 'string'){
                //convert to number, check if is number
                let str = parseFloat(score);
                res= str*100;
            }else if(typeof score === 'number'){
                res= score*100;
            }else{
                throw new Error(`score must be either a string or a number ${score}`)
            }
            console.log(`score getScore ${score} typeof ${typeof score} res ${res}`);
            return res;
        }catch(e){
            console.warn(`error converting score`, e);
            return 0;
        }
    }
    render(){
        return(
            <div style={{width: '100%', padding: '10px'}}>
                <Text tag={'h3'} text={this.props.title} align={'left'} colorKey={'accent'} padding={'0'} width={'100%'}/>
                {this.props.desc? <Text tag={'p'} text={this.props.desc} align={'left'}  padding={'5px 0px'} colorKey={'accent'} width={'100%'}/>:null}
                <ScoreBar >
                    <Bar score={this.getScore(this.props.score)}/>
                </ScoreBar>
            </div>
        )
    }
}

Score.propTypes = {
    title: PropTypes.string,
    score: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
}
const Bar = styled.div`
    width: 0%;
    height: 100%;
    background-color: pink;
    animation-name: fill${props=>props.score?props.score:''};
    animation-duration: ${props=>props.score?props.score*0.05:'1'}s;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;
    @keyframes fill${props=>props.score?props.score:''}{
        from {width: 0%;}
        to {width: ${
            props=>{
                console.log(`score bar props`, props);
                return props.score?props.score:0;
            }}%;}
    }
`
const ScoreBar = styled.div`
    width: 100%;
    background-color: grey;
    height: 20px;
    padding: 2px 0px;
`