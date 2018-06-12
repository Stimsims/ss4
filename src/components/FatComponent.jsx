import React from 'react';
import Katex from 'katex';

class Fat extends React.Component{
    constructor(props){
        super(props);
        console.log("fat component constructor");
        console.log(props);
    }
    render(){
        return(
            <div>
                Fat Component
            </div>
        )
    }
}

export default Fat;