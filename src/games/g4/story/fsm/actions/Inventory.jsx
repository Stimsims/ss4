import React from 'react';
import Button from './../../../components/views/Button.jsx';
import {selectFsmState, selectContained} from './../selectors.js';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import {setFSMState} from './../reducer.js';
import messages from './../../Messages.js';
import {constants, functions} from './../../Constants';

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
        // console.log("inventory constructor");
        // console.log(props);
    }

    onInput(input){

        if(input.kId === I_ENTRY_1){
            this.props.setFSMState(id, {
                [constants.fsm.keys.state]: S_IN
            });
            this.props.onInput(messages.message(this.props.kId));
        }else{
            switch(this.props.fsm.state){
                case S_IN:
                    if(input.kId === S_BACK){
                        this.props.onInput(messages.message(this.props.kId));
                    }else if(input.kId === S_SAMPLE){
                        let it = input.item;
                        this.props.setFSMState(id, {
                            [constants.fsm.keys.state]: S_SAMPLE,
                            // [constants.fsm.keys.item]: it.id,
                            // [constants.fsm.keys.itemType]: it.type
                        });
                    }
                    else{
                       // console.log("item selected " + input.kId);
                        itemId = input.kId;
                        this.setState({
                            item
                        })
                    }
                    break;
                case S_SAMPLE:
                    if(input.kId === S_SAMPLE){
                        this.props.setFSMState(id, {
                            [constants.fsm.keys.state]: S_IN
                        });
                    }
                    break;
            }
        }
    }
    renderItems(){
        return Object.keys(this.props.items).map((k, i) => {
            return this.props.items[k].map((e, ei) => {
                if(e){
                   // console.log("rendering items for " + k + " item " + e.id);
                    if(k === constants.items.asteroidSample){
                        let sample = this.props.factory(k);
                        return (
                            <div>
                                {(ei == 0)? <p>{k}</p>:''}
                                <sample.component item={e} 
                                showEntry={true} factory={this.props.factory}
                                onInput={this.onInput} kId={S_SAMPLE}/>
                            </div>
                        )
                    }else if(k === constants.items.stock){
                        return(
                            <div>
                                {(ei == 0)? <p>{k}</p>:''}
                                <p><span>element: {e.id}</span>
                                {Object.keys(e).map((m) => {
                                    if(m != 'id'){
                                        return <span> {m} weight:{e[m]}</span>
                                    }
                                })}</p>
                            </div>
                        )
                    }
                }else{
                    return(
                        <div>item undefined</div>
                    )
                }

            })

        })
    }
    renderView(){
        if(this.props.showEntry){
            return [
                <div>
                    <Button {...functions.propKid(I_ENTRY_1)} onInput={this.onInput} text={'inspect inventory'}/>
                </div>
            ]
        }else{
            switch(this.props.fsm.state){
                case S_SAMPLE:
                    let sample = this.props.factory(constants.fsm.items.asteroidSample);
                    return [
                        <sample.component 
                        showEntry={false} factory={this.props.factory}
                        onInput={this.onInput} {...functions.propKid(S_SAMPLE)}/>
                    ]
                case S_IN:
                default:
                    return [
                        <div>
                            <Button {...functions.propKid(S_BACK)} onInput={this.onInput} text={'back'}/>
                        </div>,
                        <div>
                            {this.renderItems()}
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
    // console.log("mapping asteroid samples");
    // console.log(state);
    //asteroidSample: state.items.asteroidSample
    return {
        fsm: selectFsmState(state, id, {[constants.fsm.keys.state]: S_IN}),
        items: selectContained(state, id)
    }
}
export const component = connect(mapStateToProps, mapDispatchToProps)(Inventory);
export default component;
