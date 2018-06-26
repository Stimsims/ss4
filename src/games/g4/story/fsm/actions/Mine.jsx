import React from 'react';
import Button from './../../../components/views/Button.jsx';
import {selectFsmState} from './../selectors.js';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import {setFSMState} from './../reducer.js';
import {createSample} from './../../items/asteroidSample.js';
import {addSample} from './../../items/reducer.js';
import messages from './../../Messages.js';
import constants from './../../Constants';

const S_IN = 'in',
    S_BACK= 'back',
    I_ENTRY_1 = 'e1',
    S_MINE = 'mine',
    S_LOOK = 'look',
    S_MINE_FIN = 'fin';
export const id = 'mine';
var sample = null;
class Mine extends React.Component{
    constructor(props){
        super(props);
        this.onInput = this.onInput.bind(this);
    }
    onInput(input){
        console.log("mine input");
        console.log(this.props);
        if(input.vId === I_ENTRY_1){
            //roll and new asteroid
            sample = createSample();
         //   console.log("setting mine fsm");
            this.props.setFSMState(id, {
                [constants.fsm.keys.state]: S_IN
            });
            this.props.onInput(messages.message(this.props.vId));
        }else{
            switch(this.props.fsm.state){
                case S_IN:
                    if(input.vId === S_MINE){
                        //add sample to store
                        // console.log("mined sample:");
                        // console.log(sample);
                        this.props.addSample(sample);
                        this.props.setFSMState(id, {
                            [constants.fsm.keys.state]: S_MINE_FIN
                        });
                        sample = createSample();
                    }else if(input.vId === S_LOOK){
                        sample = createSample();
                        this.props.setFSMState(id, {
                            [constants.fsm.keys.state]: S_IN
                        });
                    }else if(input.vId === S_BACK){
                        this.props.onInput(messages.message(this.props.vId));
                    }
                    break;
                case S_MINE_FIN:
                    if(input.vId === S_IN){
                        this.props.setFSMState(id, {
                            [constants.fsm.keys.state]: S_IN
                        });
                    }
                    break;
            }
        }
    }
    renderView(){
        console.log("mine renderView");
        console.log(this.props);
        if(this.props.showEntry){
            return [
                <div>
                    <Button vId={I_ENTRY_1} onInput={this.onInput} text={'mine asteroids'}/>
                </div>
            ]
        }else{
            switch(this.props.fsm.state){
                case S_MINE_FIN:
                    return [
                        <p>asteroid sample added to inventory</p>,
                        <Button vId={S_IN} onInput={this.onInput} text={'next'}/>
                    ]
                case S_IN:
                default:
                    return [
                        <p>{`there is a ${sample.game.weight > 8? 'large':'small'} asteroid in front of you, mine it?`}</p>,
                        <div>
                            <Button vId={S_MINE} onInput={this.onInput} text={'mine it'}/>
                            <Button vId={S_LOOK} onInput={this.onInput} text={'look for another'}/>
                            <Button vId={S_BACK} onInput={this.onInput} text={'back'}/>
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
        {setFSMState, addSample},
        dispatch
    )
}

const mapStateToProps = (state, props) => {
    return {
        fsm: selectFsmState(state, id, {[constants.fsm.keys.state]: S_IN})
    }
}
export const component = connect(mapStateToProps, mapDispatchToProps)(Mine);
export default component;
