import React from 'react';
import Button from './../../../components/view/Button.jsx';
import {store, constants, decorators} from './../../keys.js';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import {selectFSMState} from './../../selectors.js';
import {setFSM} from './../reducer.js';
import {setLocation} from './../../game/reducer.js';

const SIn = 'in';
class Control extends React.Component{
    constructor(props){
        super(props);
        console.log("control constructor", props);
    }

    onRender(){
        if(this.props[constants.entry]){
            return [
                <Button onInput={() => {
                        this.props.setFSM(store.zControl, {state: SIn});
                        this.props.setLocation(store.zControl);
                    }} >
                    <span>enter Control room</span>
                </Button>
            ]
        }else{
            return [
                <p>you are inside the Control room</p>
            ]
        }
    }
    render(){
        return(
            <div>
                {this.onRender()}
            </div>
            
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {setFSM, setLocation},
        dispatch
    )
}
const mapStateToProps = (state) => {
    let fsm= selectFSMState(state, store.zControl, {state: SIn});
    return {
        fsm,
        state: fsm.state
    }
}
const connected = connect(mapStateToProps, mapDispatchToProps)(Control);
const out = {
    component: connected
}
export default out;