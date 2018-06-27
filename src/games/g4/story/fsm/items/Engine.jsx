import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import {editUserAns} from './../../items/reducer.js';
import {constants} from './../../items/reducer.js';

export const id = 'engine';
class Engine extends React.Component{
    renderView(){
        return <p>the engine is okay</p>
    }
    render(){
        return(
            this.renderView()
        )
    }
}
//export default Engine;
const mapStateToProps = (state) => {
    return{
        engine: state.items.engine
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            editUserAns
        },
        dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Engine);