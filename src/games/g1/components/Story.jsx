import {guid} from './../../../utilities/ids.js';
import React from 'react';
import styled from 'styled-components';
//import Tree from './Tree.jsx';
import Choice from './views/Choice.jsx';
import Button from './views/Button.jsx';
import Text from './views/Text.jsx';
//import FadeIn from './../../../components/UI/animations/FadeIn.jsx';
//import Hello from './hrllo.jsx';

const keys = {
    branchId: 'bId',
    nodeId: 'nodeId',
    iId: 'iId',
    vTree: 'vTree',
    text: 'text',
    choices: 'choices',
    start: 'start'
}
const colors = ['red', 'blue', 'yellow', 'green']
//a smart component that gets the story info
export default class Story extends React.Component{
    constructor(props){
        super(props);
        console.log("story parent constructor");
        console.log(props);
        this.renderNode = this.renderNode.bind(this);
        this.renderTree = this.renderTree.bind(this);
        this.onInput = this.onInput.bind(this);
        console.log("my state:");
        console.log(props);
      // this.onSubStoryComplete = this.onSubStoryComplete.bind(this);
     //  retrieve any instance state from the store
       let mystate = props.store.component[props.iId];

       console.log(mystate);
        this.state = {
            [keys.branchId]:guid(),
            keys,
            ...mystate
        }
    }
    getNodeId(){
        return this.props.store.component[this.props.iId]? this.props.store.component[this.props.iId]: this.state.keys.start;
    }
    componentWillUnmount(){
        console.log("component unmounting, saving state nodeId: " + this.state.nodeId);

        this.props.actions.setComponentState({
            id: this.props.iId,
            state: {
                nodeId: this.getNodeId()
            }
        });
    }
    textItem(type, text){
        return {type, text};
    }
    textNode(nodeId, text){
        return <Text nodeId={nodeId} text={text} />
    }
    //key is how the story will recognize the input
    //value is the value of the input - eg a button set will have a key uuid, button A will have value A
    btnItem(nodeId, iId, child){
        return {nodeId, iId, child};
    }
    choiceNode(nodeId, text, choices){
        return <Choice nodeId={nodeId} text={text} choices={choices} onInput={this.onInput}/>
    }
    subTreeNode(iId, Branch){
        return  <Branch iId={iId} onInput={this.onInput} id={guid()}/>
    }
    onChoice(input){
        // console.log("on story parent input - this should be over written");
        // console.log(input);
    }
    bgFill(children){
        return <FadeIn><BgFill>{children}</BgFill></FadeIn>
    }
    bgInline(children){
        return <BgInline>{children}</BgInline>
    }
    getBg(){
        return this.bgInline;
    }

    // onSubStoryComplete(input){
    //      console.log("subtreee complete, consolidate info");
    //     // console.log(input);
    //     //set relevant subtree to null
    // }

    renderTree(nodes){
        //if subtree, render that, if not render this
      //  let nodes = this.renderNode();
        if(!nodes){
            return <p>Error rendering tree</p>
        }else if(nodes.length <= 0){
            return <p>no tree nodes to render</p>
        }else{
            return nodes;
        }
    }

    //called whenever store reducers are updated
    render(){
        let bg = this.getBg();
        let nodes = this.renderNode();
        return(
            // <Container>
            //     {bg(nodes)}
            // </Container>
            // <div>
            //     {this.renderTree(nodes)}
            // </div>
            <div>
                {nodes.map(e => {
                    return e
                })}
            </div>
        )
    }
}
const Container = styled.div`
    background-color: black;
    padding: 10px;
`
const BgInline = styled.div`
    display: block;
    background-color: cyan;
`
const BgFill = styled.div`
    position: fixed;
    left: 0px;
    top: 50px;
    background-color: red;
    display: block;
    height: 100vh;
    width: 100vw;
`