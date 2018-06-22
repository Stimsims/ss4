
//import Factory from './../../Factory.js';
import {constants, messages} from './../../Constants.js';
//import {setFSMState} from './../reducers.js';
import {setFSMState} from './../reducers.js';
import {addLog} from './../../../store/log.js';

console.log("lounge importing constants " + constants);
const id = 'lounge';
const type = constants.types.zones;
const S_ENTRY = 'enter',
    S_INSIDE = 'in',
    S_SIT = 'sit',
    S_READ = 'read';

//0 - entry
//1 - 
const fsm = {
        type, id,
        onInput: (input, props) => {
                console.log("fsm lounge recieved input!");
                console.log(input);
                switch(props.mystate.state){
                    case S_INSIDE:
                        //can choose to sit down - s2, or go to control room/exir - s3
                        if(input[constants.input.vId] === S_SIT){
                            //console.log("lounge changing state to sitting down");
                            props.setFSMState(props.id, S_SIT);
                        }else if(input[constants.input.vId] === constants.zones.control){
                            props.onInput(input.changeFrom(messages.toFSMState(props.id, S_ENTRY)));
                        }
                        break;
                    case S_SIT:
                        if(input[constants.input.vId] === S_INSIDE){
                            props.setFSMState(props.id, S_INSIDE);
                        }else if(input[constants.input.vId] === S_READ){
                            //console.log("user wants to read");
                            props.addLog(constants.logTypes.action, 'you decided to read');
                            props.setFSMState(props.id, S_READ);
                        }
                        break;
                    case S_READ:
                        if(input[constants.input.vId] === S_READ){
                            console.log("recieved input from user reading");
                            props.setFSMState(props.id, S_SIT);
                        }
                        break;
                    case S_ENTRY:
                    default:
                        //enter fsm selected, dispatch setFSMState
                        //is a location FSM, dispatch setZone for Index to update
                        if(input[constants.input.vId] === S_INSIDE){
                            props.onInput(messages.changeZone(props.id, messages.toFSMState(props.id, S_INSIDE)));
                        }
                        break;
                }
        },
        onRender: (builder, props, factory) => {
           // console.log("fsm lounge render, props" + props.mystate.state);
            switch(props.mystate.state){
                case S_INSIDE:
                    return [
                        builder.getText(0, 'you are standing in the lounge'),
                        builder.getChildView(constants.zones.control, factory(constants.zones.control)),
                        builder.getButtonSet(1, [
                            builder.describeBtn(S_SIT, 'sit down')
                        ])
                    ]
                case S_SIT:
                    return [
                        builder.getText(0, 'you are sitting'),
                        builder.getChildView(S_READ, factory(constants.questions.read)),
                        builder.getButtonSet(1, [
                            builder.describeBtn(S_INSIDE, 'stand up')
                        ])
                    ]
                case S_READ:
                    return [
                        builder.getChildView(S_READ, factory(constants.questions.read))
                    ]
                case S_ENTRY:
                default:
                    return [
                        builder.getButtonSet(0, [
                            builder.describeBtn(S_INSIDE, 'enter lounge')
                        ])
                    ]
            } 
        },
        getActions: () => {
            return{
                setFSMState, //setFSMState(id, state)
                addLog
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