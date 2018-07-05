import React from 'react';
import samplegame from 'samplegame';
import Katex from './../UI/math/Katex.jsx';

class Sample extends React.Component{
    constructor(props){
        super(props);
        console.log("sample constructor", samplegame);
        console.log("site sample katex", Katex)
        this.game = samplegame.getComponent();
    }
    render(){
        return(
            <div>
                <p>sample</p>
                <this.game katex={Katex} />
            </div>
        )
    }
}

export default Sample;