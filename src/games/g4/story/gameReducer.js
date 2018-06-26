import constants from './Constants.js';
  
export const reducer = (
    state = {
        health: 100,
        zone: constants.fsm.zones.lounge
    }, 
    action = {}
) => {
    switch (action.type) {
        default:
            return state
    }
}
    
export function setHealth(time, temp){
    return{
        type: 'SET_HEALTH',
        payload: {
            time,
            temp
        }
    }
}

