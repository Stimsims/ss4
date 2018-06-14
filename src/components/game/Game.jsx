import React from 'react';
import {connect} from 'react-redux';
//import Sim from './../../games/g1/simulation/index.js';
import { bindActionCreators } from 'redux'

class Game extends React.Component{
    constructor(props){
        super(props);
      //  console.log("game constructor");
        this.state = {
            story: this.props.game.getStory(),
            sim: this.props.game.getSim()
        }
    }

    render(){
        return(
            <div>
                Game
                <this.state.story />
                <this.state.sim />
                {/* <Sim /> */}
                {/* <Sim store={this.props.store} actions={this.props.actions} sim={this.props.game.getSim()}/> */}
            </div>
        )
    }
}
export default Game;
// const mapStateToProps = (state, props) => {
//     return props.game.mapStateToProps(state);
// }

// const mapDispatchToProps = (dispatch, props) => {
//     return {
//         actions: bindActionCreators({
//             ...props.game.mapDispatchToProps()
//         }, dispatch)  
//     };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Game);