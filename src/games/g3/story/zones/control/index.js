

import {constants, messages} from './../../Constants.js';
import {setFSMState, setZone} from './../reducers.js';

const id = 'control';
const type = constants.types.zones;

//0 - entry
//1 - 
const fsm = {
        type, id,
        onInput: (input, props) => {
                console.log("fsm control recieved input! state " + props.mystate.state 
                + " vId: " + input[constants.input.vId]);
                console.log(input);
                switch(props.mystate.state){
                    case 0:
                        //enter fsm selected, dispatch setFSMState
                        //is a location FSM, dispatch setZone for Index to update
                        if(input[constants.input.vId] === 0){
                            props.onInput(messages.changeZone(props.id, messages.toFSMState(props.id, 1)));
                        }
                        break;
                    case 1:
                        //can choose to sit down - s2, or go to control room/exir - s3
                        if(input[constants.input.vId] === 0){
                            props.setFSMState(props.id, 2);
                        }else if(input[constants.input.vId] === constants.zones.lounge){
                            props.onInput(input.changeFrom(messages.toFSMState(props.id, 0)));
                        }
                        break;
                }
        },
        onRender: (builder, props, factory) => {
            // console.log("fsm lounge render, props");
            // console.log(props);
            console.log("fsm control render, props" + props.mystate.state);
            switch(props.mystate.state){
                case 1:
                    let lounge = factory(constants.zones.lounge)
                    return [
                        builder.getText(0, 'you are in the control room'),
                        builder.getChildView(lounge.id, lounge),
                        builder.getButtonSet(1, [
                            builder.describeBtn(0, 'steer the ship')
                        ])
                    ]
                case 2:
                    return [
                            builder.getText(0, 'you steer the ship')
                        ]
                case 0:
                default:
                    return [
                        builder.getButtonSet(0, [
                            builder.describeBtn(0, 'enter control room')
                        ])
                    ]
            } 
        },
        getActions: () => {
            return{
                setFSMState, //setFSMState(id, state)
                setZone, //setZone(id) 
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