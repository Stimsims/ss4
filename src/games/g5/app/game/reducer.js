//responsible for updating fsm state, adding items, editing items, deleting items and maintaining their relationships

import {store} from './../keys.js';
  
export const reducer = (
    state = {
        location: store.zLounge
    }, 
    action = {}
) => {
    switch (action.type) {
        case 'SET_LOCATION':
            return {
                location: action.payload.id
            }
        default:
            return state
    }
}

//handled by parent reducer
export function setLocation(id){
    return {
        type: `SET_LOCATION`,
        payload:{
            id
        }
    }
}
  