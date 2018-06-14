import React from 'react';
//getNode, next(input, state, actions) returns response
//a dumb component that renders the story info
//wrapped by the smart story component
export default class Tree extends React.Component{
    constructor(props){
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.state = {
            input:{}
        }
    }
    renderNode(){
        if(this.props.input){
            return this.props.input.map(e => {
                console.log("tree is rendering node ")
                console.log(e);
                switch(e[this.props.keys.view]){
                    case this.props.keys.vText:
                        return this.renderText(e);
                        break;
                    case this.props.keys.vChoice:
                        return this.renderChoice(e);
                        break;
                    default:
                        return <p>unknown node</p>
                }
            })
        }else{
            return <p>the story has malfunctioned</p>
        }
    }
    handleInput(input){
        console.log("input recieved");
        this.setState({
            input: {
                ...this.state.input,
                ...input
            }
        })
    }
    renderChoice(e){
        console.log("rendering choice node");
        console.log(e);
        return <div
            key={e[this.props.keys.nodeId]} >
            <p>{e[this.props.keys.text]}</p>
            {e[this.props.keys.choices].map(c => {
               return (<button 
                    key={c[this.props.keys.nodeId]} 
                    onClick={()=>{
                    this.props.onChoice({
                        ...this.state.input,
                        [this.props.keys.choices]: c[this.props.keys.nodeId]
                    });
                    }}>{c[this.props.keys.text]}
                </button> )
            })}
        </div>
    }
    renderText(e){
        console.log("rendering text view node");
        console.log(e);
        // let style = {}
        // if(e[this.props.keys.p_color]){
        //     style['color'] = e[this.props.keys.p_color]
        // }
        return <p key={e[this.props.keys.nodeId]} >{e[this.props.keys.text]}</p>
    }
    render(){
        console.log("tree render is called");
        return(
            <div>
                Story
                {this.renderNode()}
            </div>
        )
    }
}