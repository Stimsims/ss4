import {constants} from './../Constants.js'
  import {createAsteroid} from './../items/sample/index.js';
let ast1 = createAsteroid();
export const reducer = (
    state = {
        [constants.inventory.items]:{
            [constants.mine.samples]:{
                [ast1.sample.id]: ast1.sample
            },
        },
        [constants.actions.mine]:{
            type: constants.types.actions,
            id: constants.actions.mine,
            state: 0,
        },
        [constants.actions.inventory]:{
            type: constants.types.actions,
            id: constants.actions.inventory,
            state: 0,
        }
    }, 
    action = {}) => {
        switch (action.type) {
            case 'ADD_SAMPLE':
                return {
                    ...state,
                    [constants.inventory.items]:{
                        [constants.mine.samples]: {
                            ...state.inventory.samples,
                            [action.payload.sample.id]: action.payload.sample
                        }
                    }
                }
            case 'SET_FSM_STATE_ACTION':
                console.log("action fsm setting " + action.payload.id + " state to " + action.payload.state);
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
    
    
export function addSample(sample){
    return{
        type: 'ADD_SAMPLE',
        payload: {
            sample
        }
    }
}

export function setFSMState(id, state){
    return{
        type: 'SET_FSM_STATE_ACTION',
        payload: {
            id, state
        }
    }
}