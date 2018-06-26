import {constants} from './../Constants.js'
import {createAsteroid} from './sample/index.js';
let ast1 = createAsteroid();
export const reducer = (
    state = {
        [constants.inventory.items]:{
            [constants.mine.samples]:{
                [ast1.sample.id]: ast1.sample
            },
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
