import React from 'react';
import Button from './../../../components/views/Button.jsx';
import {selectFsmState} from './../selectors.js';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import {setFSMState} from './../reducer.js';
import {addSample, editItem, addSampleToStock} from './../../items/reducer.js';
import messages from './../../Messages.js';
import {constants, functions} from './../../Constants';

const S_IN = 'in',
    S_BACK= 'back',
    I_ENTRY_1 = 'e1',
    A_ID = 'aid',
    S_STOCK = 'stock';
export const id = constants.fsm.items.asteroidSample;
//let itemId = null, itemType = null;
class AstSamp extends React.Component{
    constructor(props){
        super(props);
        this.onInput = this.onInput.bind(this);
    }
    onInput(input){
        if(input.kId === I_ENTRY_1){
            if(this.props.item){
                this.props.setFSMState(id, {
                    [constants.fsm.keys.state]: S_IN,
                    [constants.fsm.keys.item]: this.props.item.id,
                    [constants.fsm.keys.itemType]: this.props.item.type
                });
                this.props.onInput(messages.item(this.props.kId, this.props.item));
            }else{
                console.log("error, no item in asteroid sample onInput entry");
            }

        }else{
            switch(this.props.fsm.state){
                case S_IN:
                    if(input.kId === A_ID){
                        this.props.setFSMState(id, {
                            [constants.fsm.keys.state]: A_ID
                        });
                    }else if(input.kId === S_BACK){
                        this.props.onInput(messages.message(this.props.kId));
                    }else if(input.kId === S_STOCK){
                        //bug? potential race condition if delete asteroid sample currently open
                        //1) signal input for parent 2) call addSampleToStock with stock id
                        //let sampleId = this.props.item.id;
                        this.props.addSampleToStock(this.props.item.id);
                       // console.log("adding sample " + sampleId + " to stockpile");
                        this.props.onInput(messages.message(this.props.kId));
                        
                    }
                    break;
                case A_ID:
                    let element = input.element;
                    this.props.editItem(this.props.item, constants.items.element, element);
                    this.props.setFSMState(id, {
                        [constants.fsm.keys.state]: S_IN
                    });
                    break;
            }
        }
    }
    renderView(){
        if(!this.props.item){
            return <p>Waiting for item...</p>
        }else{
            if(this.props.showEntry){
                let t = `item: element: ${this.props.item.user.element?this.props.item.user.element:'unknown'}`;
                return [
                    <Button {...functions.propKid(I_ENTRY_1)} onInput={this.onInput} text={t} /> 
                ]
            }else{
                switch(this.props.fsm.state){
                    case A_ID:
                        let idElema = this.props.factory(constants.fsm.questions.idElem)
                        return[
                            <idElema.component item={this.props.item} showEntry={false} factory={this.props.factory} 
                                            onInput={this.onInput} {...functions.propKid(A_ID)}  />
                        ]
                    case S_IN:
                    default:
                        let idElem = this.props.factory(constants.fsm.questions.idElem)
                        return [
                            <p>
                            asteroid sample: {this.props.item.id}:
                            <idElem.component item={this.props.item} showEntry={true} factory={this.props.factory} 
                                            onInput={this.onInput} {...functions.propKid(A_ID)}  />
                            weight: {this.props.item.user.weight?this.props.item.user.weight:'unknown'}
                            </p>,
                            <Button {...functions.propKid(S_STOCK)} onInput={this.onInput} text={'add to stock'} 
                            disabled={this.props.item.user.element?false:true} />, 
                            <Button {...functions.propKid(S_BACK)} onInput={this.onInput} text={'back'} /> 
                        ]
                }
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
        {setFSMState, editItem, addSampleToStock},
        dispatch
    )
}

const mapStateToProps = (state, props) => {
    let fsm = selectFsmState(state, constants.fsm.items.asteroidSample, {[constants.fsm.keys.state]: S_IN});
    //Bug there is a state where the inventory is not passing an item in, and the asteroidSample
    //has not recieved a fresh store state, and thus has no item
    //this is resolved in ComponendWillUpdate, which passes in the fresh store state
    //will need to tolerate no item to display
    let id = fsm[constants.fsm.keys.item];
    let type = fsm[constants.fsm.keys.itemType];
    let item = props.item? props.item: id?state.items[type][id]:null;
    console.log("ast samp id: " + id + " type: " + type + "item: ");
    console.log(item);
    return {
        fsm: fsm,
        item: item
    }
}
export const component = connect(mapStateToProps, mapDispatchToProps)(AstSamp);
export default component;
