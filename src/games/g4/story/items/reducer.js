import constants from './../Constants.js';
 import {createSample} from './asteroidSample.js'; 
//stores fsm state information
let sample = createSample();
let sample1 = createSample();
let sample2 = createSample();
export const reducer = (
    state = {
        [constants.items.asteroidSample]:{
            [sample.id]: sample,
            [sample1.id]: sample1,
            [sample2.id]: sample2
        }
    }, 
    action = {}
) => {
    switch (action.type) {
        case 'ADD_SAMPLE':
            return {
                ...state,
                [constants.items.asteroidSample]:{
                    ...state[constants.items.asteroidSample],
                    [action.payload.sample.id]: action.payload.sample
                }
            };
        case 'EDIT_ITEM':
            let update = {
                ...action.payload.item,
                user:{
                    ...action.payload.item.user,
                    [action.payload.key]: action.payload.val
                }
            }
            return {
                ...state,
                [action.payload.item.type]:{
                    ...state[action.payload.item.type],
                    [action.payload.item.id]: update
                }
            }
        default:
            return state;
    }
}

//handled by parent reducer
export function addSample(sample){
    console.log("action set zone");
    return {
        type: `ADD_SAMPLE`,
        payload:{
            sample
        }
    }
}

//handled by parent reducer
export function editItem(item, key, val){
    console.log("action edit item key " + key + " val " + val);
    return {
        type: `EDIT_ITEM`,
        payload:{
            item, key, val
        }
    }
}


