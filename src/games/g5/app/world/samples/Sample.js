
import {guid} from './../../../../../utilities/ids.js';
import {getRandomItem} from './../../../../../utilities/randomizer.js';
import {store, sample, units} from './../../keys.js';

export const create = () => {
    let id = guid();
    let type = store.iSample;
    let element = getRandomItem(sample.elements);
    return {
        id, type, element,
        weight: Math.floor(Math.random()*10) + 5,
        weightUnit: units.g,
        user:{
            element:null, weight: null
        }
    }
}