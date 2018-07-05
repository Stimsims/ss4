import {getRandomItem} from './../../../../utilities/randomizer.js';
import {guid} from './../../../../utilities/ids.js';
import {constants} from './../Constants.js';
console.log("creating samples");
const materials = Object.keys(constants.elements);
console.log("create sample materials", materials);

export const createSample = () => {
    let material = getRandomItem(materials);
    let id = guid();
    return {
        id,
        type: constants.items.asteroidSample,
        element: material,
        weight: 10*Math.random() + 3,
        user:{
            element: null,
            weight: null
        }
    }
}
