import {constants} from './../Constants.js'
  
export const reducer = (
    state = {
        position:{
            type: constants.types.zones,
            id: 'lounge',
        },
        lounge: {
            type: constants.types.zones,
            id: 'lounge',
            state: 'in'
        },
        control:{
            type: constants.types.zones,
            id: 'control',
            state: 0
        }
    }, 
    action = {}) => {
        switch (action.type) {
            case 'CHANGE_ZONE':
                // console.log("action change zone");
                // console.log(action);
                return {
                    ...state,
                    position:{
                        ...state.position,
                        id: action.payload.to.id
                    },
                    [action.payload.to.id]:{
                        ...state[action.payload.to.id],
                        state: action.payload.to.state
                    },
                    [action.payload.from.id]:{
                        ...state[action.payload.from.id],
                        state: action.payload.from.state
                    }
                }
            case 'SET_ZONE':
                return {
                    ...state,
                    position:{
                        ...state.position,
                        id: action.payload.id
                    }
                }
            case 'SET_FSM_STATE_ZONE':
                console.log("zone fsm setting " + action.payload.id + " state to " + action.payload.state);
                return {
                    ...state,
                    [action.payload.id]: {
                        ...state[action.payload.id],
                        state: action.payload.state
                    }
                };
            default:
                return state
        }
    }
    
//from(id,state) to(id, state)
export const changeZone = (payload) => {
    return {
        type: 'CHANGE_ZONE',
        payload
    }
}
// export function setZone(id){
//     return{
//         type: 'SET_ZONE',
//         payload: {
//             id
//         }
//     }
// }

export function setFSMState(id, state){
    return{
        type: 'SET_FSM_STATE_ZONE',
        payload: {
            id, state
        }
    }
}



    
// export const actions = {
//     setZone
// }