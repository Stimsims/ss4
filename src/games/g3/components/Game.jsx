import React from 'react';
import View from './View.jsx';
import Factory from './../story/Factory.js';
import Builder from './Builder.jsx';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeZone} from './../story/zones/reducers.js';

class Index extends React.Component{
    constructor(props){
        super(props);
        console.log('index component props:');
        console.log(props);
        this.onInput = this.onInput.bind(this);
        this.getZone = this.getZone.bind(this);
        let zone = this.getZone();
        this.state = {
            zone,
            zoneId: zone.id,
            builder: Builder(View)
        }
    }
    componentDidUpdate(prevProps, prevState){
        console.log("has zone " + prevProps.position.id + " changed? " + this.props.position.id);
        if(prevProps.position.id != this.props.position.id){
            let zone = this.getZone();
            this.setState({
                zone,
                zoneId: zone.id,
            })
        }
    }

    getZone(){
        return Factory(this.props.position.id);
    }
    onInput(input){
        this.props.changeZone(input);
    }
    render(){
        return(
            <div>
                <View fsm={this.state.zone} id={this.state.zoneId} onInput={this.onInput} builder={this.state.builder} />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
            changeZone
        }, dispatch)
}

const mapStateToProps = (state) => {
    return {
        position: state.zones.position
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);