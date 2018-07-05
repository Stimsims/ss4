import React from 'react';
import Button from './../../../components/views/Button.jsx';
import {selectFsmState} from './../selectors.js';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import {setFSMState} from './../reducer.js';
import messages from './../../Messages.js';
import {constants, functions} from './../../Constants';

const S_IN = 'in',
    S_BACK= 'back',
    I_ENTRY_1 = 'e1',
    S_FLAME = 'flame',
    S_SONAR = 'sonar';
export const id = 'idElem';

class IdElem extends React.Component{
    constructor(props){
        super(props);
        this.onInput = this.onInput.bind(this);
        console.log("IdElem constructor ", props);
    }
    onInput(input){
        if(input[constants.IO.kId] === I_ENTRY_1){
            this.props.setFSMState(id, {
                [constants.fsm.keys.state]: S_IN
            });
            this.props.onInput(messages.message(this.props.kId));
        }else{
            switch(this.props.fsm.state){
                case S_IN:
                    if(input[constants.IO.kId] === S_FLAME){
                        this.props.setFSMState(id, {
                            [constants.fsm.keys.state]: S_FLAME
                        });
                    }else if(input[constants.IO.kId] === S_SONAR){
                        this.props.setFSMState(id, {
                            [constants.fsm.keys.state]: S_SONAR
                        });
                    }else if(input[constants.IO.kId] === S_BACK){
                        this.props.onInput(messages.message(this.props.kId));
                    }
                    break;
                case S_FLAME:
                case S_SONAR:
                    this.props.onInput(messages.answer(this.props.kId, {
                        element: input.vId
                    }));
                    break;
            }
        }
    }
    renderView(){
        if(this.props.showEntry){
            let t = `element: ${this.props.item.user.element?this.props.item.user.element:'unknown'}`
            return [
                <div>
                    <Button {...functions.propKid(I_ENTRY_1)} onInput={this.onInput} text={t}/>
                </div>
            ]
        }else{
            switch(this.props.fsm.state){
                case S_SONAR:
                    return [
                        <p>{`The sample emites a soundwave of 370Hz`}</p>,
                        <div>
                            <Button {...functions.propKid(S_SONAR)} vId={'magnesium'} onInput={this.onInput} text={'magnesium'}/>
                            <Button {...functions.propKid(S_SONAR)} vId={'lithium'} onInput={this.onInput} text={'lithium'}/>
                        </div>
                    ]
                case S_FLAME:
                    return [
                        <p>{`The flame is blue, therefore the sample is made of:`}</p>,
                        <div>
                            <Button {...functions.propKid(S_FLAME)} vId={'iron'} onInput={this.onInput} text={'iron'}/>
                            <Button {...functions.propKid(S_FLAME)} vId={'copper'} onInput={this.onInput} text={'copper'}/>
                        </div>
                    ]
                case S_IN:
                default:
                    return [
                        <p>{`The sample element is ${this.props.item.type} id:${this.props.item.id}`}</p>,
                        <div>
                            <Button {...functions.propKid(S_FLAME)} onInput={this.onInput} text={'use flame test'}/>
                            <Button {...functions.propKid(S_SONAR)} onInput={this.onInput} text={'use sonar test'}/>
                            <Button {...functions.propKid(S_BACK)} onInput={this.onInput} text={'back'}/>
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

//editItem(item, key, val)
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {setFSMState},
        dispatch
    )
}

const mapStateToProps = (state, props) => {
    return {
        fsm: selectFsmState(state, id,{[constants.fsm.keys.state]: S_IN})
    }
}
export const component = connect(mapStateToProps, mapDispatchToProps)(IdElem);
export default component;
