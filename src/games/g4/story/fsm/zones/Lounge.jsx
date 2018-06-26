import React from 'react';
import Button from './../../../components/views/Button.jsx';
import {selectFsmState} from './../selectors.js';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import {setZone, setFSMState} from './../reducer.js';
import constants from './../../Constants.js';

const S_IN = 'in',
    S_CONTROL= 'control',
    I_ENTRY_1 = 'e1',
    I_CONTROL = 'ic',
    I_INVENTORY ='inv';
export const id = 'lounge';
class Lounge extends React.Component{
    constructor(props){
        super(props);
        this.onInput = this.onInput.bind(this);
        console.log("lounge constructor, props:");
        console.log(props);
    }

    onInput(input){
        console.log("lounge recieved input state: ");
        console.log(this.props);
        if(input.vId === I_ENTRY_1){
            //is an entry point, irrelevant what state the FSM is in
            //send action to change location setZone(zone, state){
                console.log("dispatching change zone")
            this.props.setZone(id, S_IN);
        }else{
            switch(this.props.fsm.state){
                case I_INVENTORY:
                    if(input.vId === I_INVENTORY){
                       // console.log("dispatching lounge in")
                        this.props.setFSMState(id, {
                            [constants.fsm.keys.state]: S_IN
                        });
                    }
                    break;
                case S_IN:
                default:
                    if(input.vId === I_INVENTORY){
                       // console.log("dispatching inventory")
                        this.props.setFSMState(id, {
                            [constants.fsm.keys.state]: I_INVENTORY
                        });
                    }
                    break;
            }
        }

    }
    renderView(){
        console.log("lounge render view: ");
        console.log(this.props);
        if(this.props.showEntry){
            return [
                <div>
                    entry to lounge
                    <Button vId={I_ENTRY_1} onInput={this.onInput} text={'go to lounge'}/>
                </div>
            ]
        }else{
            switch(this.props.fsm.state){
                //if top level initial room, may not have state, and may not be an entry point
                case I_INVENTORY:
                    let inventory2 = this.props.factory(constants.fsm.actions.inventory);
                    return [
                        <inventory2.component showEntry={false} factory={this.props.factory} onInput={this.onInput} vId={I_INVENTORY}/>
                    ]
                case S_IN:
                default:
                let control = this.props.factory('control');
                let inventory = this.props.factory(constants.fsm.actions.inventory);
                return [
                        <div>
                            inside lounge
                            <control.component showEntry={true} factory={this.props.factory} onInput={this.onInput} vId={I_CONTROL}/>
                            <inventory.component showEntry={true} factory={this.props.factory} 
                            onInput={this.onInput} vId={I_INVENTORY}/>
                        </div>
                    ]
            }
        }

    }
    render(){
        return(
            this.renderView()
        )
    }
}



const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            setZone, setFSMState
        },
        dispatch
    )
}
const mapStateToProps = (state, props) => {
    return {
        fsm: selectFsmState(state, id, {[constants.fsm.keys.state]: S_IN})
    }
}
export const component = connect(mapStateToProps, mapDispatchToProps)(Lounge);
export default component;
