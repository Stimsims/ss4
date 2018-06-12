import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import ReactDOM from 'react-dom'
import {guid} from './../../../utilities/ids.js';

class Katex extends React.Component{
    constructor(props){
        super(props);
        console.log("fat component constructor");
        console.log(props);
        this.state = {
            id: guid()
        }
    }
    componentDidMount(){
        // ReactDOM.render(<BlockMath math={"c = \\pm\\sqrt{a^2 + b^2}"}/>,
        //         document.getElementById('math'));
        const top = "m";
        const bottom = "s";
        ReactDOM.render(<BlockMath>{String.raw`\frac{\text{${top}}}{\text{${bottom}}^2}`}</BlockMath>,
                        document.getElementById(this.state.id));
    }
    render(){
        return(
            <div id={this.state.id} />
        )
    }
}

export default Katex;