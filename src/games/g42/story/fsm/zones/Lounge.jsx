import React from 'react';
import Button from './../../../components/views/Button.jsx';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import {setZone, setFSMState} from './../reducer.js';
import {constants, functions} from './../../Constants.js';
import {selectFsmState, selectContained} from './../selectors.js';

const S_IN = 'in',
    S_CONTROL= 'control',
    I_ENTRY_1 = 'e1',
    I_CONTROL = 'ic',
    I_INVENTORY ='inv',
    I_SEQ = 'iSeq';
export const id = 'lounge';
export class Lounge extends React.Component{
    constructor(props){
        super(props);
        this.onInput = this.onInput.bind(this);
        // console.log("lounge constructor, props:");
        // console.log(props);
    }
    componentWillMount(){
        console.log("lounge mounting");
        this.props.setFSMState(id, {
            [constants.fsm.keys.state]: I_ENTRY_1
        });
    }
    componentWillUnmount(){
        console.log("lounge unmounting");
        this.props.setFSMState(id, {
            [constants.fsm.keys.state]: I_ENTRY_1
        });
    }
    onInput(input){
        // console.log("lounge recieved input state: ");
        // console.log(input);
        if(input[constants.IO.kId] === I_ENTRY_1){
            //is an entry point, irrelevant what state the FSM is in
            //send action to change location setZone(zone, state){
                //console.log("dispatching change zone")
            this.props.setZone(id, S_IN);
        }else{
            switch(this.props.fsm.state){
                case I_INVENTORY:
                case I_SEQ:
                    if(input[constants.IO.kId] === I_INVENTORY || input[constants.IO.kId] === I_SEQ){
                       // console.log("dispatching lounge in")
                        this.props.setFSMState(id, {
                            [constants.fsm.keys.state]: S_IN
                        });
                    }
                    break;
                case S_IN:
                default:
                    if(input[constants.IO.kId] === I_INVENTORY){
                       // console.log("dispatching inventory")
                        this.props.setFSMState(id, {
                            [constants.fsm.keys.state]: I_INVENTORY
                        });
                    }else if(input[constants.IO.kId] === I_SEQ){
                        // console.log("dispatching inventory")
                         this.props.setFSMState(id, {
                             [constants.fsm.keys.state]: I_SEQ
                         });
                     }
                    break;
            }
        }

    }
    renderSequences(){
        console.log("render sequences", this.props);
        return Object.keys(this.props.items.sequence).map((k, i) => {
            let seq = this.props.factory(constants.items.sequence);
            return (<seq.component showEntry={true} factory={this.props.factory} item={this.props.items.sequence[k]} 
            onInput={this.onInput} {...functions.propKid(I_SEQ)}/>)
        })
    }
    renderView(){
        console.log("lounge render view: " + this.props.fsm.state);
        console.log(this.props);//this.props.showEntry
        if(false){
            return [
                <div>
                    entry to lounge
                    <Button kId={I_ENTRY_1} onInput={this.onInput} text={'go to lounge'}/>
                </div>
            ]
        }else{
            switch(this.props.fsm.state){
                //if top level initial room, may not have state, and may not be an entry point
                case S_IN:
                let control = this.props.factory('control');
                let inventory = this.props.factory(constants.fsm.actions.inventory);
                return [
                        <div>
                            inside lounge
                            {/* <control.component showEntry={true} factory={this.props.factory} 
                            onInput={this.onInput} {...functions.propKid(I_CONTROL)}/> */}
                            <inventory.component showEntry={true} factory={this.props.factory} 
                            onInput={this.onInput} {...functions.propKid(I_INVENTORY)} />
                        </div>,
                        this.renderSequences()
                    ]

                case I_INVENTORY:
                    let inventory2 = this.props.factory(constants.fsm.actions.inventory);
                    return [
                        <inventory2.component showEntry={false} factory={this.props.factory} 
                        onInput={this.onInput} {...functions.propKid(I_INVENTORY)}/>
                    ]
                case I_SEQ:
                    let seq = this.props.factory(constants.items.sequence);
                    return (
                        <seq.component showEntry={false} factory={this.props.factory}
                        onInput={this.onInput} {...functions.propKid(I_SEQ)}/>
                    )
                case I_ENTRY_1:
                default:
                    return [
                        <div>
                            entry to lounge
                            <Button kId={I_ENTRY_1} onInput={this.onInput} text={'go to lounge'}/>
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
        fsm: selectFsmState(state, id, {[constants.fsm.keys.state]: S_IN}),
        items: selectContained(state, id)
    }
}
export const component = connect(mapStateToProps, mapDispatchToProps)(Lounge);
//export default component;
