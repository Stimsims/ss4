import React from 'react';
import Button from './../../../components/views/Button.jsx';
import {selectFsmState} from './../selectors.js';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import {setFSMState} from './../reducer.js';
import {editUserAns, addItem, deleteItem} from './../../items/reducer.js';
import {addToStock, createStock} from './../../items/stock.js';
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
       console.log("AstSamp constructor");
       console.log(props);
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
                        let item = this.props.item;
                        let stock = this.props.stocks[item.user.element];
                        if(!stock){
                            stock = createStock(item.user.element);
                        }
                        stock = addToStock(stock, item.element, item.weight);

                        this.props.addItem(constants.fsm.actions.inventory, constants.items.stock, 
                            item.user.element, stock);
                        this.props.deleteItem(constants.fsm.actions.inventory, constants.items.asteroidSample, 
                            item.id, item);

                        this.props.onInput(messages.message(this.props.kId));    
                    }
                    break;
                case A_ID:
                    let element = input.element;
                    this.props.editUserAns(this.props.item, constants.items.element, element);
                    this.props.setFSMState(id, {
                        [constants.fsm.keys.state]: S_IN
                    });
                    break;
            }
        }
    }
    renderItems(){
        return Object.keys(this.props.items).map((k, i) => {
            return this.props.items[k].map((e, ei) => {
                if(e){
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
        if(!this.props.item){
            //display items
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
           null
        )
    }
}

//editItem(item, key, val)
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {setFSMState, editUserAns, addItem, deleteItem},
        dispatch
    )
}

const mapStateToProps = (state, props) => {
    let map = {};
    let fsm = selectFsmState(state, constants.fsm.items.asteroidSample, {[constants.fsm.keys.state]: S_IN});
    map.fsm = fsm;
    //if fsm doesn't have type and id, item hasnt been selected yet, list all
    let type = constants.items.asteroidSample;
    let id = fsm[constants.fsm.keys.item];
    console.log("sequence samp id: " + id + " type: " + type + " parent ids ", this.props.ids);
    if(id){
        let item = props.item? props.item: id?state.items[type][id]:null;
        map.items = [item];
    }else{
        //get ids parent has passed in, retrieve ids
        let ids = this.props.items;
        map.items = [];
        ids.map((e,i)=>{
            let item = state.items[type][id];
            map.items.push(item);
        })
    }
    return map;
}
export const component = connect(mapStateToProps, mapDispatchToProps)(AstSamp);
export default component;
