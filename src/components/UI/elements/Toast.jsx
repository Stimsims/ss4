import React from 'react'; //modes - centered
import styled from 'styled-components';
import FadeIn from './../animations/FadeIn';
import PropTypes from 'prop-types';

export default class Toast extends React.Component{
    constructor(props){
        super(props);
        this.showMessage = this.showMessage.bind(this);
        this.state = {};
    }
    componentDidMount(){
        this.showMessage(this.props.message);
    }
    componentDidUpdate(prevProps){
        if(prevProps.message !== this.props.message || prevProps.id !== this.props.id){
            this.showMessage(this.props.message);
        }
    }
    showMessage(message){
            let timeout = setTimeout(
            (()=>{
                console.log(`Toast timeout called ${timeout} state timeout ${this.state.timeout}`);
                if(timeout === this.state.timeout){
                    this.setState({
                        timeout: null
                    })
                }
            }).bind(this), 5000);
            this.setState({
                timeout,
                message
            })
    }
    renderMessage(){
        if(this.state.timeout){
            return (
                <Mod>
                    <p>{this.state.message}</p>
                </Mod>
            )
        }
        return null;
    }
    render(){
        console.log(`Toast rendering`, this.state);
        return(
             <FadeIn offset={0} duration={1000} childDelay={150}>
                {this.renderMessage()}
             </FadeIn>
        )
    }
}
Toast.propTypes = {
    message: PropTypes.string
}
const Mod = styled.div`  
    background-color: #151515;
    color: white;
    text-align: center;
    position: absolute;
    z-index: 1000;
    bottom: 50px;
    left:0; right:0;
    margin: auto;
    max-width: 200px;
    border-radius: 15px;
`
