import React from 'react';

export default class Text extends React.Component{
    renderKatex(math, i){
        return <p key={i}>{math.text}</p>
    }
    renderText(text, i){
        return <p key={i}>{text.text}</p>
    }
    render(){
        // console.log("rendering a text node");
        // console.log(this.props);
        return(
            <div>
                {this.props.text.map((e, i) => {
                    if(e.type === 'math'){
                        return this.renderKatex(e, i);
                    }else{
                        return this.renderText(e, i);
                    }
                })}
            </div>
        )
    }
}