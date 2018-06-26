import React from 'react';
import Button from './../../../components/views/Button.jsx';
import {selectFsmState} from './../selectors.js';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import {setFSMState} from './../reducer.js';
import messages from './../../Messages.js';
import constants from './../../Constants';

const S_IN = 'in',
    S_BACK= 'back',
    I_ENTRY_1 = 'e1',
    S_ITEM = 'item',
    S_SAMPLE = 'sample',
    A_ELEM = 'elem';
export const id = 'inventory';
var itemId = null, itemType = null;
class Inventory extends React.Component{
    constructor(props){
        super(props);
        this.onInput = this.onInput.bind(this);
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
                    if(input.vId === S_BACK){
                        this.props.onInput(messages.message(this.props.vId));
                    }else if(input.vId === S_SAMPLE){
                        let it = input.item;
                        this.props.setFSMState(id, {
                            [constants.fsm.keys.state]: S_SAMPLE,
                            // [constants.fsm.keys.item]: it.id,
                            // [constants.fsm.keys.itemType]: it.type
                        });
                    }
                    else{
                        console.log("item selected " + input.vId);
                        itemId = input.vId;
                        this.setState({
                            item
                        })
                    }
                    break;
                case S_SAMPLE:
                    if(input.vId === S_SAMPLE){
                        this.props.setFSMState(id, {
                            [constants.fsm.keys.state]: S_IN
                        });
                    }
                    break;
            }
        }
    }
    renderSample(){
        console.log("invetory render sample");
       
      //  let idElem = this.props.factory(constants.fsm.questions.idElem);
        let sample = this.props.factory(constants.fsm.items.asteroidSample);
        return Object.values(this.props.asteroidSample).map((e, i) => {
            console.log("render asteroid sample item ");
            console.log(e);
            return <sample.component item={e} 
                    showEntry={true} factory={this.props.factory}
                    onInput={this.onInput} vId={S_SAMPLE}/>
            // if(e.id === itemId){
            //     itemType = e.type;
            //     return (
            //         <p>asteroid sample {i + 1}: element:
            //         <idElem.component item={e} showEntry={true} factory={this.props.factory} 
            //                         onInput={this.onInput} vId={A_ELEM}  />
            //         weight: {e.user.weight?e.user.weight:'unknown'}</p>
            //     )
            // }else{
            //     let t = `item ${i} element: ${e.user.element?e.user.element:'unknown'}`;
            //     return  <Button vId={e.id} onInput={this.onInput} text={t} /> 
            // }
            /*
            <Button vId={{vId: S_SAMPLE, item: e, action: A_ELEM}} onInput={this.onInput} 
            text={e.user.element?e.user.element:'unknown'} /> 
            */

        })
    }
    renderView(){
        if(this.props.showEntry){
            return [
                <div>
                    <Button vId={I_ENTRY_1} onInput={this.onInput} text={'inspect inventory'}/>
                </div>
            ]
        }else{
            switch(this.props.fsm.state){
                case S_SAMPLE:
                    //console.log("inventory: render view type: " + itemType + " id: " + itemId);
                    //let idElem = this.props.factory(constants.fsm.questions.idElem)
                    //itemId={this.props.fsm[constants.fsm.keys.item]} 
                    //itemType={this.props.fsm[constants.fsm.keys.itemType]} 
                    let sample = this.props.factory(constants.fsm.items.asteroidSample);
                    return [
                        <sample.component 
                        showEntry={false} factory={this.props.factory}
                        onInput={this.onInput} vId={S_SAMPLE}/>
                    ]
                    // return [
                    //     <idElem.component showEntry={false} factory={this.props.factory} 
                    //     onInput={this.onInput} vId={A_ELEM} itemId={itemId} itemType={itemType} />
                    // ]
                case S_IN:
                default:
                    return [
                        <div>
                            <Button vId={S_BACK} onInput={this.onInput} text={'back'}/>
                        </div>,
                        <div>
                            {this.renderSample()}
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
        {setFSMState},
        dispatch
    )
}

const mapStateToProps = (state, props) => {
    console.log("mapping asteroid samples");
    console.log(state);
    return {
        fsm: selectFsmState(state, id, {[constants.fsm.keys.state]: S_IN}),
        asteroidSample: state.items.asteroidSample
    }
}
export const component = connect(mapStateToProps, mapDispatchToProps)(Inventory);
export default component;
