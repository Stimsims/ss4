import React from 'react';
import {connect} from 'react-redux';
import './main.css';

class Index extends React.Component{
    constructor(props){
        super(props);
        this.state={
            logFocus:false
        }
    }

    renderLog(){
        return this.props.log.map(e => {
            return <p>{e.text}</p>
        })
    }
    onLogFocus = () => {
        console.log('log focus');
        // isFocused = true;
         // sLogBox.flexGrow = '3';
         // sLogBox.backgroundColor = 'red';
         this.setState({ 
             logFocus: !this.state.logFocus
         });
    }
    onInputFocus = () => {
        this.setState({ 
            logFocus: false
        });
        console.log('input focus');
    }
    render(){
        console.log("rendering log " + this.state.logFocus);
        return(
            <div  style={sLogBox} onClick={() => {this.onLogFocus()}} onBlur={() => {this.onInputFocus()}} 
            className={this.state.logFocus? 'flexMax':'flexMin'}>
                {this.renderLog()} 
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        log: state.log
    }
}

export default connect(mapStateToProps)(Index);

var sLogBox = {
    backgroundColor: 'green',
    border: '4px solid red',
    transition: 'all 2s'
}