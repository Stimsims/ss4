import {guid} from './../../../utilities/ids.js';
import React from 'react';
//import Tree from './Tree.jsx';
import Choice from './views/Choice.jsx';
import Button from './views/Button.jsx';
import Text from './views/Text.jsx';
//import Rooms from './Rooms.jsx';

const keys = {
    branchId: 'bId',
    nodeId: 'nodeId',
    iId: 'iId',
    vTree: 'vTree',
    text: 'text',
    choices: 'choices',
}
//a smart component that gets the story info
export default class Story extends React.Component{
    constructor(props){
        super(props);
        this.renderNode = this.renderNode.bind(this);
        this.renderTree = this.renderTree.bind(this);
        this.onInput = this.onInput.bind(this);
       // this.onSubStoryComplete = this.onSubStoryComplete.bind(this);
        this.state = {
            [keys.branchId]:guid(),
            keys
        }
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
    subTreeNode(nodeId, Branch){
        return <Branch nodeId={nodeId} onComplete={this.onInput} id={guid()}/>
    }
    onChoice(input){
        // console.log("on story parent input - this should be over written");
        // console.log(input);
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
        }else if(nodes[0][keys.view] == [keys.vTree]){
            return nodes[0][keys.story];
        }else{
           return nodes.map(e => {
               return e;
           })
        }
    }

    //called whenever store reducers are updated
    render(){
        let nodes = this.renderNode();
        return(
            <div>
                {this.renderTree(nodes)}
            </div>
        )
    }
}