import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Factory from './../story/Factory.js';


class View extends React.Component{
    constructor(props){
        super(props);
        // console.log('fsm view props id: ' + props.mystate.id + " state: " + props.mystate.state);
        // console.log(this.props);
        this.onInput = this.onInput.bind(this);
        this.state = {
            //builder: Builder(this.onInput)
            builder: this.props.builder(this.onInput)
        }
    }
    // componentWillMount(props){
    //     console.log(`willMount ${this.props.mystate.id} with props ${this.props.mystate.state}`)
    //     console.log(props);
    // }
    // componentDidMount(){
    //     console.log(`didMount ${this.props.mystate.id} with props ${this.props.mystate.state}`)
    // }
    // componentWillReceiveProps(props){
    //     console.log(`willRecieveProps ${this.props.mystate.id} with props ${this.props.mystate.state}`)
    //     console.log(props);
    // }
    // componentWillUnmount(){
    //     console.log(`willUnMount ${this.props.mystate.id} with props ${this.props.mystate.state}`)
    // }
    // componentDidUpdate(){
    //     console.log(`didUpdate ${this.props.mystate.id} with props ${this.props.mystate.state}`)
    // }
    // componentWillUpdate(props){
    //     console.log(`willUpdate ${this.props.mystate.id} with props ${this.props.mystate.state}`)
    //     console.log(props);
    // }
    onInput(input){
        console.log("onInput id: " + this.props.id);
        this.props.fsm.onInput(input, this.props);
    }
    render(){
        console.log(`rerendering gameview ${this.props.mystate.id} with props ${this.props.mystate.state}`)
        return(
            <div className={`gameview${this.props.mystate.id}`}>
                {this.props.fsm.onRender(this.state.builder, this.props, Factory).map(e => e)}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, props) => {
    // console.log("mapDispatchToProps ");
    // console.log(dispatch);
    return bindActionCreators(
        props.fsm.getActions(),
        dispatch
    );
}
const mapStateToProps = (state, props) => {
    let res = props.fsm.getMapState(state, props);
    // console.log(`mapStateToProps ${res.mystate.id} ${res.mystate.state}`);
    // console.log(res); 
    return res;
}

export default connect(mapStateToProps, mapDispatchToProps)(View);