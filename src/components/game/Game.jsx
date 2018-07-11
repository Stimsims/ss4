import React from 'react'
//import Index from './../../games/g5/components/Index.jsx';
//import samplegame from 'samplegame';
import Katex from './../UI/math/Katex.jsx';
import {ResponsiveContainer, ScatterChart, Scatter, ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

class Game extends React.Component{
    constructor(props){
        super(props);
        //console.log("game constructor, sample game: ", samplegame);
        this.state = {
            tools: {
                katex: Katex,
                recharts: {
                    ResponsiveContainer,
                    ScatterChart,
                    Scatter,
                    ComposedChart,
                    Line,
                    Area,
                    Bar,
                    XAxis,
                    YAxis,
                    CartesianGrid,
                    Tooltip,
                    Legend
                }
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
