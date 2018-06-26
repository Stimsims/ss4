import React from 'react';

export default class Button extends React.Component{
    render(){
        return(
            <button onClick={()=>{
                this.props.onInput({
                    vId: this.props.vId
                })
            }}>{this.props.text}</button>
        )
    }
}