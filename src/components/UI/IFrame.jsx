import React from 'react';

class IFrame extends React.Component{
    render(){
        return(
            <iframe width="600" height="450" src={this.props.src} frameBorder="0" allowFullScreen></iframe>
        )
    }
}

export default IFrame;

//      <IFrame src={"https://datastudio.google.com/embed/reporting/1AD-Xywiz627t-znwAMj1oe_7WL8fv-XM/page/MCWT"} />