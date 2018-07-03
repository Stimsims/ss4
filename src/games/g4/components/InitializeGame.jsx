import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import {createSample} from './../story/items/asteroidSample.js';
import {create as createSequence} from './../story/items/Sequence.js';
import {constants} from './../story/Constants.js';
import {editUserAns, addItem, deleteItem} from './../story/items/reducer.js';
import {addToStock, createStock} from './../story/items/stock.js';

class Initialize extends React.Component{

    componentDidMount(){
        console.log("initialization beginning");
        if(Object.keys(this.props.state.items[constants.items.asteroidSample]).length < 3){
            console.log('initializaing asteroid samples');
            let item;
            for(var i = 0; i<3; i++){
                item = this.props.createSample(); //addItem(container, type, id, item){
                this.props.addItem(constants.fsm.actions.inventory, constants.items.asteroidSample, item.id, item);
            }
            let stock = createStock(item.element);
            stock = addToStock(stock, item.element, item.weight);

            this.props.addItem(constants.fsm.actions.inventory, constants.items.stock, item.element, stock);
            this.props.deleteItem(constants.fsm.actions.inventory, constants.items.asteroidSample, item.id, item);
        }
        let sequence = this.props.createSequence();
        this.props.addItem(constants.fsm.zones.lounge, constants.items.sequence, sequence.id, sequence);
    }
    render(){
        return null;
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            createSample, addItem, deleteItem, createSequence
        },
        dispatch
    )
}  
const mapStateToProps = (state) => {
    return {
        state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Initialize);