import {constants} from './Constants.js';
  
export const reducer = (
    state = {
        [constants.relations.contains]:{
            [constants.fsm.zones.control]:{
                [constants.items.ship]:[constants.items.engine, constants.items.hull]
            }
        }
    }, 
    action = {}
) => {
    switch (action.type) {
        default:
            return state
    }
}
    