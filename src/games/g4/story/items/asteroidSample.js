import {getRandomItem} from './../../../../utilities/randomizer.js';
import {guid} from './../../../../utilities/ids.js';
import {constants} from './../Constants.js';

const materials = ['iron', 'cobalt', 'copper', 'silver']

export const createSample = () => {
    let material = getRandomItem(materials);
    let id = guid();
    return {
        id,
        type: constants.items.asteroidSample,
        game:{
            element: material,
            weight: 10*Math.random() + 3
        },
        user:{
            element: null,
            weight: null
        }
    }
}
