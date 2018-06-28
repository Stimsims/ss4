import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {constants, functions} from './../../Constants';

export const id = constants.items.engine;
//let itemId = null, itemType = null;
/*
    sim:{
        engine:{
            ok:'ok',
            overheat: 'overheat',
            exploded:'explo'
        }
    },
*/
class Engine extends React.Component{
    constructor(props){
        super(props);
     //   this.onInput = this.onInput.bind(this);
    //    console.log("AstSamp constructor");
    //    console.log(props);
    }
    renderView(){
        console.log("rendering engine view, state: " + this.props.engine.state);
        let temp = `the engine is running at ${this.props.engine.temp}`
        if(this.props.engine.state === constants.sim.engine.overheat){
            return <p>{temp}. It's overheating</p>
        }else if(this.props.engine.state === constants.sim.engine.exploded){
            return <p>The engine has exploded, it's not working</p>
        }else{
            return <p>{temp}. The engine is running within its tolerant range</p>
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
        {},
        dispatch
    )
}

const mapStateToProps = (state, props) => {
    return {
        engine: state.items.ship.engine
    }
}
export const component = connect(mapStateToProps, mapDispatchToProps)(Engine);
//export default component;

//export const component = connect(mapStateToProps, mapDispatchToProps)(Lounge);