import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Simulation extends React.Component{
    constructor(props){
        super(props);
        console.log("simulation constructor");
        console.log(props);
        this.onUpdate = this.onUpdate.bind(this);
    }
    onUpdate(){
        this.props.sim.update(this.props);
    }
    componentDidMount(){
        console.log("sim mounting");
        let interval = setInterval(this.onUpdate, 5000);
        this.setState({
            interval
        });
    }
    componentWillUnmount(){
        console.log("sim unmounting");
        clearInterval(this.state.interval);
    }
    render(){
        return(
            null
        )
    }
}

const mapDispatchToProps = (dispatch, props) => {
    // console.log("mapDispatchToProps ");
    // console.log(dispatch);
    return bindActionCreators(
        props.sim.getActions(),
        dispatch
    );
}
const mapStateToProps = (state, props) => {
    let res = props.sim.getMapState(state, props);
    // console.log(`mapStateToProps ${res.mystate.id} ${res.mystate.state}`);
    // console.log(res); 
    return res;
}

export default connect(mapStateToProps, mapDispatchToProps)(Simulation);