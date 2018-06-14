import React from 'react';
import Text from './Text.jsx';
import Button from './Button.jsx';

export default class Choice extends React.Component{

    render(){
        return(
            <div key={this.props.nodeId}>
                <p>{this.props.text}</p>
                {this.props.choices.map(e => {
                    // console.log("choice e " + e.id);
                    // console.log(e);
                    return <Button key={e.iId} iId={e.iId} nodeId={e.nodeId} onInput={this.props.onInput}>
                        {e.child}
                    </Button>
                })}
            </div>
        )
    }
}