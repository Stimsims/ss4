import React from 'react';
import {store, constants, decorators} from './../app/keys.js';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import {addItem} from './../app/world/reducer.js';
import {create} from './../app/world/samples/Sample.js';

const SITEM = 'it', SIDENTIFY = 'id';

class Init extends React.Component{
    constructor(props){
        super(props);
        console.log("init constructor", props);
    }
    componentDidMount(){
        if(!this.props.contains[store.zLounge]){
            this.props.addItem(create(), store.zLounge);
            this.props.addItem(create(), store.zLounge);
        }
    }
    render(){
        return(
            null
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {addItem},
        dispatch
    )
}
const mapStateToProps = (state) => {
    console.log("map initialization", state);
    return {
        contains: state.world[store.rContains]
    }
}
const connected = connect(mapStateToProps, mapDispatchToProps)(Init);
const out = {
    component: connected
}
export default out;