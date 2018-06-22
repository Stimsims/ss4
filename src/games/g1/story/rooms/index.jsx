console.log("g1 story index");
import Story from './../../components/Story.jsx';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeHealth} from './store.js';
import {setComponentState, setComponentNodeId} from './../store.js';

const start = 'room_0';
const inside = 'in0';
 const next = 'next_1';
const back = 'back+0';

const b1 ='b1av';
const b2= 'b2s3';

class Rooms extends Story{
    constructor(props){
        super(props);
        //start, end
         console.log("story room constructor node id " + this.getNodeId());
         console.log(props);
        this.state = {
            ...this.state,
            // nodeId: this.props.store.component[this.props.iId]? 
            // this.props.store.component[this.props.iId]:start,
            [b1]: this.subTreeNode(b1, Connected),
            [b2]: this.subTreeNode(b2, Connected)
        }
        console.log(this.state);
        console.log("story room node id " + this.getNodeId());
    }

    onInput(input){
         console.log("on input " + this.props.id + " node " + this.state.nodeId);
         console.log(input);
        //some input will change state, some input will move the story forward
        switch(this.state.nodeId){
            case this.state.keys.start:
                //player has initiated story sequence
                if(input[this.state.keys.iId] === inside){
                    // this.setState({
                    //     nodeId: inside,
                    //     counter: this.state.counter + 1
                    // })
                    this.props.actions.setComponentNodeId({
                        id: this.props.iId,
                        nodeId: inside
                    });
                    this.props.onInput({
                        iId: this.props.iId
                    });
                }
            case inside:
                // console.log("onInput, id " + this.props.id + " node inside");
                // console.log(input);
                if(input[this.state.keys.iId] === back){
                    this.setState({
                        nodeId: start,
                        counter: this.state.counter + 1
                    })
                    this.props.onInput({
                        iId: this.props.iId
                    });
                }else if(input[this.state.keys.iId] === b1){
                    console.log("updated node id of " + this.props.id + " to " + b1)
                    this.setState({
                        nodeId: b1
                  })
                }else if(input[this.state.keys.iId] === b2){
                    console.log("updated node id of " + this.props.id + " to " + b2)
                    this.setState({
                        nodeId: b2
                  })
                }
                break;
            case b1:
                if(input[this.state.keys.iId] === b1){
                    this.setState({
                        nodeId: inside
                })
                }
                break;
            case b2:
                if(input[this.state.keys.iId] === b2){
                    this.setState({
                        nodeId: inside
                })
                }
                break;
        }
    }
    getBg(){
        switch(this.state.nodeId){
            case inside:
                return this.bgFill;
            default: 
                return this.bgInline;
        }
    }
    renderNode(){
        console.log("story render room "+ this.props.id + " node " + this.state.nodeId);
        switch(this.state.nodeId){
            case this.state.keys.start:
                return [
                    this.choiceNode(this.state.keys.start + '2', 'room: enter room?', [
                        this.btnItem(this.state.keys.start, inside, 'open new room '+ this.props.id)
                    ])
                ]
            case inside:
                return [
                    this.textNode(inside + '1', [
                        this.textItem('text', 'You find yourself in a small room, with 4 small doors, counter: ' + this.state.counter
                        + " id: " + this.props.id)
                    ]),
                    this.state[b1],
                    this.state[b2],
                    this.choiceNode(inside + '2', 'go back?', [
                        this.btnItem(inside, back, 'go back')
                    ])
                ]
            case b1:
            return [
                this.state[b1]
            ]
            case b2:
            return [
                this.state[b2]
            ]
            case back:
                return null;
                // return [
                //     this.textNode(start + '1', [
                //         this.textItem('text', 'shouldnt display, should be complete counter: ' + this.state.counter
                //         + " id: " + this.props.id)
                //     ])
                // ]
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
    console.log("map room state to props");
    console.log(state);
    return {
        store: {
            rooms: state.rooms,
            component: state.component
        }
    }
}

const Connected =connect(mapStateToProps, mapDispatchToProps)(Rooms)
export default Connected;