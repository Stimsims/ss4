import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {constants, functions} from './../../Constants';
import {setFSMState} from './../reducer.js';
import {selectFsmState} from './../selectors.js';
import Button from './../../../components/views/Button.jsx';
import messages from './../../Messages.js';

export const id = constants.items.sequence;
const S_IN = 'in',
I_ENTRY_1 ='e1',
    S_BACK= 'back';
class Seq extends React.Component{
    constructor(props){
        super(props);
        this.onInput = this.onInput.bind(this);
        console.log("sequence constructor", props);
    }
    onInput(input){
        // console.log("seq onInput props ", this.props);
        // console.log("seq onInput ")
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

        }
    }
    renderItem(){
        let view = [];
        view.push(<p>A detailed view of the sequence</p>);
        return view;
    }
    renderView(){
        if(!this.props.item){
            return <p>Waiting for item...</p>
        }else{
            if(this.props.showEntry){
                let t = `a sequence`;
                return [
                    <Button {...functions.propKid(I_ENTRY_1)} onInput={this.onInput} text={t} /> 
                ]
            }else{
                switch(this.props.fsm.state){
                    case S_IN:
                    default:
                        return this.renderItem()
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
        {setFSMState},
        dispatch
    )
}

const mapStateToProps = (state, props) => {
    let fsm = selectFsmState(state, constants.items.sequence, {[constants.fsm.keys.state]: S_IN});
    //Bug there is a state where the inventory is not passing an item in, and the asteroidSample
    //has not recieved a fresh store state, and thus has no item
    //this is resolved in ComponendWillUpdate, which passes in the fresh store state
    //will need to tolerate no item to display
    console.log("sequence fsm", fsm);
    console.log("sequence map state to props, recieving props", props);
    let id = fsm[constants.fsm.keys.item];
    let type = fsm[constants.fsm.keys.itemType];
    let item = props.item? props.item: id?state.items[type][id]:null;
    // console.log("ast samp id: " + id + " type: " + type + "item: ");
    // console.log(item);
    return {
        fsm: fsm,
        item: item,
        stocks: state.items[constants.items.stock]
    }
 
}
export const component = connect(mapStateToProps, mapDispatchToProps)(Seq);
export default component;

//export const component = connect(mapStateToProps, mapDispatchToProps)(Lounge);