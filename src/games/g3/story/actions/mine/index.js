
//import Factory from './../../Factory.js';
import {constants, messages} from './../../Constants.js';
// import {getRandomItem} from './../../../../../utilities/randomizer.js';
// import {guid} from './../../../../../utilities/ids.js';
import {setFSMState} from './../reducers.js';
import {addSample} from './../../items/sample/index.js';
import {addLog} from './../../../store/log.js';
import {createAsteroid} from './../../items/sample/index.js';

//console.log("lounge importing constants " + constants);
const id = constants.actions.mine;
const type = constants.types.actions;
const S_ENTRY = 'enter',
    S_LOOK = 'look',
    S_MINE = 'mine',
    A_RETURN = 'return';

//0 - entry
//1 - 
let asteroid = null;
const fsm = {
        type, id,
        onInput: (input, props) => {
                console.log("fsm mine recieved input! id: " + props.id);
                console.log(input);
                switch(props.mystate.state){
                    case S_LOOK:
                        //can choose to sit down - s2, or go to control room/exir - s3
                        if(input[constants.input.vId] === S_MINE){
                            //console.log("lounge changing state to sitting down");
                            props.setFSMState(props.id, S_MINE);
                        }else if(input[constants.input.vId] === constants.zones.control){
                            //goback
                            props.onInput(input.changeFrom(messages.toFSMState(props.id, S_ENTRY)));
                        }else if(input[constants.input.vId] === S_LOOK){
                            //roll asteroid
                            asteroid = createAsteroid();
                            props.setFSMState(props.id, S_LOOK);
                        }else if(input[constants.input.vId] === A_RETURN){
                            props.setFSMState(props.id, S_ENTRY);
                            props.onInput(messages.output(props.id, {}))
                        }  
                        break;
                    case S_MINE:
                        if(input[constants.input.vId] === S_LOOK){
                            //save the sample in inventory/samples
                            props.addSample(asteroid.sample);
                            //continue mining
                            asteroid = createAsteroid();
                            props.setFSMState(props.id, S_LOOK);
                        }
                        break;
                    case S_ENTRY:
                    default:
                        //enter fsm selected, dispatch setFSMState
                        //is a location FSM, dispatch setZone for Index to update
                        if(input[constants.input.vId] === S_LOOK){
                            //roll asteroid
                            asteroid = createAsteroid();
                            //props.onInput(messages.changeZone(props.id, messages.toFSMState(props.id, S_LOOK)));
                            props.setFSMState(props.id, S_LOOK);
                            props.onInput(messages.action(id))
                        }
                        break;
                }
        },
        onRender: (builder, props, factory) => {
           // console.log("fsm lounge render, props" + props.mystate.state);
            switch(props.mystate.state){
                case S_LOOK:
                    return [
                        builder.getText(0, 'there is a reasonably sized asteroid in front of you ' 
                        + asteroid.description),
                        builder.getButtonSet(1, [
                            builder.describeBtn(S_MINE, 'mine asteroid'),
                            builder.describeBtn(S_LOOK, 'look for another'),
                            builder.describeBtn(A_RETURN, 'return')
                        ])
                    ]
                case S_MINE:
                    return [
                        builder.getText(0, 'you have no idea what material is, youll analyse it later'),
                        builder.getButtonSet(1, [
                            builder.describeBtn(S_LOOK, 'add to inventory')
                        ])
                    ]
                case S_ENTRY:
                default:
                    return [
                        builder.getButtonSet(0, [
                            builder.describeBtn(S_LOOK, 'start mining')
                        ])
                    ]
            } 
        },
        getActions: () => {
            return{
                setFSMState, //setFSMState(id, state)
                addLog,
                addSample
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