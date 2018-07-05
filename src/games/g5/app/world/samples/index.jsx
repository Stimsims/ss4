import React from 'react';
import Button from './../../../components/view/Button.jsx';
import {store, constants, decorators} from './../../keys.js';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import {selectFSMState} from './../../selectors.js';
import {setFSM} from './../reducer.js';
import {groupObjValues} from './../../../../../utilities/iterators.js';

const SITEM = 'it', SIDENTIFY = 'id';

class Sample extends React.Component{
    constructor(props){
        super(props);
        console.log("sample constructor", props);
    }
    onRender(){
        console.log("sample onRender props ", this.props);
        if(this.props.entry){
            //return <p>item list</p>
            //render items from parent
            return this.props.items.map(e => {
                console.log("element", e);
                return (
                    <Button onInput={() => {
                        this.props.setFSM(store.iSample, {
                            state: SITEM,
                            itemId: e.id,
                            itemType: e.type
                        });
                        this.props.onInput();
                    }} >
                        <span>item {e.element}</span>
                    </Button>
                )
                //return <p>item {e.element}</p>
            })
        }else{
            return <p>specific item view</p>
        }
    }
    render(){
        console.log("sample rendering");
        return(
            this.onRender()
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {setFSM},
        dispatch
    )
}
const mapStateToProps = (state, props) => {
    console.log("sample mapStateToProps", state);
    console.log("sample props", props);
    let fsm= selectFSMState(state, store.iSample, {state: SITEM});
    console.log("sample fsm state", fsm);
    //if has item in fsm state, retrieve that, if not, use parents ids, if available, else, get all
    let ids = fsm.itemId?[fsm.itemId]:props.ids;
    console.log("sample ids", ids);
    let items = [];
    if(ids){
        ids.map(e => {
            items.push(state.world[store.iSample][e]);
        })
    }else{
        //just get them all, excluding the fsm
        items = groupObjValues(state.world[store.iSample], (prop)=>{return prop != 'fsm'})
    }
    console.log("sample items", items);
    return {
        fsm,
        state: fsm.state,
        items
    }
}
const connected = connect(mapStateToProps, mapDispatchToProps)(Sample);
const out = {
    component: connected
}
export default out;