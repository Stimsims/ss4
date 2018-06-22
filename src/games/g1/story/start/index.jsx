console.log("g1 story index");

import Story from './../../components/Story.jsx';
import Rooms from './../rooms/index.jsx';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeHealth} from './store.js';
import {setComponentState, setComponentNodeId} from './../store.js';

//const start = 'start_0';
const intro = 'intro_0';
const play = 'play';
const again = 'again'
const restart = 'restart_0';
const end = 'end_0';

const b1 = 'b122';

class Start extends Story{
    constructor(props){
        super(props);
        console.log("start constructor, has store state?");
        console.log(props);
        //start, end
        this.state = {
            ...this.state,
            // nodeId: this.props.store.component[this.props.iId]? 
            // this.props.store.component[this.props.iId]:start,
            [b1]: this.subTreeNode(b1, Rooms)
        }
        
    }

    onInput(input){
         console.log("on start branch input " + this.getNodeId());
         console.log(input);
        // console.log(this.props);
        //some input will change state, some input will move the story forward
        switch(this.getNodeId()){
            case again:
            case this.state.keys.start:
                if(input[this.state.keys.iId] === b1){
                    // this.setState({
                    //     nodeId: b1
                    // })
                    this.props.actions.setComponentNodeId({
                        id: this.props.iId,
                        nodeId: b1
                    });
                }
                break;
            case b1:
                if(input[this.state.keys.iId] === b1){
                    //back from b1, create a new room and start over
                    this.setState({
                        nodeId: again,
                        [b1]: this.subTreeNode(b1, Rooms)
                    })
                }
                break;
        }
    }

    renderNode(){
       console.log("start render node " + this.getNodeId());
        switch(this.getNodeId()){
            case this.state.keys.start:
                return [
                    this.textNode(this.state.keys.start + '1', [
                        this.textItem('text', 'Welcome, start game')
                    ]),
                    this.state[b1]
                ]
            case again: 
                return [
                        this.textNode(this.state.keys.start+ '1', [
                            this.textItem('text', 'play again?')
                        ]),
                        this.state[b1]
                    ]
            case end:
                return [
                    this.textNode(this.state.keys.start + '1', [
                        this.textItem('text', 'game over')
                    ])
                ]
            case b1:
                return [
                    this.state[b1]
                ]
        }
    }


}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            changeHealth,
            setComponentState,
            setComponentNodeId
        }, dispatch)
    }
}

const mapStateToProps = (state) => {
    // console.log("map start state to props");
    // console.log(state);
    return {
        store: {
            start: state.start,
            component: state.component
        }
    }
}

const ConnectedStart =connect(mapStateToProps, mapDispatchToProps)(Start)
export default ConnectedStart;