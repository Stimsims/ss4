import React from 'react';

class Wrapper extends React.Component{
    constructor(props){
        super(props);
        if(props.index === 3){
            props.input.index = 1;
        }
    }
    renderWrapper(){
        if(this.props.index < 3){
            return <Wrapper index={this.props.index + 1} input={this.props.input} />
        }
    }
    render(){
        return(
            <div>
                Wrapper {this.props.index} : {this.props.input.index}
                {this.renderWrapper()}
            </div>
        )
    }
}
export default Wrapper;