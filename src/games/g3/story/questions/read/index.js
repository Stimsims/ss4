
//import Factory from './../../Factory.js';
import {constants, messages} from './../../Constants.js';
import {setFSMState} from './../reducers.js';
import {setScore} from './../reducers.js';

const id = 'read';
const type = constants.types.questions;
const q1 = 'q1';
let output = {

}
//0 - entry
//1 - 
const fsm = {
        type, id,
        onInput: (input, props) => {
                console.log("fsm lounge recieved input!");
                console.log(input);
                switch(props.mystate.state){
                    case 0:
                        //enter fsm selected, dispatch setFSMState
                        //is a location FSM, dispatch setZone for Index to update
                        props.setFSMState(props.id, 1);
                        props.onInput(messages.action(props.id))
                        break;
                    case 1:
                        props.setFSMState(props.id, 2);
                        break;
                    case 2:
                        if(input[constants.input.vId] === 0){
                            //wrong answer
                            output[q1] = {
                                total: 1,
                                score: 0
                            }
                            props.setFSMState(props.id, 3);
                        }else if(input[constants.input.vId] === 1){
                            //right answer
                            output[q1] = {
                                total: 1,
                                score: 1
                            }
                            props.setFSMState(props.id, 4);
                        }
                        break;
                    case 3:
                    case 4:
                        //record performance
                        console.log("read returning score " + props.id);
                        console.log(output);
                        props.setScore(props.id, output);
                        props.setFSMState(props.id, 0);
                        props.onInput(messages.output(props.id, {
                            output
                        }))
                        break;
                }
        },
        onRender: (builder, props, factory) => {
            // console.log("fsm lounge render, props");
            // console.log(props);
            switch(props.mystate.state){
                case 1:
                    return [
                        builder.getText(0, 'You read: 1+1=2'),
                        builder.getButtonSet(1, [
                            builder.describeBtn(0, 'next')
                        ])
                    ]
                case 2:
                    return [
                        builder.getText(0, 'What is 1+1?'),
                        builder.getButtonSet(1, [
                            builder.describeBtn(0, '1'),
                            builder.describeBtn(1, '2')
                        ])
                    ]
                case 3:
                    return [
                        builder.getText(0, 'you are wrong'),
                        builder.getButtonSet(1, [
                            builder.describeBtn(0, 'return')
                        ])
                    ]
                case 4:
                    return [
                        builder.getText(0, 'you are right'),
                        builder.getButtonSet(1, [
                            builder.describeBtn(0, 'return')
                        ])
                    ]
                case 0:
                default:
                    return [
                        builder.getButtonSet(0, [
                            builder.describeBtn(0, 'read book')
                        ])
                    ]
            } 
        },
        getActions: () => {
            return{
                setFSMState, //setFSMState(id, state) setScore(id, scores
                setScore
            }
        },
        getMapState: (state, props) => {
            return {
                mystate: state[type][props.id]
            }
        }
}
;
export default fsm;