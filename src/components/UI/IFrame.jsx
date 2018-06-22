import React from 'react';

class IFrame extends React.Component{
    render(){
        return(
            <iframe width="600" height="450" src={this.props.src} frameBorder="0" allowFullScreen></iframe>
        )
    }
}

export default IFrame;