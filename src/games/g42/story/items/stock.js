// import {getRandomItem} from './../../../../utilities/randomizer.js';
// import {guid} from './../../../../utilities/ids.js';
import {constants} from './../Constants.js';

//a stock is an accumulation of an item based on either count or weight
//the contents of a stock may be different from what the id claims to be if the user is wrong
export const createStock = (id) => {
    return {
        id,
    }
}

//TODO, may want to add deep cloning if stock becomes multi-layered

export const addToStock = (stock, key, value) => {
    let newStock = {...stock};
    let current = 0;
    if(stock[key]){
        current = stock[key];
    }
    newStock[key] = current + value;
    console.log("addToStock", newStock)
    return newStock;
} 