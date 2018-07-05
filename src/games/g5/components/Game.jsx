import React from 'react';
import factory from './../app/factory.js';
import {connect} from 'react-redux';
import {store} from './../app/keys.js';

class Game extends React.Component{
    constructor(props){
        super(props);
        //retrieve player position to load the correct fsm state
        console.log("game props");
        console.log(props);
        this.getFSM = this.getFSM.bind(this);
        this.state = {
            locations: [store.zLounge, store.zControl]
        };
    }
    componentDidMount(){
        this.getFSM(this.props.location);
    }
    componentWillUpdate(nextProps, currentState){
        console.log("component will update, is there a different zone? " 
        + (nextProps.location !== currentState.location));
        if(nextProps.location !== currentState.location){
            this.getFSM(nextProps.location);
        }
    }
    getFSM(location){
        let fsm = factory(location);
        this.setState({
            fsm,
            location
        })
    }
    // onInput(){
    //     console.log("game recieved input, it probably shouldnt have");
    // }
    renderFSM(){
        if(this.state.fsm){
            return (
                <this.state.fsm.component factory={factory} onInput={() => {console.log("game recieved input, it probably shouldnt have")}} />
            )
        }else{
            return (
                <p>loading location...</p>
            )
        }
    }
    changeLocation(location){
        console.log("change location");
    }
    renderLocations(){
        return (
        <div>
            {this.state.locations.map(e => {
                return <a onClick={() => {this.changeLocation(e)}}>{e}</a>
            })}
        </div>
        )
    }
    render(){
        return(
            <div>
                {this.renderLocations()}
                <p>current zone: {this.props.location}</p>
                {this.renderFSM()}
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    console.log("game map state to props");
    return {
        location: state.game.location
    }
}

export default connect(mapStateToProps)(Game);