console.log("g1 story index");

import Story from './../../components/Story.jsx';
import Rooms from './../rooms/index.jsx';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeHealth} from './store.js';


const start = 'start_0';
const intro = 'intro_0';
const play = 'play';
const again = 'again'
const restart = 'restart_0';
const end = 'end_0';

class Start extends Story{
    constructor(props){
        super(props);
        // console.log("start constructor, has store state?");
        // console.log(props);
        //start, end
        this.state = {
            ...this.state,
            nodeId: start
        }
        //this.nodeId = start;
    }
    onInput(input){
         console.log("on start branch input");
         console.log(input);
        // console.log(this.props);
        //some input will change state, some input will move the story forward
        switch(this.state.nodeId){
            case again:
            case start:
                if(input[this.state.keys.iId] === play){
                  //  this.props.actions.changeHealth(5);
                    this.setState({
                        nodeId: play
                    })
                }else if(input[this.state.keys.iId] === end){
                    this.setState({
                        nodeId: end
                    })
                }
                break;
            case play:
                this.setState({
                    nodeId: again
                })
                break;
        }
    }
    
    renderNode(){
      //  console.log("index render node " + this.state.nodeId);
        switch(this.state.nodeId){
            case start:
                return [
                    this.textNode(start + '1', [
                        this.textItem('text', 'Welcome')
                    ]),
                    this.choiceNode(start + '2', 'Play?', [
                        this.btnItem(start, play, 'open room'),
                        this.btnItem(start, end, 'end game')
                    ])
                ]
            case play:
                return [
                    this.subTreeNode(start + '1', Rooms)
                ]
            case again: 
                return [
                    this.textNode(start + '1', [
                        this.textItem('text', 'play again?')
                    ]),
                    this.choiceNode(start + '2', 'again? yes?', [
                        this.btnItem(start, play, 'open room'),
                        this.btnItem(start, end, 'end game')
                    ])
                ]
            case end:
                return [
                    this.textNode(start + '1', [
                        this.textItem('text', 'game over')
                    ])
                ]
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            changeHealth
        }, dispatch)
    }
}

const mapStateToProps = (state, a2, a3, a4) => {
    return {
        store: {
            start: state.start
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Start);