import React from 'react';

class Views extends React.Component{
    render(){
        return(
            <p>Views</p>
        )
    }
}


export function getView(id, story){
    return <Views id={id} story={story} />
}



