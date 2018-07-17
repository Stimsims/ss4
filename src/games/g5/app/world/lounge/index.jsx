import React from 'react';
import Button from './../../../components/view/Button.jsx';
import {store, constants, decorators} from './../../keys.js';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import {selectFSMState, selectContained} from './../../selectors.js'; //selectContained = (state, id)
import {setFSM, addItem} from './../reducer.js';
import {create as createSample} from './../samples/Sample.js';

const SIn = 0, SRead = 1, S3 = 's3', SSample = 'samp';

class Lounge extends React.Component{
    constructor(props){
        super(props);
        this.onInput = this.onInput.bind(this);
        console.log("lounge constructor", props);
    }
    componentWillUnmount(){
        console.log("lounge unmounting")
    }
    onInput(input){
        console.log("lounge recieved input", input);
        if(input[constants.kId] === store.zControl){
            
        }   
    }

    renderControlRoom(){
        // let fsm = this.props.factory(store.zControl);
        // return <fsm.component entry={true} onInput={this.onInput} factory={this.props.factory} />// getComponent: (factory, key, entry, input)
        return decorators.getComponent(this.props.factory, store.zControl, true, 
            ()=>{console.log("lounge got input from control room")})
    }
    renderReadRoom(){
        if(this.props.state === SRead){
            return decorators.getComponent(this.props.factory, store.iRead, false, 
                ()=>{this.props.setFSM(store.zLounge, {state: SIn})})
        }else{
            return decorators.getComponent(this.props.factory, store.iRead, true, 
                ()=>{this.props.setFSM(store.zLounge, {state: SRead})})
        }
    }
    renderSamples(){
        console.log("lounge rendering samples", this.props);
        if(this.props.contains[store.iSample]){
            //pass samples to component
            let fsm = this.props.factory(store.iSample);
            if(this.props.state === SSample){
                return <fsm.component entry={false} onInput={()=>{this.props.setFSM(store.zLounge, {state: SSample})}} 
                factory={this.props.factory} ids={this.props.contains[store.iSample]}/>
            }else{

                return <fsm.component entry={true} onInput={ ()=>{this.props.setFSM(store.zLounge, {state: SSample})}} 
                factory={this.props.factory} ids={this.props.contains[store.iSample]}/>
            }

        }
    }
    onRender(){
        console.log("rendering lounge " + this.props.fsm.state);
        if(this.props.entry){
            return [
                <Button onInput={() => {this.props.setFSM(store.zLounge, {state: SIn})}} >
                    <span>enter lounge</span>
                </Button>
            ]
        }else{
            switch(this.props.state){
                case SRead:
                    return [
                        this.renderReadRoom()
                    ]
                case SSample:
                    return [
                        this.renderSamples()
                    ]
                case SIn:
                default:
                    return [
                        <p>you are inside the lounge</p>,
                        <Button onInput={() => {this.props.addItem(createSample(), store.zLounge)}} >
                            <span>create sample</span>
                        </Button>,
                        this.renderReadRoom(),
                        this.renderControlRoom(),
                        this.renderSamples()
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
        {setFSM, addItem},
        dispatch
    )
}
const mapStateToProps = (state) => {
    console.log("lounge mapStateToProps", state);
    let fsm= getFSMState(state, store.zLounge, {state: SIn});
    return {
        fsm,
        state: fsm.state,
        contains: selectContained(state, store.zLounge)
    }
}
const connected = connect(mapStateToProps, mapDispatchToProps)(Lounge);
//export default connected;
const out = {
    component: connected
}
export default out;