console.log("g1 story index");
import Story from './../../components/Story.jsx';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeHealth} from './store.js';

const start = 'room_0';
const next = 'next_1';
const back = 'back+0';

class Rooms extends Story{
    constructor(props){
        super(props);
        //start, end
        console.log("story room constructor " + props.id)
        this.state = {
            ...this.state,
            nodeId: start,
            counter: 0,
        }
    }
    onInput(input){
         console.log("on input " + this.props.id);
         console.log(input);
        //some input will change state, some input will move the story forward
        switch(this.state.nodeId){
            case start:
                if(input[this.state.keys.iId] === next){
                    //  this.props.actions.changeHealth(5);
                      this.setState({
                          nodeId: next,
                          counter: this.state.counter + 1
                      })
                  }else if(input[this.state.keys.iId] === back){
                    this.props.onComplete({
                        counter: this.state.counter
                    });
                    //   this.setState({
                    //       nodeId: back,
                    //       counter: this.state.counter + 1
                    //   })
                  }
                break;
            case next:
                  console.log("onInput, next node id: " + this.props.id);
                  this.setState({
                        nodeId: start
                    })
                break;
        }
    }
    // onSubStoryComplete(input){
    //     // console.log("subtreee complete, consolidate info");
    //     // console.log(input);
    //     //set relevant subtree to null
    //     console.log("sub story complete, my counter: " + this.state.counter
    //     + " sub counter: " + input.counter + " id: " + this.props.id);
    //     this.setState({
    //         nodeId: start
    //     })
    // }
    renderNode(){
        console.log("story render room "+ this.props.id);
        switch(this.state.nodeId){
            case start:
                return [
                    this.textNode(start + '1', [
                        this.textItem('text', 'You find yourself in a small room, with 4 small doors, counter: ' + this.state.counter
                        + " id: " + this.props.id)
                    ]),
                    this.choiceNode(start + '2', 'enter another room?', [
                        this.btnItem(start, next, 'open new room'),
                        this.btnItem(start, back, 'go back')
                    ])
                ]
            case next:
                return [
                    this.subTreeNode(start + '1', Rooms)
                ]
            case back:
                return [
                    this.textNode(start + '1', [
                        this.textItem('text', 'shouldnt display, should be complete counter: ' + this.state.counter
                        + " id: " + this.props.id)
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
            rooms: state.rooms
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);