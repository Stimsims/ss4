import React from 'react';
import {connect} from 'react-redux';
//import Sim from './../../games/g1/simulation/index.js';
import { bindActionCreators } from 'redux'
//import Index from './../../games/g3/components/Index.jsx';
import Index from './../../games/g4/Index.jsx';

class Game extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div>
                <Index />
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

/*
        this.state = {
            story: this.props.game.getStory(),
            sim: this.props.game.getSim()
        }
            <div>
                Game
                <this.state.story iId={'root'}/>
                <this.state.sim />
            
                </div>
*/