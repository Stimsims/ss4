import {constants} from './Constants.js';
  
export const reducer = (
    state = {
        [constants.relations.contains]:{

        }
    }, 
    action = {}
) => {
    switch (action.type) {
        default:
            return state
    }
}
    