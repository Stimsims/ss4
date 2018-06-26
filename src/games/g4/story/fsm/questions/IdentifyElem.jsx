import React from 'react';
import Button from './../../../components/views/Button.jsx';
import {selectFsmState} from './../selectors.js';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import {setFSMState} from './../reducer.js';
import {addSample, editItem} from './../../items/reducer.js';
import messages from './../../Messages.js';
import constants from './../../Constants';

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
        console.log("IdElem constructor, props should have item");
        console.log(props);
    }
    onInput(input){
        if(input.vId === I_ENTRY_1){
            this.props.setFSMState(id, {
                [constants.fsm.keys.state]: S_IN
            });
            this.props.onInput(messages.message(this.props.vId));
        }else{
            switch(this.props.fsm.state){
                case S_IN:
                    if(input.vId === S_FLAME){
                        this.props.setFSMState(id, {
                            [constants.fsm.keys.state]: S_FLAME
                        });
                    }else if(input.vId === S_SONAR){
                        this.props.setFSMState(id, {
                            [constants.fsm.keys.state]: S_SONAR
                        });
                    }else if(input.vId === S_BACK){
                        this.props.onInput(messages.message(this.props.vId));
                    }
                    break;
                case S_FLAME:
                case S_SONAR:
                    this.props.onInput(messages.answer(this.props.vId, {
                        element: input.vId
                    }));
                    break;
            }
        }
    }
    renderView(){
        console.log("identify element renderView");
        console.log(this.props);
        if(this.props.showEntry){
            let t = `element: ${this.props.item.user.element?this.props.item.user.element:'unknown'}`
            return [
                <div>
                    <Button vId={I_ENTRY_1} onInput={this.onInput} text={t}/>
                </div>
            ]
        }else{
            switch(this.props.fsm.state){
                case S_SONAR:
                    return [
                        <p>{`The sample emites a soundwave of 370Hz`}</p>,
                        <div>
                            <Button vId={'magnesium'} onInput={this.onInput} text={'magnesium'}/>
                            <Button vId={'lithium'} onInput={this.onInput} text={'lithium'}/>
                        </div>
                    ]
                case S_FLAME:
                    return [
                        <p>{`The flame is blue, therefore the sample is made of:`}</p>,
                        <div>
                            <Button vId={'iron'} onInput={this.onInput} text={'iron'}/>
                            <Button vId={'copper'} onInput={this.onInput} text={'copper'}/>
                        </div>
                    ]
                case S_IN:
                default:
                    return [
                        <p>{`The sample element is ${this.props.item.type} id:${this.props.item.id}`}</p>,
                        <div>
                            <Button vId={S_FLAME} onInput={this.onInput} text={'use flame test'}/>
                            <Button vId={S_SONAR} onInput={this.onInput} text={'use sonar test'}/>
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
