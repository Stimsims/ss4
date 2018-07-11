import React from 'react'
//import Index from './../../games/g5/components/Index.jsx';
//import samplegame from 'samplegame';
import Katex from './../UI/math/Katex.jsx';
import Line from './../UI/graphs/Line.jsx';

class Game extends React.Component{
    constructor(props){
        super(props);
        //console.log("game constructor, sample game: ", samplegame);
        this.state = {
            tools: {
                katex: Katex,
                gLine: Line
            }
        }
    }

    render(){
        return(
            <div>
                {/* {this.renderGame()} */}
                <this.props.game tools={this.state.tools} />
                {/* <Index /> */}
            </div>
        )
    }
}
export default Game;
