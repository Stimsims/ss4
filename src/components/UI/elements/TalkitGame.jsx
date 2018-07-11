import React from 'react';
import { Link } from 'react-static'
import styled from 'styled-components';

//plays games made by talkit dialogue tree
export default class Talkit extends React.Component{
    constructor(props){
        super(props);
     //   console.log("Talkit props", props);
        //let game = this.props.tree.content;
        if(this.props.tree){
            let ids = this.extractGameIds(this.props.tree);
          //  console.log("extracted game info", ids);
            this.onInput = this.onInput.bind(this);
            this.getVariableValue = this.getVariableValue.bind(this);
            this.getComparisonValue = this.getComparisonValue.bind(this);
            if(ids){
                this.state = {
                    ids: ids.map,
                    id: ids.id,
                    gamePlaying: true
                }
               // console.log("indi post has a game", this.state);
                let first = ids.map.get(ids.id);
                this.playNodes(first);
            }
        }
    }
    getVariableValue(variable, value){
        //takes in the variable and valye, and best of text code, determines if is a number, and if should be relative, absolute or string
        //if is relative, checks if answer is in state, and adds to if so
        let type = variable.substr(0,1);
        let tValue = value;
        let current = this.state[variable]? this.state[variable]:0;
     //   console.log(`getVariableValue variable: ${variable} type ${type} value: ${value} current: ${current}`);
        if(type == "a"){
            tValue = parseInt(value);
            return tValue;
        }else if(type == "r"){
            tValue = parseInt(value);
            return tValue + current;
        }else{
            return tValue;
        }
    }
    getComparisonValue(variable, comparison){
        //comparison assumed same type as variable;
        let type = variable.substr(0,1);
        let tValue = comparison;
       // console.log(`getComparisonValue variable ${variable} type ${type} comparison ${comparison}`);
        if(type == "a" || type == "r"){
            tValue = parseInt(comparison);
            return tValue;
        }else{
            return tValue;
        }
    }
    playNodes(next, state={}){
      //  console.log("playNodes next node", next);
        //state === updates to make to setState when hits input
        //if next is auto, complete
        if(next.type == 'Set'){
            //set state as variable:value
            let nValue = this.getVariableValue(next.variable, next.value);
            state[next.variable] = nValue; //if first char is 
            let n = this.state.ids.get(next.next);
          //  console.log("Set variable state", state);
            this.setState({
                [next.variable]: nValue
            })
            this.playNodes(n, state);
        }else if(next.type == 'Branch'){
            //compare the branches state, if none are true, select _default value:id
            let branch = next.branches.filter(b => {
                //split the first 2 letters off, get variable with remainder, apply check
                if(b.state == "_default"){
                    return false;
                }
                let comparison = b.state.substr(0,2);
                let variable = next.variable;
                let value = this.getComparisonValue(variable, b.state.substr(2));
                let cVal = this.state[variable]? this.state[variable]:state[variable];
               // console.log(`branch comparison ${comparison}  value ${value}, is ${variable} cVal ${cVal} in state?`, this.state);
                if(comparison == "gt" && cVal){
                    return cVal > value;
                }else if(comparison == "lt"&& cVal){
                    return cVal < value;
                }else if(comparison=="eq"&& cVal){
                    return cVal == value;
                }
            });
            if(branch.length <=0){
                branch = next.branches.filter(b => {
                    return b.state == "_default";
                });
              //  console.log("branch not chosen, selecting default", branch);
            }
           // console.log("selected branch ", branch);
            let b = this.state.ids.get(branch[0].value);
            this.playNodes(b, state);
        }else{
            //is an input type, set id and finish
            if(!next.next && !next.choices){
                this.setState({
                    gamePlaying: false
                })
            }else{
                state.id = next.id;
              //  console.log("playNodes updating state", state);
                this.setState({
                    id: next.id
                }) 
            }
        }
    }
    extractGameIds(game){
        let map = new Map();
        let id = null;
        if(game){
            game.map((g, i) => {
                if(i === 0){
                    id = g.id;
                }
                map.set(g.id, g);
            });
           // console.log("extracted ids", map);
        }
        if(id){
            return {map: map, id: id};
        }else{
            return null;
        }
    }
    onInput(id){
        //get the selected node by id, pass to playNodes
        let game = this.state.ids.get(id);
      //  console.log("onInput " + id + " node ", game);
        this.playNodes(game);
    }
    renderGame(){
        //render node id points to
        let game = this.state.ids.get(this.state.id);
      //  console.log("renderGame node", game);
        let views = [];
        if(this.state.gamePlaying && game){
            if(game.name){
                views.push(<p>{game.name}</p>)
            }
            if(game.choices){
                game.choices.map(c => {
                  //  console.log("rendering choice", c);
                    views.push(<button onClick={()=>{this.onInput(c.id)}}>{c.title}</button>)
                })
            }
            if(game.next){
             //   console.log("rendering next", game.next);
                views.push(<button onClick={()=>{this.onInput(game.next)}}>{game.name}</button>)
            }
            // else if(!game.next && game.type === "Node"){
            //     views.push(<p>game finished</p>)
            // }
        }else{
            //game is finished
            views.push(<p>game finished</p>)
        }
        return views;
    }
    render(){
       // console.log("Talking game render", this.state);
        if(this.state.ids){
            return(
                <Game>
                    {this.renderGame()}
                </Game>
            )
        }else{
            return <p>no ids found</p>
        }
        // return <p>no ids found</p>
    }
}

const Game = styled.div`
    padding: 20px;
    background: orange;
`