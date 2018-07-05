import React from 'react';
import Button from './../../../components/view/Button.jsx';
import {store, constants, decorators} from './../../keys.js';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import {selectFSMState} from './../../selectors.js';
import {setFSM} from './../reducer.js';

const SCOVER = 0, SREAD = 's2', S3 = 's3';

class Reading extends React.Component{
    constructor(props){
        super(props);

    }
    onRender(){
        if(this.props.entry){
            return [
                <Button onInput={() => {
                    this.props.setFSM(store.iRead, {state: SCOVER})
                    this.props.onInput();
                }} >
                    <span>read book</span>
                </Button>
            ]
        }else{
            switch(this.props.fsm.state){
                case SREAD:
                    return [
                        <p>reading the book</p>
                    ]
                case SCOVER:
                default:
                    return [
                        <Button onInput={() => {this.props.setFSM(store.iRead, {state: SREAD})}} >
                            <span>The book is closed, open?</span>
                        </Button>
                    ]
            }
        }
    }
    render(){
        return(
            this.onRender()
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {setFSM},
        dispatch
    )
}
const mapStateToProps = (state) => {
    let fsm= selectFSMState(state, store.iRead, {state: SCOVER});
    return {
        fsm,
        state: fsm.state
    }
}
const connected = connect(mapStateToProps, mapDispatchToProps)(Reading);
const out = {
    component: connected
}
export default out;