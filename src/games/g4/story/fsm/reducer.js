import constants from './../Constants.js';
  
//stores fsm state information
/*
        [constants.fsm.zones.lounge]:{
            [constants.fsm.keys.state]:null, 
            [constants.fsm.keys.item]:null
        },
        [constants.fsm.zones.control]:{
            [constants.fsm.keys.state]:null, 
            [constants.fsm.keys.item]:null
        }
*/
export const reducer = (
    state = {

    }, 
    action = {}
) => {
    switch (action.type) {
        case 'SET_FSM_STATE':
            console.log('action setfsm ' + action.payload.id);
            return {
                ...state,
                [action.payload.id]:{
                    ...state[action.payload.id],
                    ...action.payload.state
                }
            };
        default:
            return state;
    }
}

//handled by parent reducer
export function setZone(zone, state){
    console.log("action set zone");
    return {
        type: `SET_ZONE`,
        payload:{
            zone, state
        }
    }
}
    
export function setFSMState(id, state){
    return{
        type: 'SET_FSM_STATE',
        payload: {
            id, state
        }
    }
}

