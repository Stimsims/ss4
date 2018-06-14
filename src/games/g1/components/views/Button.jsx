import React from 'react';

export default class Button extends React.Component{
    render(){
        // console.log("rendering choice button");
        // console.log(this.props);
        return(
            <button key={this.props.iId} onClick={()=>{this.props.onInput(
                {nodeId: this.props.nodeId, iId: this.props.iId}
            )}} >
            {this.props.children}
            </button>
        )
    }
}