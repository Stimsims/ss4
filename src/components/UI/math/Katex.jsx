
import React from 'react';
import 'katex/dist/katex.min.css';
//import css from './katex.css';
import { InlineMath, BlockMath } from 'react-katex';
//import ReactKaTeX from 'react-katex';
import {render} from 'react-dom'
//import {guid} from './../../../utilities/ids.js';
//import styled from 'styled-components';
function guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}
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
        console.log("katex did mount", this.props);
        // render(<BlockMath math={"c = \\pm\\sqrt{a^2 + b^2}"}/>,
        //         document.getElementById('math'));
        render(<InlineMath math={this.props.latex}/>,
            document.getElementById(this.state.id));
        // const top = "m";
        // const bottom = "s";
        // ReactDOM.render(<InlineMath>{String.raw`\frac{\text{${top}}}{\text{${bottom}}^2}`}</InlineMath>,
        //                 document.getElementById(this.state.id));
    }
    componentDidUpdate(prevProps, prevState){
        console.log("katex did update", this.props);
        if(prevProps.latex !== this.props.latex){
            render(<InlineMath math={this.props.latex}/>,
                document.getElementById(this.state.id));
        }
    }
    render(){
        //var InlineMathV = ReactKaTeX.InlineMath;
        return(
            <span id={this.state.id} key={this.state.id}/>
            // <span id={this.state.id} />
        )
    }
}

export default Katex;

// const Container = styled.span`
//     display: inline
// `

// import React from 'react';
// import 'katex/dist/katex.min.css';
// import { InlineMath, BlockMath } from 'react-katex';
// import ReactDOM from 'react-dom'
// import {guid} from './../../../utilities/ids.js';
// import styled from 'styled-components';

// class Katex extends React.Component{
//     constructor(props){
//         super(props);
//         console.log("fat component constructor");
//         console.log(props);
//         this.state = {
//             id: guid()
//         }
//     }
//     componentDidMount(){
//         // ReactDOM.render(<BlockMath math={"c = \\pm\\sqrt{a^2 + b^2}"}/>,
//         //         document.getElementById('math'));
//         const top = "m";
//         const bottom = "s";
//         ReactDOM.render(<InlineMath>{String.raw`\frac{\text{${top}}}{\text{${bottom}}^2}`}</InlineMath>,
//                         document.getElementById(this.state.id));
//     }
//     render(){
//         return(
//             <Container id={this.state.id} />
//         )
//     }
// }

// export default Katex;

// const Container = styled.span`
//     display: inline
// `
