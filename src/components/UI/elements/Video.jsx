import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from './Text.jsx';

export default class Youtube extends React.PureComponent{
    constructor(props){
        super(props);
        let scale = props.scale?props.scale:1;
        // this.state = {
        //     scale,
        //     position: props.position? props.position:'right',
        //     width: props.vWidth?props.vWidth + 'px': 336*scale + 'px',
        //     height: props.vHeight?props.vHeight + 'px':189*scale+'px'
        // }
        this.state = {
            ...this.getHeights(scale)
        }
        console.log("Youtube view", props);
        console.log(`youtube view props dimen: ${props.vWidth}, ${props.vHeight} scale ${scale} 
                    state ${this.state.width}, ${this.state.height}`);
    }
    getHeights(scale){
        return {
            scale,
            position: this.props.position? this.props.position:'right',
            width: this.props.vWidth?this.props.vWidth*scale + 'px': 336*scale + 'px',
            height: this.props.vHeight?this.props.vHeight*scale + 'px':189*scale+'px'
        }
    }
    componentDidUpdate(prevProps, prevState){
        if(prevProps.scale !== this.props.scale){
            console.log("componentDidupdate updating scale to " + this.props.scale);
            this.setState(this.getHeights(this.props.scale))
        }
    }
    renderText(text, draw){
        if(text && draw){
            return <Item>
                <Text tag={'p'} text={text} />
                {/* <p>text text text text text text text text text text text text text text text text text text </p> */}
            </Item>
        }
    }
    render(){
        //the position refers to the video position
        return (
            <Flex width={this.props.width}>
                {this.renderText(this.props.text, this.state.position === 'left')}
                <Centered height={this.state.height}>
                    <iframe width={`${this.state.width}`} 
                    height={`${this.state.height}`}
                    src={`${this.props.url}`} 
                    frameborder="0" allow="autoplay; encrypted-media" 
                    allowfullscreen></iframe>
                </Centered>
                {this.renderText(this.props.text, this.state.position === 'right')}
            </Flex>
        )
    }
}
Youtube.propTypes = {
    url: PropTypes.string
}

/*
                <iframe width="336" height="189" 
                src={`https://www.youtube.com/embed/3QvlxoX1GjI?start=730&end=735`} 
                frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
*/
const Flex = styled.div`
    display: flex;
    margin: auto;
    width: ${props=>props.width}; 
    height: 100%;
    justify-content: center;
    flex-direction: column;
    @media only screen and (min-width: ${props => props.theme[props.theme.theme].mediaMinWidth}) {
        flex-direction: row;
    }
`
const Centered = styled.div`
    margin: auto;
    height: ${props=>props.height};
    width: ${props=>props.width};
`
const Item = styled.div`
    margin: auto;
    width: 100%;
    flex: 1;
`
const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-color: blue;
    
`
const Video = styled.div`
    position:absolute; 
    height: 100%;
    top:0; right:0; bottom:0;
    left: 50%;
    background-color: green;
`

// const Video = styled.div`
//     position:absolute; 
//     transform:translate(-50%,-50%); 
//     top:50%; left:50%; 
//     margin: auto; 
//     background-color: green;
// `

/*
            <Wrapper height={this.props.height} width={this.props.width}>
                <Video >
                    <span style={{position: 'relative', height: '100%', display:'inline-block', transform: 'translateX(-50%)',backgroundColor: 'yellow', margin: 'auto'}}>
                        <iframe width={`${this.props.vWidth?this.props.vWidth:'336px'}`} 
                        height={`${this.props.vHeight?this.props.vHeight:'189px'}`}
                        src={`${this.props.url}`} 
                        frameborder="0" allow="autoplay; encrypted-media" 
                        allowfullscreen></iframe>
                    </span>
                </Video>
            </Wrapper>
const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-color: blue;
    
`
const Video = styled.div`
    position:absolute; 
    height: 100%;
    top:0; right:0; bottom:0;
    left: 50%;
    background-color: green;
`







const Video = styled.div`
    position:absolute; 
    top:0; left: 0; right:0; bottom:0;
    left: 50%;
    background-color: green;
`


    width: ${props=>props.width?props.width:'100%'};
    height: ${props=>props.height?props.height:'300px'};
*/