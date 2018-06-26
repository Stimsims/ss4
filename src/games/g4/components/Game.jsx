import React from 'react';
import factory from './../Factory.js';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'

class Index extends React.Component{
    constructor(props){
        super(props);
        //retrieve player position to load the correct fsm state
        console.log("game props");
        console.log(props);
        this.getFSM = this.getFSM.bind(this);
        this.state = {};
    }
    componentDidMount(){
        this.getFSM(this.props.zone);
    }
    componentWillUpdate(nextProps, currentState){
        console.log("component will update, is there a different zone? " 
        + (nextProps.zone !== currentState.fsm.id));
        // console.log(current);
        // console.log(next);
        if(nextProps.zone !== currentState.fsm.id){
            let next = nextProps.zone;
            this.getFSM(next);
        }
    }
    getFSM(zone){
        let fsm = factory(zone);
        this.setState({
            fsm
        })
    }
    renderFSM(){
        if(this.state.fsm){
            return (
                <this.state.fsm.component id={this.state.fsm.id}  showEntry={false} factory={factory} />
            )
        }
    }
    render(){
        return(
            <div>
                <p>current zone: {this.props.zone}</p>
                {this.renderFSM()}
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        zone: state.game.zone
    }
}

export default connect(mapStateToProps)(Index);