import React from 'react';

// export default button = (text, onInput, input)=>{
//     return(
//         <button onClick={() => {onInput(input)}}>{text}</button>
//     )
// }

class Button extends React.Component{
    constructor(props){
        super(props);

    }
    // render(){
    //     return(
    //         <button onClick={
    //             () => {this.props.onInput(this.props.return)}
    //         }>
    //             {this.props.children}
    //         </button>
    //     )
    // }
    render(){
        return(
            <button onClick={
                () => {this.props.onInput()}
            }>
                {this.props.children}
            </button>
        )
    }
}

export default Button;