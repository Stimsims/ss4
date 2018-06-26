import {getRandomItem} from './../../../../../utilities/randomizer.js';
import {guid} from './../../../../../utilities/ids.js';

export function createAsteroid(){
    let elem = ['iron', 'magnesium', 'copper', 'silver'];
    let e = getRandomItem(elem);
    return {
        description: `it is a ${e} asteroid`,
        sample:{
            id: guid(),
            name: 'unknown sample',
            game:{
                weight: Math.random()*10 + 5,
                element: e
            },
            user:{
                weight: null,
                element:null
            }
        }
    }
}