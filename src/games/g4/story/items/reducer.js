import {constants} from './../Constants.js';
 import {createSample} from './asteroidSample.js'; 
//stores fsm state information
// let sample = createSample();
// let sample1 = createSample();
// let sample2 = createSample();
export const reducer = (
    state = {
        [constants.items.asteroidSample]:{

        },
        [constants.items.stock]:{

        }
    }, 
    action = {}
) => {
    switch (action.type) {
        case 'ADD_SAMPLE':
            console.log("items reducer add sample");
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
        case 'ADD_SAMPLE_TO_STOCK':
            let sample = state[constants.items.asteroidSample][action.payload.sampleId];
            let uElem = sample.user.element;
            let gElem = sample.game.element;
            let weight = sample.game.weight;
            //console.log("reducer add sample to stock, gElem = " + gElem + " uElem = " + uElem);
            //add it to the stock of type element user has identified
            //add it to the element within that stock that the game has rolled
            let stock = state[constants.items.stock][uElem]?state[constants.items.stock][uElem]:{
                id: uElem
            };
            let currentWeight = stock[gElem]?stock[gElem]:0;
         //   console.log("add sample " + uElem + " to stock, current weight = " + currentWeight + " next weight = " + weight);
            let n = {
                ...stock,
                [gElem]: currentWeight + weight
            }
            let samples = state[constants.items.asteroidSample];
            let deleted = delete samples[action.payload.sampleId];
            // console.log("add sample to stock, new samples:");
            // console.log(samples);
            // console.log("add sample to stock, deleted:");
            // console.log(deleted);
            return{
                ...state,
                [constants.items.asteroidSample]:{
                    ...samples
                },
                [constants.items.stock]:{
                    ...state[constants.items.stock],
                    [uElem]:{
                        ...n
                    }
                }
            }
        default:
            return state;
    }
}
//parent needs to modify samples and stocks
export function addSampleToStock(sampleId, element){
    console.log("action addSampleToStock " + element);
    return {
        type: 'ADD_SAMPLE_TO_STOCK',
        payload:{
            sampleId, element
        }
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


