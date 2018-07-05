import * as fsm from './../story/fsm/reducer.js';


describe('fsm reducer', () => {
    it('should return an empty initial state', () => {
        expect(fsm.reducer(undefined, {})).toEqual({

        })
    })
    it('should create and hold any state for a given fsm', () => {
        expect(fsm.reducer({},{
            type: 'SET_FSM_STATE',
            payload: {
                id: 'testFSM', 
                state: {state: 'fakeState', randomData: 33}
            }
        })
        ).toEqual({
            testFSM: {state: 'fakeState', randomData: 33}
        })
        
        expect(fsm.reducer({
            testFSM: {state: 'fakeState', randomData: 33}
        },{
            type: 'SET_FSM_STATE',
            payload: {
                id: 'testFSM', 
                state: {state: 'fakeState', randomData2: 12}
            }
        })
        ).toEqual({
            testFSM: {state: 'fakeState', randomData2: 12, randomData: 33}
        })
    })
})



/*

          return {
                ...state,
                relations:{
                    [constants.relations.contains]:{
                        [constants.fsm.actions.inventory]:{
                            ...contents,
                            [action.payload.type]: [
                                ...ray,
                                action.payload.id
                            ]
                        }
                    }
                }
            }
export const reducer = (
    state = {

    }, 
        case 'SET_FSM_STATE':
            console.log('action setfsm ' + action.payload.id);
            return {
                ...state,
                [action.payload.id]:{
                    ...state[action.payload.id],
                    ...action.payload.state
                }
            };
export function setFSMState(id, state){
    return{
        type: 'SET_FSM_STATE',
        payload: {
            id, state
        }
    }
}
*/