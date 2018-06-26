import React from 'react';
import Button from './../../../components/views/Button.jsx';
import {selectFsmState} from './../selectors.js';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import {setZone,setFSMState} from './../reducer.js';
import {constants, functions} from './../../Constants.js';

const S_IN = 'in',
    S_LOUNGE= 'lounge',
    I_ENTRY_1 = 'e1',
    I_LOUNGE = 'l1',
    I_MINE = 'mine';
    export const id = 'control';
class Control extends React.Component{
    constructor(props){
        super(props);
        this.onInput = this.onInput.bind(this);
    }
    onInput(input){
        //  console.log("control recieved input");
        //  console.log(this.props);
        if(input.kId === I_ENTRY_1){
            //is an entry point, irrelevant what state the FSM is in
            //send action to change location
            this.props.setZone(id, S_IN);
            // this.props.onInput({
            //     vId: this.props.vId,
            //     setZone: id
            // })
        }else{
            switch(this.props.fsm.state){
                case S_IN:
                    if(input.kId === I_MINE){
                     //   console.log("setting control fsm");
                        this.props.setZone(id, I_MINE);
                    }
                    break;
                case I_MINE:
                    if(input.kId === I_MINE){
                       // console.log("recieved input from mining action");
                        this.props.setFSMState(id, {
                            [constants.fsm.keys.state]: S_IN
                        });
                    }
                    break;
            }
        }

    }
    renderView(){
        // console.log("control render view: ");
        // console.log(this.props);
        if(this.props.showEntry){
            return [
                <div>
                    <Button kId={I_ENTRY_1} onInput={this.onInput} text={'go to control'}/>
                </div>
            ]
        }else{
            switch(this.props.fsm.state){
                case I_MINE:
                    let mine2 = this.props.factory(constants.fsm.actions.mine);
                    return [
                        <mine2.component showEntry={false} factory={this.props.factory} 
                            onInput={this.onInput} {...functions.propKid(I_MINE)}/>
                    ]
                case S_IN:
                default:
                    let lounge = this.props.factory('lounge');
                    let mine = this.props.factory(constants.fsm.actions.mine);
                    return [
                        <div>
                            inside control room
                            <lounge.component showEntry={true} factory={this.props.factory} 
                            onInput={this.onInput} {...functions.propKid(I_LOUNGE)}/>
                            <mine.component showEntry={true} factory={this.props.factory} 
                            onInput={this.onInput} {...functions.propKid(I_MINE)}/>
                            {/* <Button vId={I_ENTRY_1} onInput={this.onInput} text={'inside control'}/> */}
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
export const component = connect(mapStateToProps, mapDispatchToProps)(Control);
export default component;
